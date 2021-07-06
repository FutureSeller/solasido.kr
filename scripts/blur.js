const path = require('path')
const sharp = require('sharp')
const fs = require('fs')

async function processImage(imagePath) {
  const sharpImg = sharp(imagePath)
  const meta = await sharpImg.metadata()
  const placeholderImgWidth = 20
  const imgAspectRatio = meta.width / meta.height
  const placeholderImgHeight = Math.round(placeholderImgWidth / imgAspectRatio)
  const imgBase64 = await sharpImg
    .resize(placeholderImgWidth, placeholderImgHeight)
    .toBuffer()
    .then(buffer => `data:image/${meta.format};base64,${buffer.toString('base64')}`)

  return {
    src: path
      .relative(process.cwd(), imagePath)
      .substring('public'.length),
    blurDataURL: imgBase64
  }
}

const getImages = (dirname, project) => {
  return fs
    .readdirSync(path.join(dirname, project))
    .filter(filename => !filename.includes('json'))
    .map(filename => path.join(process.cwd(), `/public/images/${project}/${filename}`))
}

const main = async () => {
  const DIR = path.join(process.cwd(), `/public/images`)
  const projects = fs.readdirSync(DIR).filter(filename => !filename.includes('.'))

  const imageMeta = await projects.reduce(async (promise, project) => {
    let metadata = await promise.then()

    const images = getImages(DIR, project)
    const proccessedImage = await Promise.all(images.map(image => processImage(image)))

    metadata = {
      thumbnail: {
        ...metadata['thumbnail'],
        [project]: proccessedImage.find(image => image.src.includes('thumbnail')).blurDataURL
      },
      projects: {
        ...metadata['projects'],
        [project]: proccessedImage.filter(image => !image.src.includes('thumbnail'))
      }
    }

    return Promise.resolve(metadata)
  }, Promise.resolve({}))

  const thumbnailJson = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), `/public/data/thumbnails.json`))
  )
  const thumbnails = thumbnailJson.map(thumbnailItem => ({
    ...thumbnailItem,
    blurDataURL: imageMeta['thumbnail'][thumbnailItem.slug]
  }))

  fs.writeFileSync(path.join(process.cwd(), `/public/data/thumbnails.json`), JSON.stringify(thumbnails, null, 2))

  Object.entries(imageMeta['projects']).forEach(([projectSlug, metadata]) => {
    fs.writeFileSync(
      path.join(process.cwd(), `/public/images/${projectSlug}/imageMeta.json`),
      JSON.stringify(metadata)
    )
  })
}

main()

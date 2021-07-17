import styled from '@emotion/styled'
import Slider from 'react-slick'

interface Props {
  initialSlide: number
  children: React.ReactNode[]
}

export default function StyledSlider({ initialSlide, children }: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  }

  return (
    <Wrapper { ...settings } initialSlide={initialSlide}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled(Slider)`
  &.slick-slider {
    position: relative;
    width: 100%;
    padding: 0 10%;
  }

  .slick-prev, 
  .slick-next {
    position: absolute;
    top: 50%;

    &::before {
      font-size: 40px;
      color: black;
    }
  }

  .slick-prev {
    left: 3%;

    &::before {
      content: '<';
    }
  }

  .slick-next {
    right: 3%;

    &::before {
      content: '>';
    }
  }
`

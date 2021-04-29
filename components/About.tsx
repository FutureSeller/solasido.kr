import styles from './About.module.scss'

import classNames from 'classnames'
import Panel from './common/Panel'

const introduction = {
  ko: {
    name: '정한솔',
    position: (<>브랜드 아이덴티티, <br /> 그래픽 디자이너</>),
    ma: (<>경희대학교 교육대학원 <br /> 미술교육전공 석사 <br /> 2017. 03. - 2019. 08. </>),
    ba: (<>서울과학기술대학교 조형대학 <br /> 시각디자인학과 학사 <br /> 2010. 03. - 2016. 02.</>),
    objectives: (<>
      불확실성이 만연한 세상에서 <br />
      명확한 아이덴티티는 확실성을 <br />
      제공할 수 있으며, <br />
      아이덴티티는 디자인을 통해 <br />
      시각화할 수 있습니다. <br />
      현상을 이해하고 브랜드의 가치를 <br />
      시각화하여 전달하고자 합니다.
    </>),
  },
  en: {
    name: 'HANSOL CHUNG',
    position: (<>Brand Identity, <br /> Graphic Designer</>),
    ma: (<>
      Kyung Hee University <br />
      Graduate School of Education <br />
      Art Education M.A. <br />
      2017. 03. - 2019. 08.
    </>),
    ba: (<>
      Seoul National University <br />
      of Science and Technology <br />
      Visual Communication Design B.A. <br />
      2010. 03. - 2016. 02.
    </>),
    objectives: (<>
      In a world of uncertainty, <br />
      the clear identity can provide <br />
      certainty, and the identity <br />
      can be visualized through design. <br />
      When I design, I understand <br />
      the phenomenon and visualize <br />
      the value of the brand so that <br />
      convey the value.
    </>)
  }
}

export default function About() {
  return (
    <Panel className={styles.About} heading={<h2 className={styles.About__title}>ABOUT</h2>}>
      <section className={styles.About__introduction}>
        <h3 className={styles.screen__text}>About Me</h3>
        {
          Object.entries(introduction).map(([key, content]) => (
            <ol className={styles.About__item} key={`about-me-${key}`}>
              <li className={styles.About__name}>{content.name}</li>
              <li className={styles.About__position}>{content.position}</li>
              <li className={classNames(styles.About__school, {
                  [styles['About__school-en']]: key === 'en'
              })}>
                {content.ma}
              </li>
              <li className={classNames(styles.About__school, {
                [styles['About__school-en']]: key === 'en'
              })}>
                {content.ba}
              </li>
              <li className={classNames(styles.About__objectives, {
                [styles['About__objectives-en']]: key === 'en'
              })}>
                {content.objectives}
              </li>
            </ol>
          ))
        }
      </section>
      <section className={styles.About__experiences}>
        <div className={classNames(styles.About__work, styles.About__item)}>
          <div>
            <h3 className={styles.About__subtitle}>WORK EXPERIENCE</h3>
            <ol>
              <li>
                2020 - 2020<br />
                고려대학교 디자인혁신센터<br />
                디자이너<br />
              </li>
              <li>
                2015 - 2018<br />
                우아한 형제들 배민찬<br />
                외주 디자이너<br />
              </li>
            </ol>
          </div>
          <div>
            <h3 className={styles.About__subtitle}>AWARDS</h3>
            <ol>
              <li>
                2015<br />
                Adobe Design Achievement<br />
                Awards<br />
                Print Communications<br />
                Category Semifinalist<br />
              </li>
              <li>
                2011<br />
                제3회 삼성모바일디스플레이<br />
                OLED 아이디어 공모전<br />
                광고 디자인 부문 Finalist<br />
              </li>
              <li>
                2010<br />
                한국차문화협회 차의 세계화전<br />
                제2회 대한민국 차 패키지<br />
                디자인 공모전<br />
                패키지 디자인 특선 수상<br />
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h3 className={styles.About__subtitle}>OUTSOURCING</h3>
          <ol>
            <li>
              2021<br />
              InkTec<br />
              아마존 입점 상세페이지<br />
            </li>
            <li>
              2020<br />
              화연<br />
              브랜드 디자인, 패키지 디자인<br />
            </li>
            <li>
              2019<br />
              제9회 젊은의사포럼<br />
              행사 아이덴티티, 그래픽 디자인<br />
            </li>
            <li>
              2018<br />
              서울특별시 사회적경제지원센터<br />
              위메프 입점 제품 썸네일,<br />
              상세 페이지, 배너 디자인<br />
            </li>
            <li>
              2017<br />
              CHEMSTREE<br />
              브랜드 디자인<br />
            </li>
            <li>
              2015 - 2016<br />
              OVIS<br />
              브랜드 디자인<br />
            </li>
            <li>
              2012<br />
              대한민국 대학생 교육기부단<br />
              브랜드 디자인 리뉴얼<br />
            </li>
          </ol>
        </div>
      </section>
    </Panel>
  )
}
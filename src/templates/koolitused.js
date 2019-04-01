import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// components
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// styles
import styled from 'styled-components'
import screen from '../components/styled/screen';
import colors from '../components/styled/colors';
import { H1WidthBackground, H2 } from '../components/styled/typography'
import SectionWithBackground from '../components/styled/SectionWithBackground'

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  align-items: flex-start;
  grid-gap: 1rem;
  justify-content: center;
  ${screen.medium`grid-template-columns: 768px;`};
`;

const ButtonLink = styled(Link)`
  display: block;
  font-weight: bold;
  padding: 1.5rem;
  border-radius: 2rem;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  }
`;

export const KoolitusedTemplate = (
  {
    title,
    content,
    description,
    contentComponent
  }
) => {
  const PageContent = contentComponent || Content
  const imageFirstPackage = '/img/school-first-package.jpg'
  const imageSecondPackage = '/img/school-second-package.jpg'
  const imageThirdPackage = '/img/school-third-package.jpg'
  const imageMasterClass = '/img/vihurmoto-2019-auto24ring.jpg'
  const imageMarko = '/img/marko-rohtlaan-instruktor.jpg'
  return (
    <div>
    <SectionWithBackground
      backgroundImage={`url(${imageMasterClass})`}
    >
      <div css={`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        <H1WidthBackground>{title}</H1WidthBackground>
        <h3 css={`display: none;`}>{description}</h3>
      </div>
    </SectionWithBackground>
    <Grid>
      <section className="courses">
          <div className="courses__list">
            <div className="course-item course-item--first">
            <img className="course-item__image" src={imageMarko} alt="motokoolitus" />
            <H2 color={colors.blue}>Instruktor Marko Rohtlaan</H2>
            <p>Motokogemus 25 aastat. Olen õppinud mitmete maailmameistrite juures (Stephane Mertens, Terry Rymer, Oscar Rumi) ning võistelnud tipptiimides (Phase One Endrance, Diablo 666 Endurance, Azione Corse). Koolitamise kogemus aastast 2004. Olen 15 aastat erinevaid koolitusi läbi viinud. Nõustan enamust Eesti tippringrajasõitjaist ning ka algajaid (C-klass).</p>
              <p>Oled valmis natuke rohkem tskilisõidust teada saama? Tunned end mõnes sõiduolukorras ebakindlalt? Tahad endast ja oma rattast parima välja pigistada?</p>
              <p>Tutvu allolevate koolitustega võta ühendust!</p>
            </div>
          <div className="course-item">
            <img className="course-item__image" src={imageFirstPackage} alt="motokoolitus"/>
            <div className="course-item__body">
              <H2 color={colors.blue}>#1 Nullist sõitma</H2>
              <p>See koolitus sobib sulle, kui sa pole mitte kunagi mootorattaga sõitnud ja tahaksid proovida koos kogenud juhendajaga.</p>
              <p>Sisaldab mootorratta kasutamist.</p>
              <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 150 €</p>
              <ButtonLink to="/kontakt">
                <span role="img" aria-label="hand">👍</span> Soovin osaleda
              </ButtonLink>
            </div>
          </div>
          <div className="course-item">
            <img className="course-item__image" src={imageSecondPackage} alt="motokoolitus" />
            <div className="course-item__body">
              <H2 color={colors.blue}>#2 Kordame üle</H2>
              <p>Oled just load saanud või on sul need ammu olemas, aga oled sõitmise unustanud – see koolitus on just sinule.</p>
              <p>Võimalus rentida mootorratas koolituse ajaks.</p>
              <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 120 €</p>
              <ButtonLink to="/kontakt">
                <span role="img" aria-label="hand">👍</span> Soovin osaleda
              </ButtonLink>
            </div>
          </div>
          <div className="course-item">
            <img className="course-item__image" src={imageThirdPackage} alt="motokoolitus" />
            <div className="courses__body">
              <H2 color={colors.blue}>#3 Põlv maha</H2>
              <p>Sul on juhiload juba ammu olemas ja ratas, millega sõita, kuid tahaksid oma sõiduoskusi parandada.</p>
              <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 120 €</p>
              <ButtonLink to="/kontakt">
                <span role="img" aria-label="hand">👍</span> Soovin osaleda
              </ButtonLink>
            </div>
          </div>
          <div className="course-item">
            <img className="course-item__image" src={imageMasterClass} alt="motokoolitus" />
            <div className="course-item__body">
              <H2 color={colors.blue}>#Meistriklass </H2>
              <p>Oled kogenud ringrajasõitja ja soovid endast ning oma rattast maksimumi võtta.</p>
              <p>Korraldame ühiseid treeningpäevi Itaalias.</p>
              <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 2300 €</p>
              <ButtonLink to="/kontakt">
                <span role="img" aria-label="hand">👍</span> Soovin osaleda
              </ButtonLink>
            </div>
          </div>
            <div className="course-item">
              <H2 color={colors.blue}>Veel koolitusi nõudmisel:</H2>
              <PageContent content={content} />
              <div css={`padding-top: 1rem; padding-bottom: 2rem;`}>
                <ButtonLink to="/kontakt">
                  <span role="img" aria-label="hand">👍</span> Soovin lisainfot
                </ButtonLink>
              </div>
          </div>
        </div>
      </section>
      </Grid>
    </div>
  )
}

KoolitusedTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  description: PropTypes.string,
  contentComponent: PropTypes.func,
}

const Koolitused = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <KoolitusedTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        content={post.html}
      />
    </Layout>
  )
}

Koolitused.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Koolitused

export const KoolitusedQuery = graphql`
  query koolitused($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

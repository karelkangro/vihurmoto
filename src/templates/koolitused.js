import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
// components
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// styles
import styled from 'styled-components'
import colors from '../components/styled/colors';
import { Grid } from '../components/styled/grid';
import { StyledForm } from '../components/styled/form';
import { ButtonSend } from '../components/styled/buttons';
import { H1WidthBackground, H2 } from '../components/styled/typography'
import SectionWithBackground from '../components/styled/SectionWithBackground'

const ButtonContact = styled.button`
  display: block;
  font-weight: bold;
  padding: 1.5rem;
  border-radius: 2rem;
  border: none;
  color: ${colors.blue};
  text-decoration: none;
  text-align: center;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
  :hover {
    transition: all .22s ease-out;
    box-shadow: 0 1rem 2rem 0 ${colors.blueShadow};
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  right: .5rem;
  top: 1rem;
  border: none;
  background: none;
`

export const KoolitusedTemplate = ({ title, content, description, contentComponent }) => {
  const [formIsVisible, showForm] = useState(false);
  let [subject, handleSubject ] = useState('Täpsusta teema')
  const formInlineStyles = {
    transform: formIsVisible ? 'translate(-50%, -50%)' : 'translate(-300%, -300%)'
  };
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
                <p>Tutvu allolevate koolitustega ja võta julgelt ühendust!</p>
              </div>
            <div className="course-item">
              <img className="course-item__image" src={imageFirstPackage} alt="motokoolitus"/>
              <div className="course-item__body">
                <H2 color={colors.blue}>#1 Nullist sõitma</H2>
                <p>See koolitus sobib sulle, kui sa pole mitte kunagi mootorattaga sõitnud ja tahaksid proovida koos kogenud juhendajaga.</p>
                <p>Sisaldab mootorratta kasutamist.</p>
                <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 150 €</p>
                <ButtonContact onClick={() => { showForm(!formIsVisible); handleSubject(subject = "Nullist sõitma") }} >
                  <span role="img" aria-label="hand">👍</span> Soovin osaleda
                </ButtonContact>
              </div>
            </div>
            <div className="course-item">
              <img className="course-item__image" src={imageSecondPackage} alt="motokoolitus" />
              <div className="course-item__body">
                <H2 color={colors.blue}>#2 Kordame üle</H2>
                <p>Oled just load saanud või on sul need ammu olemas, aga oled sõitmise unustanud – see koolitus on just sinule.</p>
                <p>Võimalus rentida mootorratas koolituse ajaks.</p>
                <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 120 €</p>
                <ButtonContact onClick={() => { showForm(!formIsVisible); handleSubject(subject = "Kordame üle") }}>
                  <span role="img" aria-label="hand">👍</span> Soovin osaleda
                </ButtonContact>
              </div>
            </div>
            <div className="course-item">
              <img className="course-item__image" src={imageThirdPackage} alt="motokoolitus" />
              <div className="courses__body">
                <H2 color={colors.blue}>#3 Põlv maha</H2>
                <p>Sul on juhiload juba ammu olemas ja ratas, millega sõita, kuid tahaksid oma sõiduoskusi parandada.</p>
                <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 120 €</p>
                <ButtonContact onClick={() => { showForm(!formIsVisible); handleSubject(subject = "Põlv maha") }}>
                  <span role="img" aria-label="hand">👍</span> Soovin osaleda
                </ButtonContact>
              </div>
            </div>
            <div className="course-item">
              <img className="course-item__image" src={imageMasterClass} alt="motokoolitus" />
              <div className="course-item__body">
                <H2 color={colors.blue}>#Meistriklass </H2>
                <p>Oled kogenud ringrajasõitja ja soovid endast ning oma rattast maksimumi võtta.</p>
                <p>Korraldame ühiseid treeningpäevi Itaalias.</p>
                <p css={`margin-bottom: 2rem; font-weight: 700; color: ${colors.blue};`}>Hind: 2300 €</p>
                <ButtonContact onClick={() => { showForm(!formIsVisible); handleSubject(subject = "Meistriklass") }}>
                  <span role="img" aria-label="hand">👍</span> Soovin osaleda
                </ButtonContact>
              </div>
            </div>
              <div className="course-item">
                <H2 color={colors.blue}>Veel koolitusi nõudmisel:</H2>
                <PageContent content={content} />
                <div css={`padding-top: 1rem; padding-bottom: 2rem;`}>
                <ButtonContact onClick={() => { showForm(!formIsVisible); handleSubject(subject = "Nõudmisel koolitus") }}>
                  <span role="img" aria-label="hand">👍</span> Soovin lisainfot
                </ButtonContact>
                </div>
            </div>
          </div>
        </section>
      </Grid>
      <div>
        <StyledForm
          name="koolitused"
          method="post"
          action="/kontakt/vorm-saadetud/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          style={formInlineStyles}
        >
          <ButtonClose
            onClick={() => showForm(!formIsVisible)}
            css={`position: absolute; right: .5rem; top: 1rem;`}
          >
            <span role="img" aria-label="close">❌</span>
          </ButtonClose>
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="koolitused" />
          <div hidden>
            <label>Ära seda täida:{' '}
              <input name="bot-field" />
            </label>
          </div>
          <label htmlFor={'name'}>Sinu nimi</label>
          <input
            type={'text'}
            name={'name'}
            id={'name'}
            required={true}
          />
          <label htmlFor={'email'}>E-mail</label>
          <input
            type={'email'}
            name={'email'}
            id={'email'}
            required={true}
          />
          <label htmlFor={'phone'}>Telefon</label>
          <input
            type={'phone'}
            name={'phone'}
            id={'phone'}
            required={true}
          />
          <label htmlFor={'subject'}>Teema</label>
          <input
            type={'subject'}
            name={'subject'}
            id={'subject'}
            value={`${subject}`}
            required={true}
          />
          <label htmlFor={'message'}>Sõnum</label>
          <textarea
            name={'message'}
            id={'message'}
            required={true}
          />
          <ButtonSend type="submit">Saada</ButtonSend>
        </StyledForm>
      </div>
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

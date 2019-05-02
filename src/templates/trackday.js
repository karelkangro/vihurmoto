import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// style utils
import { Grid } from '../components/styled/grid';
import colors from '../components/styled/colors'
import { StyledForm } from '../components/styled/form';

// styled components
import { H2WidthBoxShadow } from '../components/styled/typography'
import SectionWithBackground from '../components/styled/SectionWithBackground'
import { ButtonSend, ButtonContact, ButtonClose } from '../components/styled/buttons';

export const TrackdayPageTemplate = ({
  title,
  content,
  contentComponent,
  image
}) => {
   const [formIsVisible, showForm] = useState(false);
  const formInlineStyles = {
    transform: formIsVisible ? 'translate(-50%, -50%)' : 'translate(-300%, -300%)'
  };
  const PageContent = contentComponent || Content

  return (
    <div>
      <SectionWithBackground
        backgroundImage={`url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`}
        backgroundPositionScreenSmall={`center center`}
      >
        <div css={`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        </div>
      </SectionWithBackground>
      <Grid>
        <section css={`display: flex; flex-direction: column; justify-content: center; align-items: center; padding-bottom: 5rem;`}>
          <H2WidthBoxShadow color={colors.blue} borderheight={`0px 0.333rem 0px 0px`} border={colors.red} css={`text-align: center;`}>
            {title}
          </H2WidthBoxShadow>
          <PageContent content={content} />
          <ButtonContact onClick={() => showForm(!formIsVisible)}>
            <span role="img" aria-label="hand">👍</span> Registreeri
          </ButtonContact>
        </section>
      </Grid>
      <StyledForm
        name="trackday"
        method="post"
        action="/kontakt/vorm-saadetud/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={formInlineStyles}
      >
        <ButtonClose onClick={() => showForm(!formIsVisible)}>
          <span role="img" aria-label="close">❌</span>
        </ButtonClose>
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="trackday" />
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
        <label htmlFor={'select'}>TrackDay päev</label>
        <select className="select"
          type={'select'}
          name={'select'}
          id={'select'}
          required={true}
          css={`margin-bottom: .5rem;`}
        >
          <option value="">- Vali koolitus -</option>
          <option value="15.06 Aravete" selected>15.06 Aravete kardirada - päripäeva</option>
          <option value="20.07 Aravete">20.07 Aravete kardirada - vastupäeva</option>
          <option value="18.08 Rapla">18.08 Rapla kardirada</option>
        </select>
        <label htmlFor={'class'}>Klass</label>
        <select className="select"
          type={'class'}
          name={'class'}
          id={'class'}
          required={true}
          css={`margin-bottom: .5rem;`}
        >
          <option value="">- Vali klass -</option>
          <option value="Bike" selected>Bike</option>
          <option value="Naked">Naked</option>
          <option value="Supermoto">Supermoto</option>
          <option value="Naised">Naised</option>
          <option value="Noored">Noored</option>
        </select>
        <label htmlFor={'message'}>Lisainfo (nt tsikkel)</label>
        <textarea
          name={'message'}
          id={'message'}
        />
        <ButtonSend type="submit">Saada</ButtonSend>
      </StyledForm>
    </div>
  )
}

TrackdayPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TrackdayPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TrackdayPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

TrackdayPage.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default TrackdayPage

export const trackdayPageQuery = graphql`
  query TrackdayPage($id: String!) {markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

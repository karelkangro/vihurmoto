import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// style utils
import { Grid } from '../components/styled/grid';
import colors from '../components/styled/colors'

// styled components
import { H1WidthBackground, H2WidthBoxShadow, H2 } from '../components/styled/typography'
import SectionWithBackground from '../components/styled/SectionWithBackground'

export const TrainingPageTemplate = ({
  title,
  content,
  contentComponent,
  image
}) => {
  const PageContent = contentComponent || Content

  return (
    <div>
    <SectionWithBackground
      backgroundImage={`url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`}
    >
      <div css={`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        <H1WidthBackground>{title}</H1WidthBackground>
      </div>
      </SectionWithBackground>
      <Grid>
        <section css={`display: flex; flex-direction: column; justify-content: center; align-items: center; padding-bottom: 5rem;`}>
          <H2WidthBoxShadow color={colors.blue} borderheight={`0px 0.333rem 0px 0px`} border={colors.red} css={`text-align: center;`}>
            Trennid lastele ja noortele
          </H2WidthBoxShadow>
          <p>Vihur motoklubi tegutseb suure eesmärgiga koolitada välja uus põlvkond
            andekaid noori motosportlasi, kes nii Eestis, kui maailmas suuri tegusid teeksid.
            Too oma motospordist huvituv 5-16a laps trenni! Õpime ringsajasõitu, jäärada, supermotot.
          </p>
          <PageContent content={content} />
          <p>Meistrid tulevad siit!</p>
        </section>
      </Grid>
    </div>
  )
}

TrainingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TrainingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TrainingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

TrainingPage.propTypes = {
  data: PropTypes.object.isRequired,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default TrainingPage

export const trainingPageQuery = graphql`
  query TrainingPage($id: String!) {markdownRemark(id: { eq: $id }) {
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

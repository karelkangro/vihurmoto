import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import styled, { css } from 'styled-components';
import colors from '../components/styled/colors'
import screen from '../components/styled/screen'
import { H1, H2 } from '../components/styled/typography'
import HeroBackground from '../components/styled/HeroBackground'

const ButtonLink = styled(Link)`
  font-weight: bold;
  padding: 2rem;
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

const SectionCalendar = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 1rem;
  align-items: flex-start;
  /* ${screen.small`
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  `} */
  /* grid-auto-rows: 1px; */
`;

const CalendarCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100%;
  text-align: center;
  color: ${colors.white};
  background-color: ${colors.blue};
  border-radius: 2rem;
  box-shadow: 0 .7rem 1rem 0 ${colors.blueShadow};
`;

const CalendarList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const CalendarItem = styled.li`
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: .75rem;
  :last-child {
    margin-bottom: 2rem;
  }
`;

const CalendarDate = styled.div`
  color: ${colors.redLight};
  font-size: 1.333rem;
`;

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  main,
}) => (
  <div>
    <HeroBackground
      backgroundImage={`url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`}
    >
      <div css={`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        <H1>{title}</H1>
        <h3 css={`display: none;`}>{subheading}</h3>
      </div>
    </HeroBackground>
    <section css={`display: flex; flex-direction: column; justify-content: center; align-items: center; padding-bottom: 5rem;`}>
        <H2 color={colors.blue} css={`text-align: center; box-shadow: 0px 0.75rem 0px 0px ${colors.red};`}>{mainpitch.title}</H2>
        <p css={`text-align: center; color: ${colors.blue}; max-width: 75vh; margin-bottom: 3rem;`}>{mainpitch.description}</p>
        <h3>
          <ButtonLink
            to="/kontakt"
            color={colors.blue}
          > <span role="img" aria-label="hand">👉</span> Võta ühendust</ButtonLink>
        </h3>
    </section>
    <section css={`padding-bottom: 4rem;`}>
      <SectionCalendar>
        <CalendarCard>
          <H2 css={`box-shadow: 0px 0.1rem 0px 0px ${colors.red};`}>Märts</H2>
          <CalendarList>
            <CalendarItem>
              <CalendarDate>8/10</CalendarDate>
              <div>Vihurmoto Motomessil</div>
              <div>Eesti Näituste Messikeskus</div>
            </CalendarItem>
          </CalendarList>
          <H2 css={`box-shadow: 0px 0.1rem 0px 0px ${colors.red};`}>Mai</H2>
          <CalendarList>
            <CalendarItem>
              <CalendarDate>18/19</CalendarDate>
              <div>EMV Ringrada (EST/LV/LT)</div>
              <div>Auto24ring</div>
            </CalendarItem>
          </CalendarList>
        </CalendarCard>
        <CalendarCard>
            <H2 css={`box-shadow: 0px 0.1rem 0px 0px ${colors.red};`}>Juuni</H2>
          <CalendarList>
              <CalendarItem>
                <CalendarDate>1/2</CalendarDate>
                <div>EMV Supermoto</div>
                <div>Lange</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>15</CalendarDate>
                <div>Vihurmoto TrackDay</div>
                <div>Aravete (päripäeva)</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>22/23</CalendarDate>
                <div>EMV Supermoto</div>
                <div>Aravete</div>
                </CalendarItem>
              <CalendarItem>
                <CalendarDate>29/30</CalendarDate>
                <div>EMV Ringrada (Suur Võidusõit) </div>
                <div>Auto24ring</div>
              </CalendarItem>
          </CalendarList>
        </CalendarCard>
        <CalendarCard>
            <H2 css={`box-shadow: 0px 0.1rem 0px 0px ${colors.red};`}>Juuli</H2>
          <CalendarList>
              <CalendarItem>
                <CalendarDate>13/14</CalendarDate>
                <div>EMV Ringrada (FIN/EST/LT/LV) </div>
                <div>Auto24ring</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>20</CalendarDate>
                <div>Vihurmoto TrackDay</div>
                <div>Aravete (vastupäeva)</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>20/21</CalendarDate>
                <div>EMV Supermoto </div>
                <div>Aravete </div>
              </CalendarItem>
              <CalendarItem><CalendarDate>26/28</CalendarDate>
                <div>EMV Ringrada (FIN/EST)</div>
                <div>Alastaro, Soome</div>
              </CalendarItem>
          </CalendarList>
        </CalendarCard>
        <CalendarCard>
            <H2 css={`box-shadow: 0px 0.1rem 0px 0px ${colors.red};`}>August</H2>
          <CalendarList>
              <CalendarItem>
                <CalendarDate>10/11</CalendarDate>
                <div>EMV Supermoto</div>
                <div>Rapla</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>18</CalendarDate>
                <div>Vihurmoto TrackDay</div>
                <div>Rapla kardirada</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>24/25</CalendarDate>
                <div>EMV Ringrada (EST/LV,LT)</div>
                <div>Bikernieku, Läti</div>
              </CalendarItem>
              <CalendarItem>
                <CalendarDate>28</CalendarDate>
                <div>EMV Supermoto</div>
                <div>Tabasalu</div>
              </CalendarItem>
          </CalendarList>
        </CalendarCard>
        <CalendarCard>
            <H2 css={`box-shadow: 0px 0.1rem 0px 0px ${colors.red};`}>September</H2>
          <CalendarList>
              <CalendarItem>
                <CalendarDate>7/8</CalendarDate>
                <div>EMV Ringrada (EST/LV/LT)</div>
                <div>Auto24ring</div>
              </CalendarItem>
          </CalendarList>
        </CalendarCard>
      </SectionCalendar>
    </section>
    {/* <section>
      <h3>{heading}</h3>
      <p>{description}</p>
      <Features gridItems={intro.blurbs} />
      <H2>
        <ButtonLink to="/koolitused">Vaata koolitusi</ButtonLink>
      </H2>
    </section> */}
      {/* <section css={`display: flex; flex-direction: column; justify-content: center; align-items: center; padding-bottom: 5rem;`}>
        <H2 color={colors.blue} css={`text-align: center; box-shadow: 0px 0.75rem 0px 0px ${colors.red};`}>Uudised</H2>
      <BlogRoll />
      <H2>
          <ButtonLink
            to="/blog"
            color={colors.blue}
          >
            <span role="img" aria-label="hand">👉</span> Blogisse
          </ButtonLink>
      </H2>
    </section> */}
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
  frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 300, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import SectionWithBackground from '../../components/styled/SectionWithBackground'
import { H1 } from '../../components/styled/typography'

export default class BlogIndexPage extends React.Component {
  render() {

  return (
      <Layout>
          <SectionWithBackground
            backgroundImage={`url('https://res.cloudinary.com/spiralcloud/image/upload/w_1500,h_800,c_crop/vihurmoto-blog-hero.jpg')`}
            backgroundPosition={`left top`}
            backgroundAttachment={`scroll`}
          >
          <H1>
            Uudised / Blogi
          </H1>
          </SectionWithBackground>
          <BlogRoll />
      </Layout>
    )
  }
}

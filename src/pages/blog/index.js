import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import HeroImage from '../../components/styled/HeroImage'
import { H1 } from '../../components/styled/typography'

export default class BlogIndexPage extends React.Component {
  render() {

  return (
      <Layout>
        <section>
          <HeroImage
            backgroundImage={`url('https://res.cloudinary.com/spiralcloud/image/upload/w_1500,h_800,c_crop/vihurmoto-blog-hero.jpg')`}
          >
          <H1>
            Uudised / Blogi
          </H1>
          </HeroImage>
          <BlogRoll />
        </section>
      </Layout>
    )
  }
}

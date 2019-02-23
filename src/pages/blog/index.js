import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {

  return (
      <Layout>
        <section>
          <div>
            <div>
            <div
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/spiralcloud/image/upload/w_1500,h_800,c_crop/vihurmoto-blog-hero.jpg')`,
                }}
              >
                <h1
                  style={{
                    boxShadow: '0.5rem 0 0 #0a2463, -0.5rem 0 0 #0a2463',
                    backgroundColor: '#0a2463',
                    color: 'white',
                    padding: '1rem',
                    borderRadius: '0.5rem'
                  }}
                >
                  Uudised / Blogi
                </h1>
              </div>
            </div>
              <BlogRoll />
            </div>
        </section>
      </Layout>
    )
  }
}

import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {

  return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
            <div
                className="full-width-image-container margin-top-0"
                style={{
                  backgroundImage: `url('https://res.cloudinary.com/spiralcloud/image/upload/w_1500,h_800,c_crop/vihurmoto-blog-hero.jpg')`,
                }}
              >
                <h1
                  className="has-text-weight-bold is-size-1"
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

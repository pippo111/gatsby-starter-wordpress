import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = (props) => {
  console.log(props)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Hi people</h1>
      {/* <Img fluid={{ ...acf.front_image.localFile.childImageSharp.fluid }} /> */}
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

// export const pageQuery = graphql`
//   query BlogPageQuery {
//     wordpressPost(slug: {eq: "gatsby-test-post" }) {
//       wordpress_id
//       date(formatString: "DD.MM.YYYY")
//       slug
//       title
//       featured_media {
//         localFile {
//           childImageSharp {
//             fluid(maxWidth: 1920, cropFocus: ATTENTION) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `

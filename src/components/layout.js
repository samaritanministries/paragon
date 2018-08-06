import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery } from "gatsby"

import Header from './header'
import '../sass/dashing.scss'
import '../sass/example-page.scss'

const Layout = ({ children, data }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title + " Dashing Example"}
          meta={[
            { name: 'description', content: 'Example Page' },
            { name: 'keywords', content: 'example, pages' },
          ]}
        />

          <div class="grid--three-fourths">
            {children}
          </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Layout

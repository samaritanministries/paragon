import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'


export default ({children}) => (
  <div>
    <Layout>
      {children}
    </Layout>
  </div>
);

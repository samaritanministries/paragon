/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it

 exports.onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
}

 exports.onRouteUpdate = ({ location }) => {
  console.log('new pathname', location.pathname)
  //this.closest('.react-sanfona-item').addClass('react-sanfona-item-expanded')
}

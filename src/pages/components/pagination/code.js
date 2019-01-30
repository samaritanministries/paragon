import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../../../components/layout'
import SubNav from '../../../components/subnavigation'
import AppContent from '../../../components/appcontent'
import CodeToggle from '../../../components/codetoggle'

const currentPageName = "Pagination";
const currentPageNameLower = currentPageName.toLowerCase();

class PaginationCode extends React.Component {
  static propTypes = { location: PropTypes.object.isRequired }

  render() {
    const { location } = this.props;

    return (
      <Layout>
        <header className="subnav">
          <h1>{currentPageName}</h1>
          <SubNav pageName={currentPageNameLower}/>
        </header>
        <AppContent>
          <div className="grid grid-padding">
            <h2 className="mt-space-xl">Pagination
              <Link to={location.pathname + "/#pagination"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <ul className="pagination">
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Previous Page</span>
                        <span aria-hidden="true">
                          <i className="dashing-icon dashing-icon--arrow-left"></i>
                        </span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="/" className="button">
                        <span className="screen-reader">Page 1</span>
                        <span aria-hidden="true">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 2</span>
                        <span aria-hidden="true">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 3</span>
                        <span aria-hidden="true">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 4</span>
                        <span aria-hidden="true">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 5</span>
                        <span aria-hidden="true">5</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Next Page</span>
                        <span aria-hidden="true">
                          <i className="dashing-icon dashing-icon--arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <CodeToggle>
{`<ul class="pagination">
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Previous Page</span>
      <span aria-hidden="true">
        <i class="dashing-icon dashing-icon--arrow-left"></i>
      </span>
    </a>
  </li>
  <li class="active">
    <a href="/" class="button">
      <span class="screen-reader">Page 1</span>
      <span aria-hidden="true">1</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 2</span>
      <span aria-hidden="true">2</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 3</span>
      <span aria-hidden="true">3</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 4</span>
      <span aria-hidden="true">4</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 5</span>
      <span aria-hidden="true">5</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Next Page</span>
      <span aria-hidden="true">
        <i class="dashing-icon dashing-icon--arrow-right"></i>
      </span>
    </a>
  </li>
</ul>`}
              </CodeToggle>
            </div>

            <h2 className="mt-space-xl">Pagination Group
              <Link to={location.pathname + "/#paginationGroup"} className="button button--transparent button--copy-link"></Link>
            </h2>
            <div className="example-container">
              <div className="card">
                <div className="card-content">
                  <ul className="pagination pagination--group">
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Previous Page</span>
                        <span aria-hidden="true">
                          <i className="dashing-icon dashing-icon--arrow-left"></i>
                        </span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="/" className="button">
                        <span className="screen-reader">Page 1</span>
                        <span aria-hidden="true">1</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 2</span>
                        <span aria-hidden="true">2</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 3</span>
                        <span aria-hidden="true">3</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 4</span>
                        <span aria-hidden="true">4</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Page 5</span>
                        <span aria-hidden="true">5</span>
                      </a>
                    </li>
                    <li>
                      <a href="/" className="button">
                        <span className="screen-reader">Next Page</span>
                        <span aria-hidden="true">
                          <i className="dashing-icon dashing-icon--arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <CodeToggle>
{`<ul class="pagination pagination--group">
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Previous Page</span>
      <span aria-hidden="true">
        <i class="dashing-icon dashing-icon--arrow-left"></i>
      </span>
    </a>
  </li>
  <li class="active">
    <a href="/" class="button">
      <span class="screen-reader">Page 1</span>
      <span aria-hidden="true">1</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 2</span>
      <span aria-hidden="true">2</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 3</span>
      <span aria-hidden="true">3</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 4</span>
      <span aria-hidden="true">4</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Page 5</span>
      <span aria-hidden="true">5</span>
    </a>
  </li>
  <li>
    <a href="/" class="button">
      <span class="screen-reader">Next Page</span>
      <span aria-hidden="true">
        <i class="dashing-icon dashing-icon--arrow-right"></i>
      </span>
    </a>
  </li>
</ul>`}
              </CodeToggle>
            </div>
          </div>
        </AppContent>
      </Layout>
    )
  }
}

export default PaginationCode;

import React from 'react'
import { Link } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'

export default () => (
  <div>

    <div className="mobile-sidebar">
      <button className="button--gray button--sidebar-icon">-</button>
    </div>

    <div className="example-sidebar">
      <Accordion allowMultiple={true}>
        <div className="logo">Logo</div>

        <AccordionItem title="Principles" className="group-header" expanded={true}>
        <i className="dashing-icon"></i>

          <div className="menu-group">
            <Link exact to="/" activeClassName="active">Home</Link>
          </div>

        </AccordionItem>

        <AccordionItem title="Components" className="group-header" expanded={true}>
        <i className="dashing-icon"></i>

        <div className="menu-group">
          <Link strict to="/actions/code" activeClassName="active">Actions</Link>
          <Link strict to="/banner/code" activeClassName="active">Banner</Link>
        </div>

        </AccordionItem>

        <AccordionItem title="Resources" className="group-header" expanded={true}>
        <i className="dashing-icon"></i>

        </AccordionItem>

      </Accordion>
    </div>
  </div>
)

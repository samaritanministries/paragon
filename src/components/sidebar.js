import React from 'react'
import { Link } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'

export default () => (

  <div className="grid--fourth example-sidebar">
    <Accordion>
      <div className="logo">Logo</div>

      <AccordionItem title="Principles" className="group-header">
      <i className="dashing-icon"></i>

        <div className="menu-group">
          <Link exact to="/" activeClassName="active">Home</Link>
        </div>

      </AccordionItem>

      <AccordionItem title="Components" className="group-header">
      <i className="dashing-icon"></i>

      <div className="menu-group">
        <Link strict to="/actions/code" activeClassName="active">Actions</Link>
        <Link strict to="/banner/code" activeClassName="active">Banner</Link>
      </div>

      </AccordionItem>

      <AccordionItem title="Resources" className="group-header">
      <i className="dashing-icon"></i>

      </AccordionItem>

    </Accordion>
  </div>
)

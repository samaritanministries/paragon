import React from 'react'
import { Link } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'

const Sidebar = ({ siteTitle }) => (
  <div class="grid--fourth example-sidebar">
    <Accordion>
      <div class="logo">Logo</div>

      <AccordionItem title="Principles" class="group-header">

        <div class="menu-group">
          <Link exact to="/" activeClassName="active">Home</Link>
        </div>

      </AccordionItem>

      <AccordionItem title="Components" class="group-header">

      <div class="menu-group">
        <Link strict to="/actions/code" activeClassName="active">Actions</Link>
        <Link strict to="/banner/code" activeClassName="active">Banner</Link>
      </div>

      </AccordionItem>

      <AccordionItem title="Resources" class="group-header">

      </AccordionItem>

    </Accordion>
  </div>
)

export default Sidebar

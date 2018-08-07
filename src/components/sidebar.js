import React from 'react'
import { Link } from 'gatsby'
import { Accordion, AccordionItem } from 'react-sanfona'

export default () => (
  <div class="grid--fourth example-sidebar">
    <Accordion onChange="saveState()">
      <div class="logo">Logo</div>

      <AccordionItem title="Principles" class="group-header">
      <i class="dashing-icon"></i>

        <div class="menu-group">
          <Link exact to="/" activeClassName="active">Home</Link>
        </div>

      </AccordionItem>

      <AccordionItem title="Components" class="group-header">
      <i class="dashing-icon"></i>

      <div class="menu-group">
        <Link strict to="/actions/code" activeClassName="active">Actions</Link>
        <Link strict to="/banner/code" activeClassName="active">Banner</Link>
      </div>

      </AccordionItem>

      <AccordionItem title="Resources" class="group-header">
      <i class="dashing-icon"></i>

      </AccordionItem>

    </Accordion>
  </div>
)

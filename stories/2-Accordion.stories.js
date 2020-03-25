import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from "@storybook/addon-knobs";

import { Accordion, Content, Header } from '../src/sass/modules/accordion';
// Not sure why I have to do it all, but won't let me split it out
import "../src/sass/paragon.scss";

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [withKnobs]
};

export const AccordionComponent = () => (
  <Accordion isOpen={boolean("isOpen", false)}>
    <Header
      onClick={action('clicked')}
      title={text("Title", "Title")}
      secondaryTitle={text("Secondary Title", "Step 1 of 4")}
      >
    </Header>
    <Content>
      <p>Accordion content</p>
    </Content>
  </Accordion>
);

AccordionComponent.story = {
  name: 'Default',
};

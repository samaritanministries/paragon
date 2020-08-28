import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/svg-arrow.css';
import {roundArrow} from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export const Tooltip = props => <Tippy {...props} />
Tooltip.defaultProps = {
  animation: 'fade',
  boundary: 'viewport',
  arrow: roundArrow,
  theme: 'default',
  maxWidth: 250,
}

export const Clippy = props => <Tippy {...props} />
Clippy.defaultProps = {
  arrow: false,
  boundary: 'viewport',
  animation: 'fade',
  interactiveBorder: 10,
  theme: 'clippy',
  maxWidth: 350,
  hideOnClick: false,
}

export const IconDescription = props => <Tippy {...props} />
IconDescription.defaultProps = {
  animation: 'fade',
  placement: 'bottom',
  boundary: 'viewport',
  arrow: false,
  theme: 'default',
  maxWidth: 250,
  delay: [1000, 0],
  distance: 5,
}

export default Tippy

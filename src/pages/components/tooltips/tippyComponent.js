import React from 'react'
import Tippy from '@tippy.js/react'

export const Tooltip = props => <Tippy {...props} />
Tooltip.defaultProps = {
  animation: 'fade',
  boundary: 'viewport',
  arrow: true,
  theme: 'default',
  arrowType: 'round',
  maxWidth: 250,
}

export const Clippy = props => <Tippy {...props} />
Clippy.defaultProps = {
  boundary: 'viewport',
  animation: 'fade',
  interactive: true,
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
  delay: [600, 0],
  distance: 5,
}

export default Tippy

#Using "Actions"
Actions.jsx provides the imports for any components in the "Actions" category. Currently this is only "Buttons".

import { Button } from "[path]/paragon/actions/Actions";
import Button from "[path]/paragon/actions/Button";

##SCSS
button.scss    : contains the structure of the button (no theming styles)
button-theme-x : contains the style of the button (colors)
button-mixins  : repeatable code

##JSX
Button.jsx     : The component to create buttons.

###Props
...otherProps
buttonColor   =   black, blue, green, grey, orange, primary, purple, red, white, yellow
buttonDisplay =   block, block_mobile, large, small
buttonIcon    =   icon, icon--main, icon-small
buttonShape   =   round, smooth, square
buttonVariant =   border, transparent
children      =   (any)
className     =   (any)
component     =   button, anchor
disabled      =   true/false
hasSpinner    =   true/false (see also "isLoading")
href          =   valid external url
isDisabled    =   true/false
isLoading     =   true/false (see also "hasSpinner")
text          =   (text to display on button)
to            =   valid internal url

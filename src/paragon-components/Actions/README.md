#Actions.jsx
`Actions.jsx` provides the imports for any components in the "Actions" folder. Currently this is only "Button".

###Import Button via `Actions.jsx`:
`import { Button } from "[path]/paragon/actions/Actions";`

###Import Button via `Button.jsx`:
`import Button from "[path]/paragon/actions/Button";`

##_actions.scss
`_action.scss` is used to pull in all scss related to any component within the Actions folder.

button.scss           : contains the structure of the button (no theme styles)
button-theme-x.scss   : contains the style of the button (colors)
button-mixins.scss    : repeatable code

To use `_actions.scss`, it must be added to the list of imports within your `application.scss` file unless you've imported the `paragon-components.scss` from the root directory.

##Other JSX
Button.jsx     : The component to create buttons.
Colors.jsx     : Component containing valid color props.
Variants.jsx   : Component containing valid variants, icon, display types, and shapes.

###List of Props
...otherProps
buttonColor      =   black, blue, green, grey, orange, primary, purple, red, white, yellow
buttonDisplay    =   block, block_mobile, large, small
buttonIcon       =   icon, icon--main, icon-small
buttonShape      =   round, smooth, square
buttonVariant    =   border, transparent
children         =   (any)
className        =   (any)
component        =   button, anchor
disabled         =   true/false
hasSpinner       =   true/false (see also "isLoading")
href             =   valid external url
isDisabled       =   true/false
isLoading        =   true/false (see also "hasSpinner")
text             =   (text to display on button)
to               =   valid internal url (only available via NavLink or Link)

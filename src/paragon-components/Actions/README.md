# Actions

`index.jsx` provides the imports for most commonly used components in the "Actions" folder. In this case index pulls in anything within `Button.jsx` and `ButtonGroup.jsx`. Additional components are `ButtonNavLink` and `ButtonLink` which provide support for React's `NavLink` and Gatsby's `Link` respectively.

## 1.0 File Overview
Button.jsx         : The component to create buttons.

ButtonNavLink.jsx  : Component to create a NavLink that is styled as a button (for react projects)

ButtonLink.jsx     : Component to create a Link that is styled as a button (for gatsby projects)

ButtonGroup.jsx    : Component to create a grouping of Buttons

Colors.js          : Component containing valid color props.

Variants.js        : Component containing valid variants, icon, display types, and shapes.

index.js           : Default file to import

### 1.1 Naming Convention

Files ending in `js` are javascript only files.

Files ending in `jsx` are react files.

### 1.2 Import Button

`import { Button } from "[path]/paragon/Actions";`

### 1.3 Import ButtonNavLink

`import Button from "[path]/paragon/Actions/ButtonNavLink";`

### 1.4 Import ButtonLink

`import Button from "[path]/paragon/Actions/ButtonLink";`

### 1.5 Import Button Group

`import { ButtonGroup, ButtonGroupItem } from "[path]/paragon/Actions";`

## 2.0 Styling

Our components get their styles via our `paragon-framework` package. To use paragon styling, you must import the `_actions.scss` file into the `application.scss` file of your project.

## 3.0 Props

## 3.1 Button Props

| Prop          | Values                                                                |
|---------------|-----------------------------------------------------------------------|
| ...otherProps | NA                                                                    |
| buttonColor   | black, blue, green, grey, orange, primary, purple, red, white, yellow |
| buttonDisplay | block, block_mobile, large, small                                     |
| buttonIcon    | icon, icon--main, icon-small                                          |
| buttonShape   | round, smooth, square                                                 |
| buttonVariant | border, transparent                                                   |
| children      | (any)                                                                 |
| className     | (any)                                                                 |
| component     | button, anchor                                                        |
| disabled      | true/false                                                            |
| hasSpinner    | true/false (see also "isLoading")                                     |
| href          | valid external url                                                    |
| isDisabled    | true/false                                                            |
| isLoading     | true/false (see also "hasSpinner")                                    |
| text          | (text to display on button)                                           |
| to            | valid internal url (only available via ButtonNavLink or ButtonLink)   |

## 3.2 Button Group Props

| Prop          | Values                                                                |
|---------------|-----------------------------------------------------------------------|
| buttonColor   | black, blue, green, grey, orange, primary, purple, red, white, yellow |
| isBorder      | true/false                                                            |
| isVertical    | true/false                                                            |

## 3.3 Button Group Item Props

| Prop          | Values                                                                |
|---------------|-----------------------------------------------------------------------|
| isChecked     | true/false                                                            |
| id            | id of the group (must be unique per item)                             |
| name          | name of the group (must be the same for each item in  group)          |

## 4.0 Example Usage

## 4.1 Button Example
```
<Button buttonColor={green}>
  Submit
</Button>
```

## 4.2 Button Group Example
```
<ButtonGroup buttonColor={"blue"}>
  <ButtonGroupItem id="react-blue-1" name={"react-blue-options"} isChecked={true}>
    Left
  </ButtonGroupItem>
  <ButtonGroupItem id="react-blue-2" name={"react-blue-options"}>
    Middle
  </ButtonGroupItem>
  <ButtonGroupItem id="react-blue-3" name={"react-blue-options"}>
    Right
  </ButtonGroupItem>
</ButtonGroup>
```

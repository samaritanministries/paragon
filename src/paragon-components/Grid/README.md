# Grid.jsx
`Grid.jsx` provides structure for any given page via css grid. Intended for page structure.

### Import Grid via `Grid.jsx`:
`import Grid from "[path]/paragon-components/Grid/Grid";`

## _grid.scss
`_grid.scss` is used to pull in all scss related to any component within the Grid folder.

...notes on files...

To use `_grid.scss`, it must be added to the list of imports within your `application.scss` file unless you've imported the `paragon-components.scss` from the root directory.

### List of Props
...otherProps
isContainer      =   true/false (does this element begin a new grid?)
hasPadding       =   true/false (does this element have grid gutter enabled?)
size             =   1, sixth, fourth, third, 5, half, 7, two-thirds, three-fourths, five-sixths, 11, full
gridType         =   (TODO: Find example of how this is used...)

## Example Usage
```
<Grid isContainer={true} hasPadding={true}>
  <Grid size="half">Half</Grid>
  <Grid size="half">Half</Grid>
</Grid>
```

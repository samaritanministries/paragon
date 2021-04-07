# Grid.jsx
`Grid.jsx` provides structure for any given page via css grid. Intended for page structure.

### Import Grid via `Grid.jsx`
`import Grid from "[path]/paragon-components/Grid";`

### List of Props
| Prop          | Values                                                                                |
|---------------|---------------------------------------------------------------------------------------|
| ...otherProps | NA                                                                                    |
| isContainer   | true/false (does this element begin a new grid?)                                      |
| hasPadding    | true/false (does this element have grid gutter enabled?)                              |
| size          | 1, sixth, fourth, third, 5, half, 7, two-thirds, three-fourths, five-sixths, 11, full |
| gridType      | ???                                                                                   |

## Example Usage
```
<Grid isContainer={true} hasPadding={true}>
  <Grid size="half">Half</Grid>
  <Grid size="half">Half</Grid>
</Grid>
```

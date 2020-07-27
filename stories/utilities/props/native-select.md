# Native Select Props

| value    | required | description                                                                  |
| -------- | -------- | ---------------------------------------------------------------------------- |
| darkMode | no       | boolean to indicate if styling should be inverted to be on a dark background |
| margin   | no       | string for Material UI text field margin styling (defaults to `dense`)       |
| multiple | no       | boolean to indicate multi-select is enabled (defaults to `false`)            |
| options  | yes      | array of option objects                                                      |
| variant  | no       | string for Material UI text field variant styling (defaults to `outlined`)   |

Additional props will be passed to [Material UI TextField](https://material-ui.com/api/text-field/)

## Option Props

| value     | required | description                                           |
| --------- | -------- | ----------------------------------------------------- |
| className | no       | string class name to be applied to the option element |
| label     | yes      | number or string for label of the option element      |
| value     | yes      | number of string for value of the option element      |

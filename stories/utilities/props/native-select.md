### Native Select Props

| value   | required | description                                                               |
| ------- | -------- | ------------------------------------------------------------------------- |
| margin  | no       | string of Material UI text field margin styling (defaults to `dense`)     |
| options | yes      | array of option objects                                                   |
| variant | no       | string of Material UI text field variant styling (defaults to `outlined`) |

Additional props will be passed to [Material UI TextField](https://material-ui.com/api/text-field/)

### Option Props

| value     | required | description                                           |
| --------- | -------- | ----------------------------------------------------- |
| className | no       | string class name to be applied to the option element |
| label     | yes      | number or string for label of the option element      |
| value     | yes      | number of string for value of the option element      |

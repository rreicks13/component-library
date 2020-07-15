### Native Number Field Props

| value     | required | description                                                                |
| --------- | -------- | -------------------------------------------------------------------------- |
| fullWidth | no       | bool for Material UI text field width styling (defaults to `true`)         |
| margin    | no       | string for Material UI text field margin styling (defaults to `dense`)     |
| variant   | no       | string for Material UI text field variant styling (defaults to `outlined`) |

Additional props will be passed to [Material UI TextField](https://material-ui.com/api/text-field/)

### Option Props

| value      | required | description                                          |
| ---------- | -------- | ---------------------------------------------------- |
| className  | no       | string class name to be applied to the input element |
| error      | no       | bool used to display helper text                     |
| helperText | yes      | string for error label                               |
| label      | yes      | number or string for label of the input element      |
| onChange   | yes      | function to call when input is received              |
| value      | yes      | number of string for value of the input element      |

### Native Number Field Props

| value      | required | description                                                                    |
| ---------- | -------- | ------------------------------------------------------------------------------ |
| autoFocus  | no       | bool used to determine whether an input should be autofocused (defaults false) |
| className  | no       | string class name to be applied to the input element                           |
| error      | no       | bool used to display helper text                                               |
| format     | no       | string to format numbers (example `(###) ###-#####)`                           |
| fullWidth  | no       | bool for Material UI text field width styling (defaults to `true`)             |
| helperText | no       | string for error label (only displayed on `error={true}`)                      |
| label      | yes      | number or string for label of the input element                                |
| margin     | no       | string for Material UI text field margin styling (defaults to `dense`)         |
| onChange   | yes      | function to call when input is received                                        |
| value      | yes      | number of string for value of the input element                                |
| variant    | no       | string for Material UI text field variant styling (defaults to `outlined`)     |

Additional props will be passed to [Material UI TextField](https://material-ui.com/api/text-field/)

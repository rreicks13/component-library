# Select Props

| value          | required | description                                                                  |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| darkMode       | no       | boolean to indicate if styling should be inverted to be on a dark background |
| label          | yes      | string label for the input                                                   |
| options        | yes      | array of options                                                             |
| color          | no       | theme color for the input                                                    |
| renderOption   | no       | function used to render options in the dropdown                              |
| selectedOption | no       | option that is currently selected                                            |

Additional props will be passed to [@material-ui/lab/Autocomplete](https://material-ui.com/api/autocomplete/)

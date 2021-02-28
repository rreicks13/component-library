### Basic Dialog Props

| value         | required | description                                                                            |
| ------------- | -------- | -------------------------------------------------------------------------------------- |
| actionButtons | no       | array of button nodes for footer                                                       |
| children      | no       | content to be rendered inside dialog                                                   |
| close         | yes      | function called to request closing of dialog                                           |
| isOpen        | no       | boolean that determines if the dialog should be shown; defaults to `true`              |
| size          | no       | string indicating size of dialog; options are `small` and `large`; defaults to `small` |
| title         | yes      | string title of dialog                                                                 |

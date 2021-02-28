### Basic Dialog Props

| value           | required | description                                                                            |
| --------------- | -------- | -------------------------------------------------------------------------------------- |
| actionButtons   | no       | array of button nodes for footer                                                       |
| children        | no       | content to be rendered inside dialog                                                   |
| close           | yes      | function called to request closing of dialog                                           |
| headerComponent | no       | custom component to be rendered instead of `title`                                     |
| isOpen          | no       | boolean that determines if the dialog should be shown; defaults to `true`              |
| size            | no       | string indicating size of dialog; options are `small` and `large`; defaults to `small` |
| title           | no       | string title of dialog; `headerComponent`, if specified, will be used instead of title |

### Button Props

| value      | required | description                                                                                             |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------- |
| isDisabled | no       | boolean to disable button                                                                               |
| isLoading  | no       | boolean to display loading spinner, also disables button                                                |
| startIcon  | no       | icon node to display at start of button text, will be replaced by loading icon when `isLoading` is true |
| title      | yes      | string title of dialog                                                                                  |
| variant    | no       | string of Material UI button variant styling                                                            |

Additional props will be passed to [Material UI Button](https://material-ui.com/api/button/)

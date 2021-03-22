# @tractorzoom/basic-dialog

Wrapped Material UI basic dialog with mobile optimization

[Live Examples with Storybook](https://tractorzoom.github.io/component-library/?path=/story/basic-dialog)

## Install

```
npm i --save @tractorzoom/basic-dialog
```

### Basic Dialog Props

| value           | required | description                                                                            |
| --------------- | -------- | -------------------------------------------------------------------------------------- |
| actionButtons   | no       | array of button nodes for footer                                                       |
| children        | no       | content to be rendered inside dialog                                                   |
| close           | yes      | function called to request closing of dialog                                           |
| headerComponent | no       | custom component to be rendered instead of `title`                                     |
| isOpen          | no       | boolean that determines if the dialog should be shown; defaults to `true`              |
| title           | no       | string title of dialog; `headerComponent`, if specified, will be used instead of title |

## Contributing

We welcome improvements and fixes via PRs. Review the contributing guidelines in the repository readme for how to get started.

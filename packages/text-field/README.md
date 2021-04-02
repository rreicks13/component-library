# @tractorzoom/text-field

Wrapper for Material UI's [TextField](https://material-ui.com/components/text-fields/#text-field)

[Live Examples with Storybook](https://tractorzoom.github.io/component-library/?path=/story/text-field)

## Install

```
npm i --save @tractorzoom/text-field
```

### Text Field Props

| value          | required | description                                                                                 |
| -------------- | -------- | ------------------------------------------------------------------------------------------- |
| step           | no       | number pass to input step with type of input is `number`                                    |
| suffixLabel    | no       | string to be added as suffix inside input                                                   |
| suffixOnChange | no       | function to handle on change of suffix options (required when `suffixOptions` are provided) |
| suffixOptions  | no       | array of strings or object options to appear at end input                                   |
| suffixValue    | no       | string or object option that is selected (required when `suffixOptions` are provided)       |
| variant        | no       | string for Material UI text field variant styling (defaults to `outlined`)                  |

Additional props will be passed to [Material UI TextField](https://material-ui.com/api/text-field/)

## Contributing

We welcome improvements and fixes via PRs. Review the contributing guidelines in the repository readme for how to get started.

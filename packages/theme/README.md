# @tractorzoom/theme

[Live Examples](https://component-library-git-master-tractorzoomdevs.vercel.app/theme)

## Install

```
npm i --save @tractorzoom/theme
```

### Usage

Import font and theme

```javascript
import { ThemeProvider } from '@material-ui/core/styles';
import { ironComps } from '@tractorzoom/theme';
import '@fontsource/inter';

const Component = () => {
    return (
        <ThemeProvider theme={ironComps}>
            <MyContent />
        </ThemeProvider>
    );
};

export default Component;
```

## Contributing

We welcome improvements and fixes via PRs. Review the contributing guidelines in the repository readme for how to get started.

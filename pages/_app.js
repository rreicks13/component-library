import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import '../styles.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0a6ef3',
            dark: '#31435a',
        },
        secondary: {
            main: '#f63c28',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    spacing: 5,
});

function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;

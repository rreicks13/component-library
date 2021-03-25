import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { ironComps } from '../packages/theme/src/index';
import '../styles.css';

function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={ironComps}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default App;

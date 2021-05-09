import React, { useRef } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { ironComps } from '../packages/theme/src/index';
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import '../styles.css';

function loadScript(src, position, id) {
    if (!position) {
        return;
    }
    const script = document.createElement('script');
    script.setAttribute('async', '');
    script.setAttribute('id', id);
    script.src = src;
    position.appendChild(script);
}

const isCSR = () => typeof window !== 'undefined';

function App({ Component, pageProps }) {
    const loaded = useRef(false);

    if (isCSR() && !loaded.current) {
        if (!document.querySelector('#google-maps')) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`,
                document.querySelector('head'),
                'google-maps'
            );
        }

        loaded.current = true;
    }

    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={ironComps}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default App;

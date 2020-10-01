import { render, screen } from '@testing-library/react';
import SidePanel from '../../../packages/side-panel/src';
import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

describe('side panel', () => {
    it('should render the side panel empty', () => {
        // given
        const theme = createMuiTheme();
        const props = {
            children: [],
            open: true,
            width: 'md',
            setOpen: () => {},
        };

        // when
        render(
            <ThemeProvider theme={theme}>
                <SidePanel {...props} />
            </ThemeProvider>
        );

        // then
        expect(screen).toMatchSnapshot();
    });

    it('should render the side panel with a child', () => {
        //given
        const theme = createMuiTheme();
        const props = {
            children: [<div>Child</div>],
            open: true,
            width: 'md',
            setOpen: () => {},
        };

        //when
        render(
            <ThemeProvider theme={theme}>
                <SidePanel {...props} />
            </ThemeProvider>
        );

        //then
        expect(screen).toMatchSnapshot();
    });

    it('should render the side panel with a header component', () => {
        //given
        const theme = createMuiTheme();
        const props = {
            children: [<div>Child</div>],
            headerComponent: <div>Header Component</div>,
            open: true,
            width: 'md',
            setOpen: () => {},
        };

        //when
        render(
            <ThemeProvider theme={theme}>
                <SidePanel {...props} />
            </ThemeProvider>
        );

        //then
        expect(screen).toMatchSnapshot();
    });
});

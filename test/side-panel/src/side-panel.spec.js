import { fireEvent, render, screen } from '@testing-library/react';
import SidePanel from '../../../packages/side-panel/src';
import React from 'react';

describe('Side Panel', () => {
    it('should render the side panel empty', () => {
        // given
        const props = {
            children: [],
            open: true,
            width: 'md',
            setOpen: () => {},
        };

        // when
        render(<SidePanel {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });

    it('should render the side panel with a child', () => {
        //given
        const props = {
            children: [<div>Child</div>],
            open: true,
            width: 'md',
            setOpen: () => {},
        };

        //when
        render(<SidePanel {...props} />);

        //then
        expect(screen).toMatchSnapshot();
    });
});

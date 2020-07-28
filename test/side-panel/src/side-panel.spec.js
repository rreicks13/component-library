import SidePanel from '../../../packages/side-panel/src';
import React from 'react';
import renderer from 'react-test-renderer';

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
        const component = renderer.create(<SidePanel {...props} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
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
        const component = renderer.create(<SidePanel {...props} />);
        let tree = component.toJSON();

        //then
        expect(tree).toMatchSnapshot();
    });
});

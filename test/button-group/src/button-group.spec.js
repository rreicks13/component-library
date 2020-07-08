import ButtonGroup from '../../../packages/button-group/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Button Group', () => {
    it('should render with a single button', () => {
        // given
        const mockData = {
            buttons: [{ props: { title: 'the title' } }],
        };

        // when
        const component = renderer.create(<ButtonGroup {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with a group of two buttons', () => {
        // given
        const mockData = {
            buttons: [{ props: { title: 'the title' } }, { props: { title: 'the title 2' } }],
        };

        // when
        const component = renderer.create(<ButtonGroup {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with a group of 10 buttons', () => {
        // given
        const mockData = {
            buttons: [
                { props: { title: 'the title' } },
                { props: { title: 'the title 2' } },
                { props: { title: 'the title 3' } },
                { props: { title: 'the title 4' } },
                { props: { title: 'the title 5' } },
                { props: { title: 'the title 6' } },
                { props: { title: 'the title 7' } },
                { props: { title: 'the title 8' } },
                { props: { title: 'the title 9' } },
                { props: { title: 'the title 10' } },
            ],
        };

        // when
        const component = renderer.create(<ButtonGroup {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});

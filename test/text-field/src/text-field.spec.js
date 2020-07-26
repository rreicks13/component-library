import React from 'react';
import TextField from '../../../packages/text-field/src';
import renderer from 'react-test-renderer';

describe('text field', () => {
    it('should render with default margin and variant', () => {
        // given
        const props = {
            label: 'test',
            onChange: jest.fn(),
        };

        // when
        const component = renderer.create(<TextField {...props} />);
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with custom margin and variant', () => {
        // given
        const props = {
            label: 'test',
            margin: 'normal',
            onChange: jest.fn(),
            variant: 'filled',
        };

        // when
        const component = renderer.create(<TextField {...props} />);
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render when type is date', () => {
        // given
        const props = {
            label: 'test',
            margin: 'normal',
            onChange: jest.fn(),
            type: 'date',
            variant: 'filled',
        };

        // when
        const component = renderer.create(<TextField {...props} />);
        const tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});

import NativeSelect from '../../../packages/native-select/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('native select', () => {
    it('should render with required props', () => {
        // given
        const mockData = {
            options: [
                {
                    className: 'some class name',
                    label: 'some label',
                    value: 'some value',
                },
            ],
        };

        // when
        const component = renderer.create(<NativeSelect {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with custom margin', () => {
        // given
        const mockData = {
            margin: 'normal',
            options: [
                {
                    className: 'some class name',
                    label: 'some label',
                    value: 'some value',
                },
            ],
        };

        // when
        const component = renderer.create(<NativeSelect {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with custom variant', () => {
        // given
        const mockData = {
            options: [
                {
                    className: 'some class name',
                    label: 'some label',
                    value: 'some value',
                },
            ],
            variant: 'filled',
        };

        // when
        const component = renderer.create(<NativeSelect {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});

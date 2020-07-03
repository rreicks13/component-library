import Button from '../../../packages/button/src';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Button', () => {
    it('should render with required props', () => {
        // given
        const mockData = {
            title: 'some button title',
        };

        // when
        const component = renderer.create(<Button {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render when disabled', () => {
        // given
        const mockData = {
            isDisabled: true,
            title: 'some button title',
        };

        // when
        const component = renderer.create(<Button {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render when loading', () => {
        // given
        const mockData = {
            isLoading: true,
            title: 'some button title',
        };

        // when
        const component = renderer.create(<Button {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with custom variant', () => {
        // given
        const mockData = {
            title: 'some button title',
            variant: 'outlined',
        };

        // when
        const component = renderer.create(<Button {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with start icon', () => {
        // given
        const mockData = {
            startIcon: <SaveIcon />,
            title: 'some button title',
        };

        // when
        const component = renderer.create(<Button {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });

    it('should render with start icon when loading', () => {
        // given
        const mockData = {
            isLoading: true,
            startIcon: <SaveIcon />,
            title: 'some button title',
        };

        // when
        const component = renderer.create(<Button {...mockData} />);
        let tree = component.toJSON();

        // then
        expect(tree).toMatchSnapshot();
    });
});

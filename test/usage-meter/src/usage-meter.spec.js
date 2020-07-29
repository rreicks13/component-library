import { render, screen } from '@testing-library/react';
import React from 'react';
import UsageMeter from '../../../packages/usage-meter/src';

describe('usage meter', () => {
    it('should render with defaults', () => {
        // given
        const props = {
            percentage: 50,
        };

        // when
        render(<UsageMeter {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });

    it.each`
        darkMode | percentage
        ${true}  | ${100}
        ${true}  | ${40}
        ${true}  | ${20}
        ${true}  | ${0}
        ${false} | ${100}
        ${false} | ${40}
        ${false} | ${20}
        ${false} | ${0}
    `('should map dispatch to $percentage', ({ darkMode, percentage }) => {
        // given
        const props = {
            className: 'some class name',
            darkMode,
            label: 'some label',
            percentage,
            title: 'some title',
        };

        // when
        render(<UsageMeter {...props} />);

        // then
        expect(screen).toMatchSnapshot();
    });
});

import { fireEvent, render, screen } from '@testing-library/react';
import NumberField from '../../packages/number-field/src';
import React from 'react';

describe('Number Field', () => {
    it('should display input with format', () => {
        //given
        render(
            <NumberField
                helperText=''
                format='(###) ###-####'
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //when
        fireEvent.change(screen.getByTestId('number-field-input'), { target: { value: '5555555555' } });

        //then
        expect(screen.getByTestId('number-field-input').value).toEqual('(555) 555-5555');
    });

    xit('should show helper text on error', () => {
        //given
        const mockData = {
            errorText: chance.word(),
        };

        //when
        render(
            <NumberField
                helperText={mockData.errorText}
                format='(###) ###-####'
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //then
        expect(screen.getByText(mockData.errorText)).toBeVisible();
    });
});

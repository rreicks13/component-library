import { fireEvent, render, screen, logDOM } from '@testing-library/react';
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
        const inputField = screen.getByTestId('number-field-input').childNodes[0];
        fireEvent.change(inputField, { target: { value: '5555555555' } });

        //then
        expect(inputField.value).toEqual('(555) 555-5555');
    });

    it('should show helperText', () => {
        //given
        const mockData = {
            helperText: chance.word(),
        };

        //when
        render(
            <NumberField
                error={false}
                helperText={mockData.helperText}
                format='(###) ###-####'
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //then
        expect(screen.getByText(mockData.helperText)).toBeVisible();
    });

    it('should not show helperText', () => {
        //given
        const mockData = {
            error: false,
            errorText: chance.word(),
            helperText: chance.word(),
        };

        //when
        render(
            <NumberField
                error={mockData.error}
                helperText={mockData.error ? mockData.errorText : mockData.helperText}
                format='(###) ###-####'
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //then
        expect(screen.getByText(mockData.helperText)).toBeVisible();
        expect(screen.queryByText(mockData.errorText)).toBeNull();
    });
});

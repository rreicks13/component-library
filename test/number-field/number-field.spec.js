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

    it('should show error text on error', () => {
        //given
        const mockData = {
            errorText: chance.word(),
        };

        //when
        render(
            <NumberField
                error={true}
                errorText={mockData.errorText}
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

    it('should not show error text if no error', () => {
        //given
        const mockData = {
            errorText: chance.word(),
        };

        //when
        render(
            <NumberField
                errorText={mockData.errorText}
                format='(###) ###-####'
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //then
        expect(screen.queryByText(mockData.errorText)).toBeNull();
    });

    it('should display helper text', () => {
        //given
        const mockData = {
            helperText: chance.word(),
        };

        //when
        render(
            <NumberField
                displayHelperText={true}
                format='(###) ###-####'
                helperText={mockData.helperText}
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //then
        expect(screen.getByText(mockData.helperText)).toBeVisible();
    });

    it('should display error text over helper text in case of error', () => {
        //given
        const mockData = {
            errorText: chance.word(),
            helperText: chance.word(),
        };

        //when
        render(
            <NumberField
                displayHelperText={true}
                error={true}
                errorText={mockData.errorText}
                format='(###) ###-####'
                helperText={mockData.helperText}
                label='Phone Number'
                name='phoneNumber'
                onChange={() => {}}
                value=''
            />
        );

        //then
        expect(screen.queryByText(mockData.helperText)).toBeNull();
        expect(screen.getByText(mockData.errorText)).toBeVisible();
    });
});

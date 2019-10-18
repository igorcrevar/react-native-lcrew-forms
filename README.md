# react-native-lcrew-forms

## Getting started

`$ npm install git+https://github.com/igorcrevar/react-native-lcrew-forms.git --save`

## Usage
```javascript

import {
    FormComponent,
    EmailFormFieldComponent,
    TextFormFieldComponent,
    HiddenFormFieldComponent,
    PasswordFormFieldComponent,
    PickerFormFieldComponent,
    KeyboardShift,
    SubmitFormFieldComponent,
    ErrorFormFieldComponent,
    useFormContext,
    AutoCompleteFormFieldComponent,
} from 'react-native-lcrew-forms'

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const validators = {
    requiredEmail: {
        func: value => !!value && emailRegex.test(String(value).toLowerCase()),
        message: 'Invalid email',
    },
    required: {
        func: value => !!value,
        message: 'Required',
    },
    password: {
        func: value => !!value && String(value).length >= 4,
        message: 'Password must be 4 length long',
    },
    passwordEqual: {
        func: (value, values) => !!value && String(value).length >= 4 && values['password'] === value,
        message: 'Password must be confirmed correctly',
    },
}

class SomeComponent extends React.Component {
    ...

    formSubmit = async (values) => {
        // await sleep(1000)
        return { null: 'Global error', email: 'Email already exists' }
    }

    onBlur = (name, value, error) => {
        console.log('Field on blur: ' + name + ', value=' + value + ', error=' + error)
    }

    render() {
        const pickerItems = [
            { label: 'First', value: 1 },
            { label: 'Second', value: 2 },
            { label: 'Third', value: 3 },
        ]
        const autoCompleteItems = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Mario' },
            { id: 3, name: 'Donkey Kong' },
            { id: 4, name: 'Zelda' },
            { id: 5, name: 'Nintendo' },
            { id: 6, name: 'Charlie Sheen' },
        ]
        ...
        return (
            <ScrollView>
                <KeyboardShift>
                    <FormComponent formSubmit={this.formSubmit} clearFieldsAfterSubmit={true}>
                        <ErrorFormFieldComponent /> 
                        <HiddenFormFieldComponent name="id" value="5" />
                        <TextFormFieldComponent name="name" label="Name" validators={validators.required} value="Unknown" />
                        <TextFormFieldComponent name="description" multiline={true} />
                        <EmailFormFieldComponent value="" validators={validators.requiredEmail} onBlur={this.onBlur} />
                        <PasswordFormFieldComponent name="password" label="Password" validators={validators.password} />
                        <PasswordFormFieldComponent name="password_confirm" label="Password Confirm"
                            validators={validators.passwordEqual} validateOnBlur={true} dependencies={['password']} hideIfNotEnabled={true} />
                        <PickerFormFieldComponent name="picker" items={pickerItems} value={pickerItems[0].value} />
                        <SwitchFormFieldComponent name="switchControl" />
                        <AutoCompleteFormFieldComponent
                            name="autocomplete" 
                            maxItemsCount={5} maxSelectedItemsCount={0}
                            filterItems={(items, value) => 
                                !value ? [] : items.filter(x => x.name.includes(value.toLowerCase()))} 
                            items={autoCompleteItems} />
                        <SubmitFormFieldComponent buttonTitle='Save' />
                    </FormComponent>
                </KeyboardShift>
            </ScrollView>
        )
    }
```
## Tests
TODO:

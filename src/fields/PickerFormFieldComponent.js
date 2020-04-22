import React from 'react'
import { Picker } from 'react-native'
import { FormField } from 'react-lcrew-forms-base'

function renderField(props) {
    const { style, changeValue, items, value, fieldEnabled, itemValue, itemLabel } = props

    return (
        <Picker
            enabled={fieldEnabled}
            style={style.formFieldPicker}
            itemStyle={style.formFieldPickerItemStyle}
            selectedValue={value}
            onValueChange={changeValue}>
            {items.map(x => (
                <Picker.Item key={itemValue(x)} label={itemLabel(x)} value={itemValue(x)}/>
            ))}
        </Picker>
    )
}

export default function PickerFormFieldComponent(props) {
    return <FormField {...props} renderField={renderField} />
}

PickerFormFieldComponent.defaultProps = {
    value: undefined,
    items: [], // { value, label }
    itemValue: item => item.value,
    itemLabel: item => item.label,
    label: 'Picker',
    name: 'some',
    showError: true,
    fieldEnabled: true,
    validators: undefined,
    dependencies: undefined, // for example: ['email', 'date']
    Template: undefined, // FormFieldBasicTemplateComponent,
    style: undefined, // formsStyle,
}
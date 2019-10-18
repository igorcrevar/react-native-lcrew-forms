import React from 'react'
import { FormField } from 'react-lcrew-forms-base'
import { formsStyle } from '../styles/FormsStyles'
import FormFieldBasicTemplateComponent from '../base/FormFieldBasicTemplateComponent'
import AutoCompleteComponent from '../components/AutoCompleteComponent'

function valueFilterSingle(value) {
    return value && value.length ? value[0] : null
}

function renderField(props) {
    const {
        value, changeValue, fieldEnabled, onBlur,
        autocompleteStyle, single, maxSelectedItemsCount,
    } = props
    return (
        <AutoCompleteComponent
            {...props}
            style={autocompleteStyle}
            onTextInputBlur={onBlur}
            enabled={fieldEnabled}
            selectedItems={value}
            maxSelectedItemsCount={single ? 1 : maxSelectedItemsCount}
            setSelectedItems={changeValue} />
    )
}

export default function AutoCompleteFormFieldComponent(props) {
    const valueFilter = props.single ? valueFilterSingle : undefined
    return <FormField {...props}
        renderField={renderField} valueFilter={valueFilter} />
}

AutoCompleteFormFieldComponent.defaultProps = {
    label: 'Autocomplete',
    name: 'autocomplete',
    value: [], // selected items
    single: false,
    showError: true,
    fieldEnabled: true,
    validators: undefined,
    validateOnBlur: false,
    onBlur: undefined, // (name, value, error) => {}
    dependencies: undefined, // for example: ['email', 'date']
    Template: FormFieldBasicTemplateComponent,
    style: formsStyle,
    
    filterItems: undefined,
    getItemId: undefined,
    SelectedItem: undefined, // React component { item, onPress }
    Item: undefined, // React component { item, onPress }
    selectedItems: [],
    maxItemsCount: 6,
    maxSelectedItemsCount: 2,
    autocompleteStyle: undefined,
    searchTimeout: undefined,
    ItemSeparatorComponent: undefined,
}
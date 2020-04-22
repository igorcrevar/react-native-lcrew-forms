import React from 'react'
import { TextInput, Text, Button } from 'react-native'
import { FormFieldSubmit, Form } from 'react-lcrew-forms-base'
import { formsStyle } from './styles/FormsStyles'
import FormFieldSubmitTemplateComponent from './base/FormFieldSubmitTemplateComponent'
import FormFieldBasicTemplateComponent from './base/FormFieldBasicTemplateComponent'
import ErrorFormFieldComponent from './fields/ErrorFormFieldComponent'

export default function FormRNComponent({
    buttonTitle,
    submitDisabled,
    children,
    formGlobalErrorName = 'global',
    additionalContextProps = defaultAdditionalContextProps,
    globalErrorAbove = true,
    ...otherProps
}) {
    return (
        <Form additionalContextProps={additionalContextProps} formGlobalErrorName={formGlobalErrorName} {...otherProps}>
            
            {!!additionalContextProps && !!additionalContextProps.style && globalErrorAbove === true &&
                <ErrorFormFieldComponent
                    style={additionalContextProps.style.formGlobalError}
                    CustomText={additionalContextProps.CustomText}
                />}

            {children}
            
            {!!additionalContextProps && !!additionalContextProps.style && globalErrorAbove === false &&
                <ErrorFormFieldComponent
                    style={additionalContextProps.style.formGlobalError}
                    CustomText={additionalContextProps.CustomText}
                />}
            
            {!!buttonTitle && <FormFieldSubmit buttonTitle={buttonTitle} disabled={submitDisabled} />}

        </Form>
    )
}

const defaultAdditionalContextProps = {
    CustomText: Text,
    CustomTextInput: TextInput,
    CustomButton: Button,
    SubmitTemplate: FormFieldSubmitTemplateComponent,
    Template: FormFieldBasicTemplateComponent,
    style: formsStyle,
}
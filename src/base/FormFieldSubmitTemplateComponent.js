import React from 'react'
import { View, ActivityIndicator } from 'react-native'

function FormFieldSubmitTemplateComponent({
    disabled,
    isSubmitted,
    onSubmit,
    style,
    CustomButton,
    activityIndicatorProps = defaultActivityIndicatorProps,
    buttonTitle = 'Submit',
    showActivityIndicator = true,
}) {
    // console.log('Render submit form template: ', isSubmitted, disabled)
    return (
        <>
            <View style={style.formSubmitButtonContainer}>
                <CustomButton
                    buttonStyle={style.formSubmitButton}
                    containerStyle={style.formSubmitButtonButtonContainer}
                    disabled={disabled}
                    onPress={onSubmit}
                    title={buttonTitle} />
            </View>

            {showActivityIndicator && isSubmitted &&
                <View style={style.activityIndicatorContainer}>
                    <ActivityIndicator {...activityIndicatorProps} />
                </View>
            }
        </>
    )
}

export default React.memo(FormFieldSubmitTemplateComponent)

const defaultActivityIndicatorProps = {
    size: 'large',
    color: '#00ff00',
}
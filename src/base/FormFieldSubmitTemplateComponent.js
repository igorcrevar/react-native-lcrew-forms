import React, { useCallback } from 'react'
import { View, ActivityIndicator, Keyboard } from 'react-native'

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
    const onSubmitCall = useCallback(() => {
        Keyboard.dismiss();
        onSubmit();
    }, [onSubmit])
    // console.log('Render submit form template: ', isSubmitted, disabled)
    return (
        <>
            <View style={style.formSubmitButtonContainer}>
                <CustomButton
                    buttonStyle={style.formSubmitButton}
                    containerStyle={style.formSubmitButtonButtonContainer}
                    disabled={disabled}
                    onPress={onSubmitCall}
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
import React from 'react'
import { View, Button, ActivityIndicator } from 'react-native'
import { activityIndicatorDefaultProps, formsStyle } from '../styles/FormsStyles'

function FormSubmitComponent({
    disabled,
    isSubmitted,
    dispatch,
    style= formsStyle,
    buttonTitle = 'Submit',
    showActivityIndicator = true,
    CustomButton = Button,
}) {
    console.log('Render submit form template: ', isSubmitted, disabled)
    return (
        <>
            <View style={style.formSubmitButtonContainer}>
                <CustomButton
                    buttonStyle={style.formSubmitButton}
                    disabled={disabled}
                    onPress={() => dispatch({ type: 'submit' })}
                    title={buttonTitle} />
            </View>

            {showActivityIndicator && isSubmitted &&
                <View style={style.activityIndicatorContainer}>
                    <ActivityIndicator {...activityIndicatorDefaultProps} />
                </View>
            }
        </>
    )
}

export default React.memo(FormSubmitComponent)
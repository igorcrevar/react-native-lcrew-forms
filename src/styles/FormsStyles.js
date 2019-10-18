import { StyleSheet, Platform } from 'react-native'

const fieldHeight = Platform.OS === 'ios' ? 40 : 30

export const activityIndicatorDefaultProps = {
    size: 'large',
    color: '#00ff00',
}

export const formsStyle = StyleSheet.create({
    formGlobalError: {
        color: '#ff0000',
        paddingLeft: 4,
        paddingTop: 5,
        fontSize: 16,
    },
    fromFieldContainer: {
        marginTop: 2,
        marginBottom: 10,
    },
    formFieldError: {
        color: '#ff0000',
        paddingLeft: 4,
        paddingTop: 5,
        fontSize: 16,
    },
    formFieldLabel: {
        color: '#000000',
        paddingLeft: 4,
        fontSize: 16,
    },
    formFieldContainer: {
        flexDirection: 'column',
        margin: 5,
    },
    formFieldTextInputLarge: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        paddingLeft: 8,
        paddingRight: 5,
        height: 100,
        fontSize: 16,
        textAlignVertical: 'bottom'
    },
    formFieldTextInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 0,
        paddingLeft: 8,
        paddingRight: 5,
        height: fieldHeight,
    },
    formFieldTextInputDisabled: {
        borderBottomColor: 'gray',
        borderBottomWidth: 3,
        borderRadius: 5,
        padding: 0,
        paddingLeft: 8,
        paddingRight: 5,
        height: fieldHeight,
    },
    formFieldPicker: {
        padding: 2,
        paddingLeft: 8,
        paddingRight: 5,
        margin: 0,
    },
    formFieldPasswordInput: {
        padding: 0,
        height: fieldHeight,
        fontSize: 16,
        flex: 1,
    },
    formFieldPasswordIcon: {
        width: 30,
    },
    formFieldPasswordContainer: {
        flexDirection: 'row',
        flex: 1,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 2,
        paddingLeft: 8,
        paddingRight: 5,
    },
    formSubmitButtonContainer: {
        marginTop: 10,
    },
    formSubmitButton: {
        width: 100,
        height: 100,
    },
    activityIndicatorContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
})
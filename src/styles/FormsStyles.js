import { StyleSheet, Platform } from 'react-native'

const fieldHeight = Platform.OS === 'ios' ? 40 : 30
const RenderItemHeight = 45

export const formsStyle = StyleSheet.create({
    formGlobalError: {
        color: '#ff0000',
        paddingLeft: 4,
        paddingTop: 5,
        fontSize: 16,
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
    formFieldPickerItemStyle: {
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
    },
    formSubmitButtonButtonContainer: {
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

    // autocomplete
    acMainContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    acSelectedItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 5,
    },
    acSelectedItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 2,
    },
    acSelectedItemText: {
        // TODO:
    },
    acSelectedItemRemoveButton: {
        width: 30,
        marginLeft: 4,
        marginRight: 4,
    },
    acDropDownList: {
        flex: 1, 
        backgroundColor: '#f6f6f6',
    },
    acDropDownListSeparator: {
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(0, 173, 238, 1)'
    },
    acDropDownItemContainer: {
        height: RenderItemHeight,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    acDropDownItemText: {
        fontSize: 16
    },
})
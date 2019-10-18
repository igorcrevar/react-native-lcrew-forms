import { StyleSheet, Platform } from 'react-native'

const RenderItemHeight = 45
const fieldHeight = Platform.OS === 'ios' ? 40 : 30

export const autocompleteStyle = StyleSheet.create({
    selectedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 2,
    },
    selectedItemRemoveButton: {
        width: 30,
        marginLeft: 2,
        marginRight: 4,
    },
    selectedItemsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: 5,
    },
    dropdownItemContainer: {
        height: RenderItemHeight,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    dropdownItemText: {
        fontSize: 16
    },
    xCircleIcon: {
        marginRight: 2,
        marginLeft: 2
    },
    flatList: {
        flex: 1, 
        backgroundColor: '#f6f6f6',
    },
    textInput: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderRadius: 5,
        padding: 0,
        paddingLeft: 8,
        paddingRight: 5,
        height: fieldHeight,
    },
    mainView: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    separator: {
        borderBottomWidth: 1, 
        borderBottomColor: 'rgba(0, 173, 238, 1)'
    },
})
import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableOpacity } from 'react-native'
import IconsService from '../additional/IconsService'
import { useAutocomplete } from 'react-lcrew-forms-base'

const emptyArray = []

function AutoCompleteComponent({
    items, selectedItems, setSelectedItems, getItemId, filterItems,
    searchTimeout, maxItemsCount, maxSelectedItemsCount, CustomText, CustomTextInput,
    enabled, style, onTextInputBlur, Item, SelectedItem, RemoveIcon,
}) {
    selectedItems = selectedItems || emptyArray
    const autocomplete = useAutocomplete(items, selectedItems, setSelectedItems, getItemId, 
        filterItems, searchTimeout, maxItemsCount, maxSelectedItemsCount)
    const [
        availableItems, searchText, onSearchTextChange, 
        onItemPress, onRemoveSelectedItemPress, itemsMap
    ] = autocomplete

    const textInputEditable = enabled && (!maxSelectedItemsCount || maxSelectedItemsCount > selectedItems.length)
     return (
        <View style={style.acMainContainer}>
            <View style={style.acSelectedItemsContainer}>
                {selectedItems.map(id => 
                    <SelectedItem
                        key={id}
                        item={itemsMap[id]}
                        onPress={enabled && onRemoveSelectedItemPress} 
                        CustomText={CustomText}
                        RemoveIcon={RemoveIcon}
                        style={style} />
                )}
            </View>
            {
                textInputEditable &&
                <CustomTextInput
                    returnKeyType={'done'}
                    style={style.formFieldTextInput}
                    onBlur={onTextInputBlur}
                    onChangeText={onSearchTextChange}
                    value={searchText} />
            }
            {
                !!searchText && availableItems && 
                <View style={style.acDropDownList}>
                    {availableItems.map((item, index) =>
                        <View key={getItemId(item)}>
                            <Item item={item} onPress={enabled && onItemPress} CustomText={CustomText} style={style} />
                            {index + 1 < availableItems.length && <View style={style.acDropDownListSeparator} />}
                        </View>
                    )}
                </View>
            }
        </View>
    )
}

export default React.memo(AutoCompleteComponent)

AutoCompleteComponent.defaultProps = {
    CustomTextInput: undefined, // TextInput,
    CustomText: undefined, // Text,
    setSelectedItems: undefined,
    getItemId: item => item.id,
    Item: React.memo(Item),
    SelectedItem: React.memo(SelectedItem),
    filterItems: (items, searchText) => {
        if (!searchText) {
            return []
        }
        const st = searchText.toLowerCase()
        return items.filter(x => x.name.toLowerCase().includes(st))
    },
    selectedItems: [],
    maxItemsCount: 6,
    maxSelectedItemsCount: 2,
    style: undefined,
    enabled: true,
    onTextInputBlur: undefined,
    searchTimeout: 500,
    RemoveIcon: IconsService.RemoveIcon,
}

AutoCompleteComponent.propTypes = {
    setSelectedItems: PropTypes.func.isRequired,
    CustomTextInput: PropTypes.elementType,
    CustomText: PropTypes.elementType,
    onTextInputBlur: PropTypes.func,
    getItemId: PropTypes.func,
    Item: PropTypes.elementType,
    SelectedItem: PropTypes.elementType,
    filterItems: PropTypes.func, 
    selectedItems: PropTypes.array,
    maxItemsCount: PropTypes.number,
    maxSelectedItemsCount: PropTypes.number,
    style: PropTypes.object,
    enabled: PropTypes.bool,
    searchTimeout: PropTypes.number,
    RemoveIcon: PropTypes.elementType,
}

function SelectedItem({ item, onPress, CustomText, style, RemoveIcon }) {
    return (
        <View style={style.acSelectedItemContainer}>
            <CustomText style={style.acSelectedItemText}>{item.name}</CustomText>
            {
                !!onPress &&
                <TouchableOpacity onPress={() => onPress(item)} style={style.acSelectedItemRemoveButton}>
                    <RemoveIcon />
                </TouchableOpacity>
            }
        </View>
    )
}

function Item({ item, onPress, CustomText, style }) {
    if (!onPress) {
        return <CustomText style={style.acDropDownItemText}>{item.name}</CustomText>
    }

    return (
        <TouchableOpacity
            style={style.acDropDownItemContainer}
            onPress={() => onPress(item)}>
            <CustomText style={style.acDropDownItemText}>{item.name}</CustomText>
        </TouchableOpacity>
    )
}
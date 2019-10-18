import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { autocompleteStyle } from '../styles/AutocompleteStyle'
import IconsService from '../additional/IconsService'
import { useAutocomplete } from 'react-lcrew-forms-base'

const emptyArray = []

function AutoCompleteComponent({
    items, selectedItems, setSelectedItems, getItemId, filterItems,
    searchTimeout, maxItemsCount, maxSelectedItemsCount, CustomText, CustomTextInput,
    enabled, style, onTextInputBlur, Item, SelectedItem, ItemSeparatorComponent
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
        <View style={style.mainView}>
            <View style={style.selectedItemsContainer}>
                {selectedItems.map(id => 
                    <SelectedItem item={itemsMap[id]} onPress={enabled && onRemoveSelectedItemPress} 
                        key={id} CustomText={CustomText} />
                )}
            </View>
            {
                textInputEditable &&
                <CustomTextInput
                    returnKeyType={'done'}
                    style={style.textInput}
                    onBlur={onTextInputBlur}
                    onChangeText={onSearchTextChange}
                    value={searchText} />
            }
            {
                !!searchText && availableItems && 
                <View style={style.flatList}>
                    {availableItems.map((item, index) =>
                        <View key={getItemId(item)}>
                            <Item item={item} onPress={enabled && onItemPress} CustomText={CustomText} />
                            {index + 1 < availableItems.length && <ItemSeparatorComponent />}
                        </View>
                    )}
                </View>
            }
        </View>
    )
}

export default React.memo(AutoCompleteComponent)

AutoCompleteComponent.defaultProps = {
    CustomTextInput: TextInput,
    CustomText: Text,
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
    style: autocompleteStyle,
    enabled: true,
    onTextInputBlur: undefined,
    searchTimeout: 500,
    ItemSeparatorComponent: React.memo(ItemSeparatorComponent),
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
    ItemSeparatorComponent: PropTypes.elementType,
}

function ItemSeparatorComponent(_props) {
    return (
        <View style={autocompleteStyle.separator} />
    )
}

function SelectedItem({ item, onPress, CustomText }) {
    return (
        <View style={autocompleteStyle.selectedItem}>
            <CustomText>{item.name}</CustomText>
            {
                !!onPress &&
                <TouchableOpacity onPress={() => onPress(item)} style={autocompleteStyle.selectedItemRemoveButton}>
                    <IconsService.RemoveIcon />
                </TouchableOpacity>
            }
        </View>
    )
}

function Item({ item, onPress, CustomText }) {
    if (!onPress) {
        return <CustomText>{item.name}</CustomText>
    }

    return (
        <TouchableOpacity
            style={autocompleteStyle.dropdownItemContainer}
            onPress={() => onPress(item)}>
            <Text>{item.name}</Text>
        </TouchableOpacity>
    )
}
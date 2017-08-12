import React, { PropTypes } from "react";
import { View, Text, TouchableHighlight } from "react-native";

import styles from "./styles";

import Icon from "./Icon";


const ListItem = (props) => {
    const { text, onPress, selected = false, checkMark = true, visible = true, iconBackground } = props;

    return (
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <View style={styles.row}>
                <Text style={styles.text}>{text}</Text>
                {selected ? <Icon checkMark={checkMark} visible={visible} iconBackground={iconBackground} /> : <Icon />}
            </View>
        </TouchableHighlight>
    )

}

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    checkMark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
}

export default ListItem;
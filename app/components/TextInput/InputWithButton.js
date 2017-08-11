import React, { PropTypes } from "react";
import { View, TouchableHighlight, Text, TextInput } from "react-native";

import Color from "color";

import styles from "./styles";

const InputWithButton = (props) => {
    const {onPress, buttonText, editable = true} = props;

    const containerStyles = [styles.container];
    if (!editable)
        containerStyles.push(styles.containerDisabled);

    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={styles.$buttonPressed} style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    )
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
};

export default InputWithButton;
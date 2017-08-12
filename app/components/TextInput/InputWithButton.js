import React, { PropTypes } from "react";
import { View, TouchableHighlight, Text, TextInput } from "react-native";

import Color from "color";

import styles from "./styles";

const InputWithButton = (props) => {
    const {onPress, buttonText, editable = true, textColor} = props;

    const containerStyles = [styles.container];
    const buttonTextStyles = [styles.buttonText];

    if (!editable)
        containerStyles.push(styles.containerDisabled);
    if(textColor)
        buttonTextStyles.push({color: textColor});

    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={styles.$buttonPressed} style={styles.buttonContainer} onPress={onPress}>
                <Text style={buttonTextStyles}>{buttonText}</Text>
            </TouchableHighlight>
            <View style={styles.border} />
            <TextInput style={styles.input} underlineColorAndroid="transparent" {...props} />
        </View>
    )
}

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string
};

export default InputWithButton;
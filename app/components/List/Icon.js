import React, {PropTypes} from "react";
import {View, Image} from "react-native";

import styles from "./styles";

const Icon = (props) => {
    const {checkMark, visible, iconBackground} = props;
    const iconStyle = [styles.icon]
    
    if (visible)
        iconStyle.push(styles.iconVisible);

    if (iconBackground)
        iconStyle.push({backgroundColor: iconBackground})

    return (
        <View style={iconStyle}>
            { checkMark ? <Image style={styles.checkIcon} resizeMode="contain" source={require("./images/check.png")} /> : null }
        </View>
    )
}

Icon.propTypes = {
    checkMark: PropTypes.bool,
    visible: PropTypes.bool,
    iconBackground: PropTypes.string,
}
export default Icon;
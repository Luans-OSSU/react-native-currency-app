import React, { PropTypes } from "react";

import { View } from "react-native";
import styles from "./styles";


const Container = ({children, backgroundColor}) => {
    let containerStyles = [styles.container];
    if(backgroundColor)
        containerStyles.push({backgroundColor});
    return (
        <View style={containerStyles}>
            { children }
        </View>
    )
};


Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

export default Container;
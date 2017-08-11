import React, { PropTypes } from "react";
import { Text } from "react-native";
import moment from "moment";

import styles from "./styles";


const LastCovnerted = (props) => {
    const {date, base, quote, conversionRate} = props;
    return (
        <Text style={styles.smallText}>
            1 {base} = {conversionRate} {quote} as of {moment(date).format("D MMMM, YYYY")}
        </Text>
    )
}

LastCovnerted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number
}

export default LastCovnerted;
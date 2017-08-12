import React, {PropTypes} from "react";
import { FlatList, View, StatusBar } from "react-native";

import {connect} from "react-redux";

import currencies from "../lib/data/currencies";
import { ListItem, Separator } from "../components/List";

import {changeBaseCurrency, changeQuoteCurrency} from "../actions/currencies";

class CurrencyList extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    }

    handlePress = (currency) => {
        const {type} = this.props.navigation.state.params;

        if (type === "base")
            this.props.dispatch(changeBaseCurrency(currency));
        else
            this.props.dispatch(changeQuoteCurrency(currency));

        this.props.navigation.goBack(null);
    }

    render() {
        let comparisonCurrency = this.props.baseCurrency;

        if(this.props.navigation.state.params.type === "quote")
            comparisonCurrency = this.props.quoteCurrency;

        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({item}) => (
                        <ListItem
                            text={item}
                            selected={(comparisonCurrency === item)}
                            onPress={() => this.handlePress(item)}
                            iconBackground={this.props.primaryColor}
                        />
                    )}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.themes.primaryColor,
    }
}

export default connect(mapStateToProps)(CurrencyList);
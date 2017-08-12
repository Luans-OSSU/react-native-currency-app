import React, {PropTypes} from "react";
import { FlatList, View, StatusBar } from "react-native";

import currencies from "../lib/data/currencies";
import { ListItem, Separator } from "../components/List";


const TEMP_CURRENT_CURRENCY = "CAD";
export default class CurrencyList extends React.Component {

    static propTypes = {
        navigation: PropTypes.object,
    }

    handlePress = () => {
        console.log("Press");
        this.props.navigation.goBack(null);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({item}) => (
                        <ListItem 
                            text={item}
                            selected={(TEMP_CURRENT_CURRENCY === item)}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        )
    }
}
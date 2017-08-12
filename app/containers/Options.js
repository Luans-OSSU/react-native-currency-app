import React, { PropTypes } from "react";
import {ScrollView, StatusBar, Linking} from "react-native";

import { connectAlert } from "../components/Alert";

import {ListItem, Separator} from "../components/List";

//import { Ionicons } from "@expo/vector-icons";


const ICON_COLOR = "#868686";
const ICON_SIZE = "23";

class Options extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
        alertWithType: PropTypes.func,
    }

    handlePressTheme = () => {
        this.props.navigation.navigate("Themes");
    }

    handleSitePress = () => {
        Linking.openURL("hSSttp://fixer.io")
            .catch(err => {
                this.props.alertWithType("error", "Error", "Fixer.io can't be opend");
            });
    }

    render() {

        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Themes"
                    onPress={this.handlePressTheme}
                />
                <Separator />
                <ListItem
                    text="Fixer.io"
                    onPress={this.handleSitePress}
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Options);
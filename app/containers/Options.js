import React from "react";
import {ScrollView, StatusBar} from "react-native";

import {ListItem, Separator} from "../components/List";

//import { Ionicons } from "@expo/vector-icons";


const ICON_COLOR = "#868686";
const ICON_SIZE = "23";


export default class Options extends React.Component {

    handlePressTheme = () => {
        console.log("press theme");
    }

    handleSitePress = () => {
        console.log("press site");
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
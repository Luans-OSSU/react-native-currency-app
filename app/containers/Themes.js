import React, {PropTypes} from "react";
import { ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import {ListItem, Separator} from "../components/List";

const styles = EStyleSheet.create({
    $blue: "$primaryBlue",
    $orange: "$primaryOrange",
    $green: "$primaryGreen",
    $purple: "$primaryPurple",
});


export default class Themes extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    }

    handleThemePress = (color) => {
        this.props.navigation.goBack(null);
    }
    render() {

        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem
                    text="Blue"
                    onPress={() => this.handleThemePress(styles.$blue)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$blue}
                />
                <Separator />
                <ListItem
                    text="Orange"
                    onPress={() => this.handleThemePress(styles.$orange)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$orange}
                />
                <Separator />
                <ListItem
                    text="Green"
                    onPress={() => this.handleThemePress(styles.$green)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$green}
                />
                <Separator />
                <ListItem
                    text="Purple"
                    onPress={() => this.handleThemePress(styles.$purple)}
                    selected
                    checkMark={false}
                    iconBackground={styles.$purple}
                />
                <Separator />
            </ScrollView>
        )
    }
}
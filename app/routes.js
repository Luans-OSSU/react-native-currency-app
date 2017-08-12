import { StackNavigator } from "react-navigation";
import { StatusBar } from "react-native";
 
import Home from "./containers/Home";
import CurrencyList from "./containers/CurrencyList";
import Options from "./containers/Options";
import Themes from "./containers/Themes";


const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: () => null,
        },
    },
    Options: {
        screen: Options,
        navigationOptions: {
            headerTitle: "Options"
        },
    },
    Themes: {
        screen: Themes,
        navigationOptions: {
            headerTitle: "Themes",
        }
    },
},{
    headerMode: "screen",
});


const CurrencyListStack = StackNavigator({
    CurrencyList: {
        screen: CurrencyList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: navigation.state.params.title,
        }),
    }
});

export default StackNavigator({
    Home: {
        screen: HomeStack,
    },
    CurrencyList: {
        screen: CurrencyListStack,
    },
}, {
    mode: "modal",
    cardStyle: {paddingTop: StatusBar.currentHeight},
    headerMode: "none",
})
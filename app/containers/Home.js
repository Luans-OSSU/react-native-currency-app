import React from "react";
import { View, StatusBar, KeyboardAvoidingView} from "react-native";

import {Container} from "../components/Container";
import {Logo} from "../components/Logo";
import {InputWithButton} from "../components/TextInput";
import { ClearButton } from "../components/Button";
import { LastConverted } from "../components/Text";
import {Header} from "../components/Header";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "EUR";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "20";
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();



export default class Home extends React.Component {
    handlePressBaseCurrency = () => {
        console.log("press");
    }
    handlePressQuoteCurrency = () => {
        console.log("press");
    }

    handleTextChange = (text) => {
        console.log(text);
    }

    handleSwapCurrency = () => {
        console.log("swap");
    }
    handleOptionPres = () => {
        console.log("press");
    }

    render() {
        return (
                <Container>
                    <StatusBar translucent={false} barStyle="light-content" />
                    <Header onPress={this.handleOptionPres()} />
                    <KeyboardAvoidingView behavior="padding">
                        <Logo />
                        <InputWithButton
                            buttonText={TEMP_BASE_CURRENCY}
                            onPress={this.handlePressBaseCurrency()}
                            defaultValue={TEMP_BASE_PRICE}
                            keyboardType="numeric"
                            onChangeText={this.handleTextChange}
                        />
                        <InputWithButton
                            buttonText={TEMP_QUOTE_CURRENCY}
                            onPress={this.handlePressQuoteCurrency()}
                            editable={false}
                            value={TEMP_QUOTE_PRICE}
                        />
                        <LastConverted
                            date={TEMP_CONVERSION_DATE}
                            base={TEMP_BASE_CURRENCY}
                            quote={TEMP_QUOTE_CURRENCY}
                            conversionRate={TEMP_CONVERSION_RATE}
                        />
                        <ClearButton
                            text="Reverse Currencies"
                            onPress={this.handleSwapCurrency()}
                        />
                    </KeyboardAvoidingView>
                </Container>
            );
    }
}
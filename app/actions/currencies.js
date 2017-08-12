import {SWAP_CURRENCY, CHANGE_CURRENCY_AMOUNT} from "../lib/constants";

export const swapCurrencies = () => ({
    type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = (amount) => ({
    type: CHANGE_CURRENCY_AMOUNT,
    amount: parseFloat(amount),
});
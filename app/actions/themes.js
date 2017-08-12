import {CHANGE_PRIMARY_COLOR} from "../lib/constants";

export const changePrimaryColor = (color) => ({
    type: CHANGE_PRIMARY_COLOR,
    color,
});
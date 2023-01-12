// import axios from "axios";
import * as types from "./types";


export const userLoggedIn = (token, dispatch) => (dispatch({
    type: types.SIGN_IN,
    token
}));
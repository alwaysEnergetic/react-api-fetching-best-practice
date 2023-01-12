import decode from "jwt-decode";
import * as types from "./types";
import createReducer from "../../utils/createReducer";

import { getUserType } from "../../../utilities";

const initialState = {};

const signInReducer = createReducer(initialState)({
    [types.SIGN_IN]: ({ token }) => {
        const { user_id: id, aud: role, status } = decode(token);
    
        return {
          token,
          id,
          type: getUserType(role),
          role,
          status
        };
      },
})

export default signInReducer;
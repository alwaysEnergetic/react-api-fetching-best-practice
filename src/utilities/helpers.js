import {
    S_READ,
    S_STAFF,
    S_ADMIN
} from "./constants";

export function getUserType(role) {
    if (role === S_READ) return S_READ;
    else if (role === S_STAFF) return S_STAFF;
    else if (role === S_ADMIN) return S_ADMIN;
    else return null;
}
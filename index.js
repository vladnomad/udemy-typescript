"use strict";
var _Player_login;
class Player {
    constructor() {
        _Player_login.set(this, void 0);
    }
    get password() {
        return this._password;
    }
    set password(newPassword) {
        // Validation
        this._password = newPassword;
    }
}
_Player_login = new WeakMap();
class CompetetivePlayer extends Player {
    setConsent() {
        this.consent ? "Yes" : "No";
    }
}
const test = new Player();
// test.#login
const player = new CompetetivePlayer();
// player._password = "newPassword"

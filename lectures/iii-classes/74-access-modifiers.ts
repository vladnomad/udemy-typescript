//@ts-nocheck
class Player0 {
    public server: string;
    private login: string;
    private _password: string;
    protected consent: boolean;

    get password() {
        return this._password
    }

    set password(newPass: string) {
        // Validation
        this._password = newPass
    }
}

class CompetetivePlayer0 extends Player0 {
    rank: number;

    setConsent() {
        this.consent ? "Yes" : "No"
    }
}

const player0 = new CompetetivePlayer0()

// player.login = "newLogin"
player0.password = "newPassword"
player0.setConsent()

/*
class Usr {
    public email: string;
    public name: string;

    constructor(email: string, name: string) {
        this.email = email
        this.name = name
    }
}
// ===
class Usr {
    constructor(public email: string, public name: string) {}
}
*/
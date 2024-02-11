class Player {
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

class CompetetivePlayer extends Player {
    rank: number;

    setConsent() {
        this.consent ? "Yes" : "No"
    }
}

const player = new CompetetivePlayer()

// player.login = "newLogin"
player.password = "newPassword"
player.setConsent()

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
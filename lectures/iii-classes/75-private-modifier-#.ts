//@ts-nocheck
class Player {
    #login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;

    get password() {
        return this._password
    }

    set password(newPassword: string) {
        // Validation
        this._password = newPassword
    }
}

class CompetetivePlayer extends Player {
    rank: number;

    private setConsent() {
        this.consent ? "Yes" : "No"
    }
}

const test = new Player()
// test.#login

const player = new CompetetivePlayer()
// player._password = "newPassword"
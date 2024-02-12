//@ts-nocheck
class Player1 {
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

class CompetetivePlayer1 extends Player1 {
    rank: number;

    private setConsent() {
        this.consent ? "Yes" : "No"
    }
}

const test1 = new Player1()
// test.#login

const player1 = new CompetetivePlayer1()
// player._password = "newPassword"
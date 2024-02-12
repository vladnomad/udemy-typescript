const setName = (): string => "Anno 1800"

class Player {
    private static game: string = "Anno 1404";
    #login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;

    static {
        Player.game = setName()
    }

    constructor(login: string) {
        this.#login = login
    }

    get password() {
        return this._password
    }

    set password(newPassword: string) {
        // Validation
        this._password = newPassword
    }

    static getGame() {
        return Player.game
    }

/* 
    logIn(this: Player) {
        return `Player ${this.#login} is online.`
    }
 */

    // Not accessible in child classes
    // use this.func() instead of super.func()
    logIn = () => `Player ${this.#login} is online.`

    connect() {
        // Do smth
        return this
    }

    isPro(): this is CompetetivePlayer {
        return this instanceof CompetetivePlayer
    }
}

const player = new Player("'annonymous'")
// console.log(player.logIn())

console.log(player.connect().logIn())

// const playerLogin = player.logIn.bind(player)

const playerLogin = player.logIn
playerLogin()

class CompetetivePlayer extends Player {
    rank: number;

    checkLogin() {
        // return super.logIn()
        return this.logIn()
    }

    private setConsent() {
        this.consent ? "Yes" : "No"
    }
}

const competetivePlayer = new CompetetivePlayer("'annoniimous'")
// console.log(competetivePlayer.checkLogin())

console.log(competetivePlayer.connect().logIn())

const somePlayer: Player | CompetetivePlayer = new CompetetivePlayer("annominus")
somePlayer.isPro() ? console.log(somePlayer) : console.log(somePlayer)
function setName() {
    return "Anno 1800"
}

class Player {
    private static game: string = "Anno 1404";
    #login: string;
    private _password: string;
    public server: string;
    protected consent: boolean;

    static {
        Player.game = setName()
    }

    // private constructor() {}
    // protected constructor() {}
/* 
    constructor(game: string) {
        Player.game = game
    }
*/
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
}

// new Player("Anno 2070")
new Player()

console.log(Player.getGame())

/* 
Math.PI
Math.random()

// new Math()

class CompetetivePlayer extends Player {
    rank: number;

    private setConsent() {
        this.consent ? "Yes" : "No"
    }
}

const test = new Player()
const competetivePlayer = new CompetetivePlayer() 
*/
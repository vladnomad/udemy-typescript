interface IUser {
    login: string;
    password: string;
}

interface IValidation {
    valid: boolean;
    isValid: (data: string) => boolean;
}

class UserForm implements IUser, IValidation {
    login: string;
    password: string;
    valid: boolean;

    isValid(login: string) {
        return login.length > 3
    }
}
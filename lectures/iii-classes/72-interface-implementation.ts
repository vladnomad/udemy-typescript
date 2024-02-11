//@ts-nocheck
interface IUser {
    login: string;
    password: string;
    token?: number;
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

// new UserForm().
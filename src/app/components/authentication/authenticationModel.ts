"use strict";

module AppModule {

    export class RegisterUser {
        userName: string;
        password: string;
        confirmPassword: string;
    }

    export class LoginUser {
        userName: string;
        password: string;
    }

    export class AuthenticationInfo {
        loginUser: LoginUser
        isAuth: Boolean;
        userName: string;
    }

}
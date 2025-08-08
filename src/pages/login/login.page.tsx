import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css"

export const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = async (credentials: Credentials) => {
    
    const apiCredentials = mapCredentialsFromVmToApi(credentials);
    const isValid = await isValidLogin(apiCredentials);
        if (isValid) {
            navigate(appRoutes.accountList);
        } else {
            alert("Credenciales inválidas");
        }
    };

return (
    <div>
        <header className={classes.header}>
            <img className={classes.logo} src="/assets/logo_header.svg" />
        </header>
        <div className={classes.bgImg}>

        </div>
        <div className={classes.box}>
            <h1>Acceso</h1>
            <LoginFormComponent onLogin={handleSubmit}></LoginFormComponent>
            <h4 className={classes.inputFooter}><strong>Está usted en un sitio seguro</strong></h4>
        </div>
    </div>
    );
};
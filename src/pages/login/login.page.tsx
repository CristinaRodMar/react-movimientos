import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import { isValidLogin } from "./api";
import { appRoutes } from "@/core/router";

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
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleSubmit} />
    </div>
    );
};
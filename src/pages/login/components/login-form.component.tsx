import React from "react";
import { Credentials, createEmptyCredentials } from "../login.vm";
import classes from "./login-form.component.module.css";

interface Props {
    onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
    const { onLogin } = props;
    const [credentials, setCredentials] = React.useState<Credentials>(createEmptyCredentials());
    const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setCredentials({
                ...credentials, 
                [e.target.name]: e.target.value,
            })
        }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onLogin(credentials);
        }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div>
                <input type="text" id="username" name="user" onChange={handleFieldChange} placeholder="Usuario" className={errors.user ? classes.inputError : ""}></input>
                {errors.user && <p className={classes.error}>{errors.user}</p>}
            </div>
            <div>
                <input type="password" id="password" name="password" onChange={handleFieldChange} placeholder="Contraseña" className={errors.password ? classes.inputError : ""}></input>
                {errors.password && <p className={classes.error}>{errors.password}</p>}
            </div>
            <button type="submit" className={classes.btnEnviar}>Acceder</button>
        </form>)
}

import { appRoutes } from "@/core/router";
import React from "react";
import { generatePath, Link } from "react-router-dom";

export const AccountListPage: React.FunctionComponent = () => {
    return (<div>Account List
        <br>
        <Link to={generatePath(appRoutes.movements, {id: 1})}>Movimientos de la cuenta</Link>
        </br>
        <br>
        <Link to={appRoutes.transfer}>Transferencia</Link>
        </br>
        <br>
        <Link to={generatePath(appRoutes.transferFromAccount, {id: 1})}>Tranferencia desde la cuenta</Link>
        </br>
    </div>)
}
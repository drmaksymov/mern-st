import React from "react"
import {Switch, Route, Navigate} from 'react-router-dom'
import { AuthPage } from "./AuthPage"
import { CreatePage } from "./CreatePage"
import { DetailPage } from "./DetailPage"
import { LinksPage } from "./LinksPage"


export const useRouter = isAuthenticated =>  {
    if(isAuthenticated){
        return (
            <Switch>

                {/* створюємо роути для авторезованих - посилання */}
                 <Route path="/links" exact>
                    <LinksPage/>
                </Route>

                <Route path="/detail/:id">
                    <DetailPage/>
                </Route>

                <Route path="/create" exact>
                    <CreatePage/>
                </Route>


            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/">
                <AuthPage/>
            </Route>
            <Navigate to="/" />
        </Switch>
    )
}
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

export function LoginComponent() {

    let history = useHistory();
    let location = useLocation();

    return (
        <div>
            <div>
                <label>Login</label>
                <input type="text" />
            </div>
        </div>
    )
};

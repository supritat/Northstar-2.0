import React, { useState } from 'react';
export default function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedin] = useState(false);

    handleUserIdChange = (event) => {
        setUserName(event.target.value)
    }
    handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    submitclick = () => {
        if ((userName == "krishankantsinghal") && (password == "krishankant123")) {
            setIsLoggedin(true);
        }
    }

    return (
        <div>
            <input type="text" name="username" hint="username" onChange={this.handleUserIdChange} />
            <input type="password" name="password" hint="password" onChange={this.handlePasswordChange} />
            <button name="submit" onClick={this.submitclick}> Submit</button>
        </div>
    );
}

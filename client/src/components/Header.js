import React from 'react';
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function Header() {
    return (
        <main>
            <SignUp />
            <LogIn />        
            <header>
                <h1>
                    Elite Books 
                </h1>
            </header>
        </main>
    );
}

export default Header; 
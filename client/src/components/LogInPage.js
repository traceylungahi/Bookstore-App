import React, { useState }from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function LogInPage({ onLogIn }) {
    const [logIn, setLogIn] = useState(true);

    return (
        <div>
            <h3>Welcome to Elite Books</h3>
            {logIn ? (
            <>
            <LogIn onLogin={onLogIn} />
                <p>
                    Don't have an account? &nbsp;
                    <button color="primary" onClick={() => setLogIn(false)}>
                        SignUp
                    </button>
                </p>
            </>
         ) : (     
            <>
                <SignUp onLogin={onLogIn} />
                <p>
                    Already got an account? &nbsp;
                    <button color="primary" onClick={() => setLogIn(false)}>
                        LogIn
                    </button>
                </p>
            </>
            )}
        </div>
    )
}

export default LogInPage;
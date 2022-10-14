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
                <p className="p">
                    Don't have an account? &nbsp;
                    <button className="signup" color="primary" onClick={() => setLogIn(false)}>
                        SignUp
                    </button>
                </p>
            </>
         ) : (     
            <>
                <SignUp onLogin={onLogIn} />
                <p>
                    Already got an account? &nbsp;
                    <button className="login" color="primary" onClick={() => setLogIn(true)}>
                        LogIn
                    </button>
                </p>
            </>
            )}
        </div>
    )
}

export default LogInPage;
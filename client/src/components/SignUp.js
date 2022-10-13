import React, { useState } from "react";

function SignUp({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    // const [bio, setBio] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(event) {
      event.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          password_confirmation: passwordConfirmation,
        //   bio,
        }),
      }).then((response) => {
        setIsLoading(false);
        if (response.ok) {
          response.json().then((user) => onLogin(user));
        } else {
          response.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
        <div className="div-center">
            <div className="border">
                <h3>Sign Up</h3>
                <hr />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="password">Password Confirmation</label>
                        <input 
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(event) => setPasswordConfirmation(event.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">{isLoading ? 'Loading..' : 'Sign Up'}</button>
                    <div>
                    {errors.map((err) => (
                        <h4 key={err}>{err}</h4>
                    ))}
                    </div>
                </form>
            </div>
        </div>
    )
} 

export default SignUp;

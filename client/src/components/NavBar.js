import React from "react";

function NavBar({ user, setUser }) {
    function handleLogOut() {
        fetch('/logout', {
            method: 'DELETE',
        }).then((response) => {
            if (response.ok) {
                setUser(null)
            }
        });
    }

    return (
        <div>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default NavBar;
import React from "react";

function NavBar({ setUser }) {
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
        <div className='logout'>
            <button onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default NavBar;
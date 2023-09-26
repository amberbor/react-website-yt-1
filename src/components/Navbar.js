import React, {useState} from 'react'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    TRVL
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
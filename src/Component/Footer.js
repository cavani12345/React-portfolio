import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear()
    return (
        <div>
            <footer className="main-footer bg-dark d-flex justify-content-center">
    <p>
    <strong>Copyright &copy; {year} <a href="/">Edison </a>.  </strong>
    All rights reserved.
    </p>
  </footer>
        </div>
    )
}

export default Footer

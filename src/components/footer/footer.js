import React from "react";
import "./footer.styles.css"

const Footer = () => (
    <footer className="footer">
        <p>&copy; { new Date().getFullYear() } - Francisco Maduro</p>
    </footer>
);

export default Footer;
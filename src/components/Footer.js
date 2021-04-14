import React from "react"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"/>
        <h4>copyright © {new Date().getFullYear()}<span> WebDev </span>All Rights reserved</h4>
        
      </div>
    </footer>
  )
}

export default Footer

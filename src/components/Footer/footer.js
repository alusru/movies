import React from "react";
import { CURRENT_YEAR } from "../../helpers";
const Footer = () => (
  <footer className="footer mt-auto py-3">
    <div className="container">
      <span className="text-muted">
        Movies {CURRENT_YEAR} all rights reserved
      </span>
    </div>
  </footer>
);

export default Footer;

import React from "react";
import { Link } from "react-router-dom";


const Navbar = props =>
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link className="navbar-brand" to="/">Mongo Scraper</Link>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav nav-pills pull-right">
          <li role="presentation" className={
            window.location.pathname === "/scrape"
            ? "active"
            : ""
          }><Link to="/scrape">Js Live Scrape</Link></li>
          <li role="presentation" className={
            window.location.pathname === "/techScrape"
            ? "active"
            : ""
          }><Link to="/techScrape">Tech Crunch Scrape</Link></li>
          <li role="presentation" className={
            window.location.pathname === "/savedArticles"
            ? "active"
            : ""
          }><Link to="/savedArticles">Saved Articles</Link></li>
        </ul>

      </div>
    </div>
  </nav>


export default Navbar;

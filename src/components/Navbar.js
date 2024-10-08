import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Navbar extends Component {
    static propTypes = {}

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">NewsApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Pricing</a>
      </li>
      
    </ul>
  </div>
</nav>


            </div>
        );
    }
}

export default Navbar
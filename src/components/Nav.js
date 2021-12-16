import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component {
    state = {
        clicked : false,
    }


    handleNavClick = () => {
        this.setState({ clicked : this.state.clicked === true });
        console.log("click")
    }

    render() {
        return (
            <header>
                <div>
                    <p>🍧</p>
                    <Link to="/">Kim's Café Köln</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link onClick={this.handleNavClick} to="/speisekarte">Speisekarte</Link>
                        </li>
                        <li>
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                        <li>
                            <Link to="/oeffnungszeiten">Öffnungszeiten</Link>
                        </li>
                        <li>
                            <Link to="/galerie">Galerie</Link>
                        </li>

                    </ul>

                </nav>
            </header>

        );
    }
}

export default Nav;
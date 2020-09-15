import React from 'react'

class NavBar extends React.Component {
    render(){
        return(
            <React.Fragment>
                <nav className="navbar navbar-dark bg-danger">
                    <a className="navbar-brand" href="index.html">
                        <img src="./pokeicon.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        Pokelist
                    </a>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar
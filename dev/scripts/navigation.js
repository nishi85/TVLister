import React from 'react';
import ReactDom from 'react-dom';
import Selection from "./Selection";

class Navigation extends React.Component {
    render () {
        return (
            <section className ="navigation">
                Navigation
                <Selection />
            </section>
        )
    }
}

export default Navigation;
import React from 'react';
import ReactDom from 'react-dom';
import Navigation from'./Navigation';
import Shows from './Shows';

class Main extends React.Component {
    render() {
        return (
            <section className='main'>
                <Navigation />
                <Shows />
            </section>
        )
    }
}

export default Main;
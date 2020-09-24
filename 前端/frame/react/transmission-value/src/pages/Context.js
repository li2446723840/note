import React, { Component } from 'react';
import Parent from '../components/context/Parent'

class Context extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <Parent />
            </>
        )
    }
}


export default Context;
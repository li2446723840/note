import React from 'react'
import Foo from '../components/events/Foo'
import Boo from '../components/events/Boo'

class Events extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
                <Foo/>
                <Boo/>
            </>
        )
    }
}
export default Events;
import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('in Clock render')

        return (
            <div>
                <h1>GP Clock</h1>
            </div> 
        )
    }
}

export default Clock
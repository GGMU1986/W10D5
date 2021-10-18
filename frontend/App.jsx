import React from 'react';
import Clock from './Clock';
import Tabs from './Tabs';



class App extends React.Component {
    render() {
        const tabs = [
            {title: 'one', content: 'I am one'},
            {title: 'two', content: 'I am two'},
            {title: 'three', content: 'I am three'}
        ]

        return (
            <Clock />
            <Tabs tabs={tabs}/>
        )
    }
}

export default App;
import React from 'react'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(currTab) {
        this.setState({ selectedTab: currTab })
    }

    render() {
        return (
            <Header tabs={this.props.tabs} idx={this.state.selectedTab}/>
        )
    }
}

export default Tabs;
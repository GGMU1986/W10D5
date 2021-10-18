import React from 'react'
import Header from './Header'

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
        const content = this.props.tabs[this.state.selectedTab]
        return (
            <div>
                <h1>Tabs</h1>
                <div>
                    <Header 
                        tabs={this.props.tabs} 
                        idx={this.state.selectedTab} 
                        onTabChange={this.handleClick}>
                    </Header>
                    <div>
                        <article>
                            {content.content}
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

export default Tabs;
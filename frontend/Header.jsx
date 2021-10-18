import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const currTab = this.props.idx
        const headers = this.props.tabs.map((tab, idx) => {
            const title = tab.title;
            const index = idx === currTab ? 'active' : '';
            return (
                <li 
                    key={idx} 
                    className={index} 
                    onClick={() => this.props.onTabChange(idx)}
                >
                    {title}
                </li>
            )
        })
        return(
            <div>
                {headers}
            </div>
        )
    }
}

export default Header;
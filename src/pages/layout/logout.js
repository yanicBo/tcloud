import React, { Component } from 'react';

class Logout extends Component {
    render () {
        return (
            <div className="account-login">
                <div className='main-login'>
                    <div className='left'>
                        <div className='img'></div>
                    </div>
                    <div className='right'>
                        <div className='logo'></div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default Logout;
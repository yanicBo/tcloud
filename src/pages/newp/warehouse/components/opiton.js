import React, { Component } from 'react';
import { Button, Icon } from 'antd';

class Option extends Component {
    render() {
        return (
            <div className="option">
                <div className="pull-right">
                    <Button><Icon type="plus" style={{ fontSize: 16 }} />新增仓库</Button>
                </div>
            </div>
        );
    }
}

export default Option;
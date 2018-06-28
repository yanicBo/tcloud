import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';

class TagSelect extends Component {

    render() {
        return (
            <div className="breadcrumb">
                <Breadcrumb>
                    <Breadcrumb.Item href="">
                        <Icon type="home" />
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        <span>Application List</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Application
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default TagSelect;


import React, { Component } from 'react';
import { Button } from 'antd';

class BtnSearch extends Component {
    render() {
        return (
            <div className="btn-search">
                <Button type="primary" htmlType="submit">搜索</Button>
            </div>
        );
    }
}

export default BtnSearch;
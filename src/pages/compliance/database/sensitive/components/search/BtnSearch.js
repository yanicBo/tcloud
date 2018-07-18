import React, { Component } from 'react';
import { Button } from 'antd';

class BtnSearch extends Component {
    render() {
        return (
            <div className="btn-search">
                <Button type="primary" htmlType="submit">搜索</Button>
                <Button onClick={this.props.onReset}>重置</Button>
                <Button type="dashed" onClick={this.props.onChangeHightSearch}>
                    {
                        this.props.isHightSearch ? '取消高级搜索' : '高级搜索'
                    }
                </Button>
            </div>
        );
    }
}

export default BtnSearch;
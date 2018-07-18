import React, { Component } from 'react';
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class TabSearch extends Component {
    render() {
        return (
            <div className="search-tab">
                <RadioGroup
                    defaultValue="select"
                    onChange={this.props.onChangeSearch}
                >
                    <RadioButton value="select">筛选</RadioButton>
                    <RadioButton value="search">搜索</RadioButton>
                </RadioGroup>
            </div>
        );
    }
}

export default TabSearch;
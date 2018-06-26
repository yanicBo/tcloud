import React, { Component } from 'react';
import { Form } from 'antd';

import DefaultSearch from './search/DefaultSearch';
import TextSearch from './search/TextSearch';
import HightSearch from './search/HightSearch';
import BtnSearch from './search/BtnSearch';
import TabSearch from './search/TabSearch';

import { filterRequest } from '../../../../utils';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,        // 是否切换搜索
            isHightSearch: false,   // 是否切换高级搜索
            tagValue: {
                declarationType: [0],
                companyId: [0],
                logisticsStatus: [0],
                depotType: [0]
            }
        };
    }

    // 筛选、搜索切换
    onChangeSearch = (event) => {
        if (event.target.value === 'select') {
            this.setState({ isSearch: false });
            this.setState({ isHightSearch: false });
        } else {
            this.setState({ isSearch: true });
        }
    }

    // 高级搜索
    onChangeHightSearch = () => {
        if (this.state.isHightSearch === false) {
            this.setState({ isHightSearch: true })
        } else {
            this.setState({ isHightSearch: false })
        }
    }

    // 请求列表
    customs_list_fetch = () => {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const filter = filterRequest(values)
                console.log(filter)
                this.props.customs_list_fetch({ name: 'data', value: filter });
            }
        });
    }

    // 全局搜索
    onSubmit = (event) => {
        event.preventDefault();
        this.customs_list_fetch();

    }

    // 重置
    onReset = () => {
        this.setState({
            tagValue: []
        });
        console.log(this.state.tagValue)
        this.props.form.resetFields();
    }

    render() {
        const textSearch = this.state.isSearch ?
            <TextSearch {...this.props} />
            : null;

        const heightSearch = this.state.isHightSearch ? (
            <HightSearch {...this.props} />
        ) : null;
        const btnSearch = this.state.isSearch ? (
            <BtnSearch {...this.props} onChangeHightSearch={this.onChangeHightSearch} onReset={this.onReset} isHightSearch={this.state.isHightSearch} />
        ) : null;

        return (
            <div className="search breadcrumb padding-sm overflow-hidden">
                <TabSearch {...this.props} onChangeSearch={this.onChangeSearch} />
                <Form layout="inline" onSubmit={this.onSubmit}>
                    <DefaultSearch {...this.props} tagValue={this.state.tagValue}/>
                    {textSearch}
                    {heightSearch}
                    {btnSearch}
                </Form>
            </div>
        );
    }
}

export default Search;
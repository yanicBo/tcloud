import React, { Component } from 'react';
import { Form } from 'antd';

import DefaultSearch from './search/DefaultSearch';
import TextSearch from './search/TextSearch';
import HightSearch from './search/HightSearch';
import BtnSearch from './search/BtnSearch';
import TabSearch from './search/TabSearch';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,        // 是否切换搜索
            isHightSearch: false    // 是否切换高级搜索
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

    // 全局搜索
    onSubmit = (event) => {
        event.preventDefault();
        this.props.customsListFetch();
    }

    // 重置
    onReset = () => {
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
                    <DefaultSearch {...this.props}/>
                    {textSearch}
                    {heightSearch}
                    {btnSearch}
                </Form>
            </div>
        );
    }
}

export default Search;
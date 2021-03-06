import React, { Component } from 'react';
import { Form } from 'antd';

import DefaultSearch from './DefaultSearch';
import TextSearch from './TextSearch';
import HightSearch from './HightSearch';
import BtnSearch from './BtnSearch';
import TabSearch from './TabSearch';

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
        this.props.listFetch();
    }

    render() {
        const { isSearch, isHightSearch } = this.state;
        const textSearch = isSearch ?
            <TextSearch {...this.props} />
            : null;

        const heightSearch = isHightSearch ? (
            <HightSearch {...this.props} />
        ) : null;
        const btnSearch = isSearch ? (
            <BtnSearch {...this.props} onChangeHightSearch={this.onChangeHightSearch} isHightSearch={this.state.isHightSearch} />
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
import React, { Component } from 'react';
import { Form } from 'antd';

import DefaultSearch from './DefaultSearch';
import TextSearch from './TextSearch';
import BtnSearch from './BtnSearch';

class Search extends Component {
    // 全局搜索
    onSubmit = (event) => {
        event.preventDefault();
        this.props.listFetch();
    }

    render() {

        return (
            <div className="search breadcrumb padding-sm overflow-hidden">
                <Form layout="inline" onSubmit={this.onSubmit}>
                    <DefaultSearch {...this.props}/>
                    <TextSearch {...this.props} />
                </Form>
            </div>
        );
    }
}

export default Search;
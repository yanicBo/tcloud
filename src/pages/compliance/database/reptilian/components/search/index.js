import React, { Component } from 'react';
import { Form } from 'antd';

import DefaultSearch from './DefaultSearch';

class Search extends Component {

    render() {
        return (
            <div className="search breadcrumb padding-sm overflow-hidden">
                <Form layout="inline" onSubmit={this.onSubmit}>
                    <DefaultSearch {...this.props}/>
                </Form>
            </div>
        );
    }
}

export default Search;
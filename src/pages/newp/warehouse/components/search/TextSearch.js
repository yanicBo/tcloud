import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

import StandardFormRow from '../../../../../components/StandardFormRow';

class TextSearch extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="text-search">
                <StandardFormRow title="仓库名称：">
                    <FormItem>
                        {getFieldDecorator('searchContent')(
                            <Input placeholder="" style={{ width: 344 }} autosize={{ minRows: 2, maxRows: 6 }} />
                        )}
                        <Button type="primary" className="margin-md-left" htmlType="submit">搜索</Button>
                    </FormItem>
                </StandardFormRow>
                
            </div>
        );
    }
}

export default TextSearch;
import React, { Component } from 'react';
import { Form, DatePicker, Select } from 'antd';
const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const Option = Select.Option;

import StandardFormRow from '../../../../../../components/StandardFormRow';
import { getPlatform, getCountry, getTrademark } from '../../../../data';

class HightSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            platform: [],   // 销售平台
            country: [],    // 国家
            trademark: []
        };
        getPlatform().then((result) => {
            this.setState({ platform: result })
        });
        getCountry().then((result) => {
            this.setState({ country: result })
        });
        getTrademark().then((result) => {
            this.setState({ trademark: result })
        });
    }

    handleChange = () => {

    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { platform, country, trademark } = this.state;
        return (
            <div className="height-search">
                <StandardFormRow title="禁售平台：">
                    <FormItem>
                        {getFieldDecorator('salePlatform')(
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="请选择"
                                onChange={this.handleChange}
                            >
                                {
                                    platform.map((item, index) => (
                                        <Option key={index} value={item.id}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="国家：">
                    <FormItem>
                        {getFieldDecorator('country')(
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="请选择"
                                onChange={this.handleChange}
                            >
                                {
                                    country.map((item, index) => (
                                        <Option key={index} value={item.id}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                </StandardFormRow>
                <StandardFormRow title="商标类别：">
                    <FormItem>
                        {getFieldDecorator('trademarkType')(
                            <Select
                                mode="multiple"
                                style={{ width: '100%' }}
                                placeholder="请选择"
                                onChange={this.handleChange}
                            >
                                {
                                    trademark.map((item, index) => (
                                        <Option key={index} value={item.code}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        )}
                    </FormItem>
                </StandardFormRow>
            </div>
        );
    }
}

export default HightSearch;
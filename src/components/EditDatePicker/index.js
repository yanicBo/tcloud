import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';

const FormItem = Form.Item;

import './index.css';


class EditDatePicker extends Component {

    render() {
        const { value, title, format, classs } = this.props;
        return (
            <div className={"tcloud-edit-date-picker" + " " + classs}>
                <FormItem label={title}>
                    <div className="editable-cell">
                        <DatePicker
                            value={value}
                            format={format}
                            onChange={this.handleChange}
                        />
                    </div>
                </FormItem>
            </div>
        );
    }
}

export default EditDatePicker;


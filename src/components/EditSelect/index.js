import React, { Component } from 'react';
import { Form, Icon, Select } from 'antd';
const Option = Select.Option;

const FormItem = Form.Item;

import './index.css';


class EditSelect extends Component {
    state = {
        value: this.props.value,
        editable: false,
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ value });
    }
    check = () => {
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        const { title, classs, name } = this.props;
        console.log(name)
        return (
            <div className={"tcloud-editable" + " " + classs}>
                <FormItem label={title}>
                    <div className="editable-cell">
                        {
                            editable ? (
                                <div>
                                    <Select
                                        defaultValue={ value + ' ' + name }
                                        placeholder="请选择"
                                        onSelect={this.check}
                                    >
                                        <Option value="5549 大鹏海关">5549 大鹏海关</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="tom">Tom</Option>
                                    </Select>
                                    <Icon
                                        type="close-circle"
                                        onClick={this.check}
                                    />
                                </div>
                            ) : (
                                    <div className="font">
                                        {value + ' ' + name || ' '}
                                        <Icon
                                            type="edit"
                                            className="editable-cell-icon"
                                            onClick={this.edit}
                                        />
                                    </div>
                                )
                        }
                    </div>
                </FormItem>
            </div>
        );
    }
}

export default EditSelect;


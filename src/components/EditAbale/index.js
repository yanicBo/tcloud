import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';

const FormItem = Form.Item;

import './index.css';


class EditAbale extends Component {
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
        const { title } = this.props;
        return (
            <div className="tcloud-editable">
                <FormItem label={title}>
                    <div className="editable-cell">
                        {
                            editable ? (
                                <Input
                                    value={value}
                                    onChange={this.handleChange}
                                    onPressEnter={this.check}
                                    suffix={
                                        <Icon
                                            type="check"
                                            className="editable-cell-icon-check"
                                            onClick={this.check}
                                        />
                                    }
                                />
                            ) : (
                                    <div className="font">
                                        {value || ' '}
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

export default EditAbale;


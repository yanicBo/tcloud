import React, { Component } from 'react';
import { Icon, Input } from 'antd';
import './index.css';


class EditableCell extends Component {
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
        this.props.onCellChange();
    }
    edit = () => {
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="tcloud-editable">
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
                                <div style={{ paddingRight: 24, textAlign: 'left' }}>
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
            </div>

        );
    }
}

export default EditableCell;


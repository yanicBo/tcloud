import React, { Component } from 'react';
import { Tag, Icon } from 'antd';
import PropTypes from 'prop-types';
import "./index.css";

const { CheckableTag } = Tag;

class TagSelect extends Component {
    state = {
        expand: false,
    };

    onChange = (item) => {
        const { onChange, name, values, isMulti } = this.props;
        let array = [];
        let index = values.indexOf(item.id);
        if (isMulti && item.id !== 0) {
            array = values.filter((value) => value !== 0);
            if (index > -1) {
                array.splice(index, 1);
            } else {
                array.push(item.id);
            }
        } else {
            array = [item.id];
        }
        if (onChange) {
            onChange(array, name);
        }
    };

    handleExpand = () => {
        this.setState({
            expand: !this.state.expand,
        });
    };

    render() {
        const { expand } = this.state;
        const { expandable, values, datas } = this.props;
        return (

            <div className="paved-selected">
                {
                    datas.map((item, index) =>
                        <CheckableTag
                            checked={values.indexOf(item.id) > -1 ? true : false}
                            key={index}
                            title={item.title || item.name}
                            onChange={() => this.onChange(item)}>
                            {item.name}
                        </CheckableTag>
                    )
                }
                {expandable && (
                    <a className={styles.trigger} onClick={this.handleExpand}>
                        {expand ? '收起' : '展开'} <Icon type={expand ? 'up' : 'down'} />
                    </a>
                )}
            </div>
        );
    }
}

TagSelect.propTypes = {
    expandable: PropTypes.bool,
    values: PropTypes.array.isRequired,
    datas: PropTypes.array.isRequired,
    isMulti: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}
export default TagSelect;


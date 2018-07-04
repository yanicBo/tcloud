import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../../../../components/Modal';
import Detail from '../detail';
import Popconfirm from '../../../../../components/Popconfirm';

class Options extends Component {

    render() {
        return (
            <div className="options-style">
                <div className="inline-block">
                    <Modal
                        btnName="编辑"
                        title="编辑仓库关系"
                        component={(<Detail {...this.props} />)}
                        btnType="font"
                        {...this.props}
                    />
                </div>
                <div className="inline-block">
                    <Popconfirm
                        btnName="启用"
                        text="确定要启用该项?"
                    />
                </div>
            </div>
        );
    }
}

export default Options;
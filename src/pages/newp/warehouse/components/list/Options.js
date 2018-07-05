import React, { Component } from 'react';
import { message } from 'antd';
import Modal from '../../../../../components/Modal';
import Detail from '../detail';
import Popconfirm from '../../../../../components/Popconfirm';
import { req } from '../../../../../utils/http';
require('../../../mock/detail')

class Options extends Component {
    onConfirm = (e) => {
        req.http('newp/detail', {}).then((data) => {
            message.success('操作成功.')
        })
    };

    render() {
        const { item } = this.props;
        const btnName = item.state === 1 ? "禁用" : "启用";
        return (
            <div className="options-style">
                <div className="inline-block">
                    <Modal
                        btnName="编辑"
                        title="编辑仓库关系"
                        component={(<Detail />)}
                        btnType="font"
                    />
                </div>
                <div className="inline-block">
                    <Popconfirm
                        btnName={btnName}
                        text={`确定要${btnName}该项?`}
                        onConfirm={this.onConfirm}
                    />
                </div>
            </div>
        );
    }
}

export default Options;
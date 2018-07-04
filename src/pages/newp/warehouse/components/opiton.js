import React, { Component } from 'react';
import Modal from '../../../../components/Modal';
import Detail from './detail';

class Option extends Component {
    render() {
        return (
            <div className="option">
                <div className="pull-right">
                    <Modal 
                        btnName="新增仓库" 
                        title="新增仓库关系"
                        html={(<Detail/>)}
                        type="plus"
                    />
                </div>
            </div>
        );
    }
}

export default Option;
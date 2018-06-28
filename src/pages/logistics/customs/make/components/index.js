import React, { Component } from 'react';

import Tabs from '../../../../../components/Tab';
import Campany from './company';

class App extends Component {
    onCellChange = (key, name) => {

    }
    render() {
        const tab = [
            {
                id: 1,
                name: "公司资料"
            }, {
                id: 2,
                name: "海关资料"
            }, {
                id: 3,
                name: "合同资料"
            }, {
                id: 4,
                name: "核对清单"
            }
        ];

        return (
            <div className="breadcrumb">
                <Tabs tab={tab} />
                <div className="padding-lg-bottom">
                    <Campany/>
                </div>

            </div>
        );
    }
}

export default App;
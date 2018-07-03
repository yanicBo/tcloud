import React, { Component } from 'react';

import Tabs from '../../../../../components/Tab';
import Campany from './company';
import Customs from './Customs';
import Contract from './Contract';

class App extends Component {
    render() {
        const tab = [
            {
                id: 1,
                name: "公司资料",
                children: (<Campany/>)
                
            }, {
                id: 2,
                name: "海关资料",
                children: (<Customs/>)
            }, {
                id: 3,
                name: "合同资料",
                children: (<Contract/>)
            }, {
                id: 4,
                name: "核对清单",
                children: "4444444"
            }
        ];

        return (
            <div className="breadcrumb">
                <Tabs tab={tab}/>
            </div>
        );
    }
}

export default App;
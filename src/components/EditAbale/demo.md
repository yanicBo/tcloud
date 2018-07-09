
### 参数说明

|参数|说明|类型|默认值|
|-|-|-|-|
|value|表单值|String|-|
|onCellChange|确认回调函数|Function|Function(String[id], String[name])|


### 引入

```

import React, { Component } from 'react';
import { message } from 'antd';
import EditableCell from '../components/EditableCell';
import { req } from '../utils';

```

### 组件

```

class App extends Component {

    // 确认回调函数
    onCellChange = (id, name) => {
        req.http('customs/editNumber', {id: id}).then(data => {
            message.success('操作成功.');
            return (value) => {
                const dataSource = [...this.state.dataSource];
                const target = dataSource.find(item => item.id === id);
                if (target) {
                    target[name] = value;
                    this.setState({ dataSource });
                }
            };
        })
        
    }
    render() {
        const { visible } = this.props;
        return (
            <EditableCell
                value={text}
                onCellChange={() => this.onCellChange(record.id, 'customsNumber')}
            />
        );
    }
}

export default App;

```
----
btnName:按钮名称
component: 组件 
title：弹窗title
iconType: 按钮图标
btnType：按钮样式  "button"按钮, "font"文字
----

```jsx

import Modal from '../../../../components/Modal';
import Detail from './detail';

<Modal 
    btnName="新增仓库" 
    title="新增仓库关系"
    component={(<Detail {...this.props}/>)}
    iconType="plus"
    btnType="button"
/>

```
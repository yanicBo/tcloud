import React, { Component } from 'react';
import { Form, Tree, Icon } from 'antd';
const TreeNode = Tree.TreeNode;

class Organize extends Component {

    render() {
        return (
            <div className="breadcrumb padding-sm organize-left">
                <div className="organize-left-title">
                    <span></span>公司目录
                </div>
                <div className="organize-left-content">
                    <div className="title">组织架构</div>
                    <div className="content">
                        <Tree
                            showIcon
                            defaultExpandAll
                            defaultSelectedKeys={['0-0-0']}
                        >
                            <TreeNode icon={<Icon type="folder" />} title="深圳市有棵树科技股份有限公司" key="0-0">
                                <TreeNode
                                    icon={({ selected }) => (
                                        <Icon type={selected ? 'folder' : 'folder-open'} />
                                    )}
                                    title="leaf"
                                    key="0-0-1"
                                />
                            </TreeNode>
                        </Tree>
                    </div>
                </div>
            </div>
        );
    }
}

export default Organize;
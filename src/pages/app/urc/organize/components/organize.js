import React, { Component } from 'react';
import { Form, Tree, Icon } from 'antd';
const TreeNode = Tree.TreeNode;

import { organize_data } from '../../../data';
import { page } from '../../../../../configs';


class Organize extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autoExpandParent: false,
            selectedKeys: [],
            organize: [],
            expandedKeys: []
        };
        organize_data().then((result) => {
            var selectedKeys = [result[0].dingOrgId];
            this.setState({ organize: result });
            this.setState({selectedKeys: selectedKeys});
            this.setState({expandedKeys: selectedKeys});
        });
    }

    // 展开/收起节点时触发
    onExpand = (expandedKeys,) => {
        this.setState({
            expandedKeys: expandedKeys,
            autoExpandParent: false,
        });

    }

    // 点击树节点触发
    onSelect = (selectedKeys) => {
        console.log(selectedKeys)
        var pageNumber = page.defaultCurrent;
        var pageData = page.defaultPageSize;
        // this.setState({selectedKeys: selectedKeys});
        this.props.listFetch(pageNumber, pageData, selectedKeys[0])
    }

    renderTreeNodes = (data) => {
        return data.map((item, index) => (
            <TreeNode icon={
                ({ selected }) => (
                    <Icon type={selected ? 'folder-open' : 'folder'} />
                )
            } title={item.orgName} key={item.dingOrgId} dataRef={item}>
                {this.renderTreeNodes(item.subOrg)}
            </TreeNode>
        ))
    }

    render() {
        const { autoExpandParent, selectedKeys, organize, expandedKeys } = this.state;
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
                            onExpand={this.onExpand}
                            autoExpandParent={autoExpandParent}
                            onSelect={this.onSelect}
                            selectedKeys={selectedKeys}
                            expandedKeys={expandedKeys}
                        >
                            {this.renderTreeNodes(organize)}
                        </Tree>
                    </div>
                </div>
            </div>
        );
    }
}

export default Organize;
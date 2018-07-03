import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import { breadcrumbNameMap } from './map';

class Mbx extends Component {
    componentWillMount(){
        const pathname = location.pathname;
        document.title = breadcrumbNameMap[pathname];
    }
    render() {
        const pathname = location.pathname;
        const pathSnippets = pathname.split('/').filter(i => i);
        return (
            <div className="breadcrumb padding-md-left padding-md-right padding-sm-top padding-sm-bottom">
                <Breadcrumb separator="/">
                    <Breadcrumb.Item>
                        <Link to="/"><Icon type="home" /></Link>
                    </Breadcrumb.Item>
                    {
                        pathSnippets.map((item, index) => {
                            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
                            document.title = breadcrumbNameMap[url];
                            return (
                                <Breadcrumb.Item key={url}>
                                    <Link to={url}>
                                        {breadcrumbNameMap[url]}
                                    </Link>
                                </Breadcrumb.Item>
                            )

                        })
                    }
                </Breadcrumb>
            </div>
        );
    }
}

export default Mbx;
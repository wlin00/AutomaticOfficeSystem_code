import React, { useState, useEffect, useContext } from 'react'
import { Spin, Typography, Table, Input, Tag, Button, Modal, message, Select } from 'antd'
import UserContext from '../../../../../../context/user/userContext'
import Spinner from '../../../../../laout/Spinner'
import { SyncOutlined } from '@ant-design/icons';

import '../Table1/Table1.scss'



const Table1 = (props) => {

    //基本信息
    const imgUser = require('../../../../../../pic/27.png')
    const { Text } = Typography
    const { Search } = Input

    //实例化context
    const userContext = useContext(UserContext)
    const { setMode, mode, getSearchTable, _table, _count, getTable, table = [], count = 0, getDutyList, duty = [], loading } = userContext

    useEffect(() => {
        getTable(1, 5, 1) //默认获取第一页数据
        getDutyList()   //拉取职务信息外键

    }, [])


    //分页
    const [currentPage, setCurrentPage] = useState(1)
    const paginationProps = {
        showSizeChanger: false,
        showQuickJumper: false,
        showTotal: () => `共${count}条`,
        pageSize: 5,
        current: currentPage,
        total: count,
        onShowSizeChange: (current, pageSize) => changePageSize(pageSize, current),
        onChange: (current) => changePage(current),
    }

    const changePageSize = (a, b) => {
        console.log(a, b)
    }

    const changePage = (v) => {
        console.log(v)
        setCurrentPage(v)
        getTable(1, 5, v) //分页请求，分页按页码加载
    }

    // const paginationProps = {
    //     showSizeChanger: true,
    //     showQuickJumper: false,
    //     showTotal: () => `共${totals}条`,
    //     pageSize: this.state.pageSize,
    //     current: page.pageNum,
    //     total: page.total,
    //     onShowSizeChange: (current, pageSize) => this.changePageSize(pageSize, current),
    //     onChange: (current) => this.changePage(current),
    // }




    const columns = [
        {
            title: '姓名',
            dataIndex: 'username',
            key: 'username',
            className: 'antd_name',
        },
        {
            title: '头像',
            dataIndex: 'img',
            key: 'img',
            render: src => <span>{<img className='Table1-img' src={src} alt='pic' />}</span>,
        },
        {
            title: '联系方式',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'mail',
            key: 'mail',
        },
        {
            title: '职务',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = 'geekblue';
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
    ];

    const data = [];
    if (table.length > 0) {
        table.forEach((item, index) => {
            data.push({
                key: item.id,
                username: item.name ? item.name : '未填写',
                img: item.portraits.slice(24),
                phone: item.tel ? item.tel : '未填写',
                mail: item.email ? item.email : '未填写',
                tags: item.id && item.duty && duty.length > 0 ? [`${((duty[0].dutyName))}`] : ['未填写']
            })
        })
    }

    //处理表头兼容性问题
    let node = document.querySelector('.antd_name>span>div>.ant-table-column-title')
    if (node) {
        node.innerText = '姓名'
    }

    if (loading) {
        return <Spin className="myLoading" tip="加载中..." size='large'>
            <div className='Table1'>
                <div className='Table1-table' style={{ marginBottom: '10px' }}>
                    <Table columns={columns} dataSource={data} pagination={paginationProps} />
                </div>
            </div>
        </Spin>
    }
    return (
        <div className='Table1'>
            <div className='Table1-table' style={{ marginBottom: '10px' }}>
                <Table columns={columns} dataSource={data} pagination={paginationProps} />
            </div>
        </div>
    )
}

export default React.memo(Table1)





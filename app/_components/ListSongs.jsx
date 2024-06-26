'use client'
import { CheckCircleFilled } from '@ant-design/icons';
import { Button, ConfigProvider, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React, { useEffect, useState } from 'react';

const columns = [
    {
        title: '#',
        dataIndex: 'key',
        key: 'key',
        width: '2%'
    },
    {
        title: 'Title',
        dataIndex: 'Title',
        key: 'Title',
        width: '30%'
    },
    {
        title: 'Album',
        dataIndex: 'Album',
        key: 'Album',
        width: '30%'
    },
    {
        title: 'Date added',
        dataIndex: 'DateAdded',
        key: 'DateAdded',
        width: '20%'
    },
    {
        title: 'Duration',
        dataIndex: 'Duration',
        key: 'Duration',
        width: '10%'
    },
]

let data = [
    {
        key: '1',
        Title: 'John Brown',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '2',
        Title: 'Jim Green',
        Album: 42,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '3',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '4',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '5',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '6',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '7',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '8',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '9',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '10',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '11',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '12',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '13',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
    {
        key: '14',
        Title: 'Joe Black',
        Album: 32,
        DateAdded: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' }),
        Duration: ((time) => {
            const sec = time % 60
            const min = parseInt(time / 60)
            return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0')
        })(100)
    },
];

export default function ListSong({ showHeader, limit }) {
    const [displayData, setDisplayData] = useState([])
    useEffect(() => {
        setDisplayData(limit && typeof limit == 'number' ? data.slice(0, 5) : data)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <ConfigProvider theme={{
            components: {
                Table: {
                    colorBgContainer: 'transparent',
                    borderColor: 'none',
                    colorText: '#ccc',
                    headerColor: '#979698',
                    headerSplitColor: 'transparent',
                    cellFontSize: 15,
                }
            },
            token: {

            }
        }}>
            <Table columns={columns} pagination={false} showHeader={showHeader} dataSource={displayData} >
            </Table>
        </ConfigProvider>
    )
}
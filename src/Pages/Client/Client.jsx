import * as React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from '../../Components/layout/Header/Header';
import { dataTable } from '../../Data/Data';
import './Client.scss'

export default function Client() {
    const [data, setData] = useState(dataTable)

    const columns = [
        {
            name: "Id",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "Phone",
            selector: row => row.phone,
            sortable: true
        },
        {
            name: "Comment",
            selector: row => row.comment,
            sortable: true
        },
        {
            name: "Balans",
            selector: row => row.balans,
            sortable: true
        },

    ];

    const [filter, setFilter] = useState(data)

    const filterHandler = (e) => {
        const values = e.target.value.toLowerCase()
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(values)
        })
        setFilter(newData)
    }
    const tableStyle = {
        headCells: {
            style: {
                fontSize: "1.2rem",
                fontWeight: "600",
                backgroundColor: "#1B1F54",
                color: "#fff",
            }
        }
    }
    return (
        <section className='client'>
            <Header />
            <div className="client__left"></div>
            <div className='client__right'>
                <div className="client__right__container">
                    <div className='client__right__container__inp'>
                        <span>Search:</span>
                        <input type="text" onChange={filterHandler} />
                    </div>
                    <DataTable
                        customStyles={tableStyle}
                        columns={columns}
                        data={filter}
                        fixedHeader
                        pagination
                        highlightOnHover
                    ></DataTable>
                </div>
            </div>
        </section>
    )
}

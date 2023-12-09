import React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import "./Finance.scss"
import Header from '../../Components/layout/Header/Header'

export const Finance = () => {
    const [filterText, setFilterText] = useState('');
    const [reg, setReg] = useState(false)
    const [list, setList] = useState(false)

    const columns = [
        {
            name: 'First Name',
            selector: 'firstName',
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: 'lastName',
            sortable: true,
        },
        {
            name: 'Age',
            selector: 'age',
            sortable: true,
        },
    ];

    const data = [
        { id: 1, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 2, firstName: 'Jane', lastName: 'Doe', age: 25 },
        { id: 3, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 4, firstName: 'Jane', lastName: 'Doe', age: 25 },
        { id: 5, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 6, firstName: 'Jane', lastName: 'Doe', age: 25 },
        { id: 7, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 8, firstName: 'Jane', lastName: 'Doe', age: 25 },

        { id: 9, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 10, firstName: 'Jane', lastName: 'Doe', age: 25 },
        { id: 11, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 12, firstName: 'Jane', lastName: 'Doe', age: 25 },
        { id: 13, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 14, firstName: 'Jane', lastName: 'Doe', age: 25 },
        { id: 15, firstName: 'John', lastName: 'Doe', age: 30 },
        { id: 16, firstName: 'Jane', lastName: 'Doe', age: 25 },
    ];

    const filteredData = data.filter(item =>
        `${item.firstName} ${item.lastName} ${item.age}`.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div className="finance">
            <Header />
            <div className="finance__left"></div>
            <div className="finance__right">
                <div className="finance__right__container">
                    <ul className={list ? "finance__right__container__list activList" : "finance__right__container__list"}>
                        <button onClick={() => {
                            setList(!list)
                        }}>
                            <i className="bi bi-arrow-left-right"></i>
                        </button>
                        <li className='finance__right__container__list__item'>
                            <div className='finance__right__container__list__item__inp'>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                />
                            </div>
                        </li>
                        <p onClick={() => {
                            setList(!list)
                        }}>
                            <i className="bi bi-x-lg"></i>
                        </p>
                    </ul>
                    <div className='table'>
                        <DataTable
                            columns={columns}
                            data={filteredData}
                            pagination
                            paginationPerPage={5}
                            paginationRowsPerPageOptions={[5, 10, 20]}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}

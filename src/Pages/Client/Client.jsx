import * as React from 'react'
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import Header from '../../Components/layout/Header/Header';
import './Client.scss'

export default function Client() {
    const [filterText, setFilterText] = useState('');


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
        <section className='client'>
            <Header />
            <div className="client__left"></div>
            <div className='client__right'>
                <div className="client__right__container">
                    <div className='client__right__container__inp'>
                        <input
                            type="text"
                            placeholder="Search"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </div>
                    <DataTable
                        columns={columns}
                        data={filteredData}
                        pagination
                        paginationPerPage={5}
                        paginationRowsPerPageOptions={[5, 10, 20]}
                    />
                </div>
            </div>
        </section>
    )
}

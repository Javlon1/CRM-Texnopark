import React, { useState } from 'react'
import "./Profil.scss"
import DataTable from 'react-data-table-component';
import Header from '../../Components/layout/Header/Header'

export default function Profil() {
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
        <section className='profil'>
            <Header />
            <div className="profil__left"></div>
            <div className='profil__right'>
                <div className="profil__right__container">

                    <div className="profil__right__container__info">
                        <div className='profil__right__container__info__details'>
                            <span className='profil__right__container__info__details__name'>
                                <b>Mukhammadjonov Javlon</b>
                                <p>{`[id:${632}]`}</p>

                                <span>Telefon:</span>
                                <p>+998 90 525 12 43</p>
                            </span>
                            <span className='profil__right__container__info__details__btn'>
                                <button>
                                    <i className="bi bi-pen"></i>
                                </button>
                                <button>
                                    <i className="bi bi-chat-left-dots"></i>
                                </button>
                                <button>
                                    <i className="bi bi-trash3"></i>
                                </button>
                            </span>
                        </div>

                        <div className='profil__right__container__info__btn'>
                            <button>Izox yozish</button>
                            <button>To‘lov qabul qilish</button>
                        </div>
                    </div>

                    <div className='profil__right__container__izox'>
                        <h2>Izoxlar</h2>
                        <ul>
                            <li>
                                
                            </li>
                        </ul>
                    </div>

                    <div className='profil__right__container__table'>
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
        </section>
    )
}

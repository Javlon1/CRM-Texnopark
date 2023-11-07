import * as React from 'react'
import './Lid.scss'
import Header from '../../layout/Header/Header'


export default function Lid() {
    return (
        <section className='lid'>
            <Header />
            <div className="lid__left"></div>
            <div className="lid__right">
                <div className="lid__right__container">
                    <h1>lid</h1>
                </div>
            </div>

        </section>
    )
}

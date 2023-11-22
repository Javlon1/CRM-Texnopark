import React from 'react'
import "./Profil.scss"
import Header from '../../Components/layout/Header/Header'

export default function Profil() {
    return (
        <section className='profil'>
            <Header />
            <div className="profil__left"></div>
            <div className='profil__right'>
                <div className="profil__right__container">
                    <div className="profil__right__container__info">
                        <b>javlon</b>
                        <p>{`[id:${632}]`}</p>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

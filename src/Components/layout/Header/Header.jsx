import * as React from 'react'
import './Header.scss'


export default function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className="header__container__left">
                    <h1>left</h1>
                </div>
                <div className="header__container__right">
                    <h1>right</h1>
                </div>
            </div>
        </header>
    )
}

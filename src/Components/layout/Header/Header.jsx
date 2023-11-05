import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { HeaderData } from '../../../Data/Data'
import logo from "../../../Assets/Img/logo.png"
import Language from './Language/Language'
import './Header.scss'


export default function Header() {

    const { lan, menu, setMenu } = React.useContext(Context)
    const [headerData] = React.useState(HeaderData)
    const [open, setOpen] = React.useState(false)

    setMenu(headerData[menu - 1].id)

    return (
        <header className='header'>

            <div className='header__leftbar'>
                <nav className='header__leftbar__nav'>
                    <div className='header__leftbar__nav__img'>
                        <Link to="/"
                            onClick={() => {
                                sessionStorage.setItem('menu', 1)
                                setMenu(1)
                                setOpen(false)
                            }}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className="header__leftbar__nav__list">
                        {
                            HeaderData?.map((e) => (
                                <Link key={e.id} className={`${menu === e.id ? 'header__leftbar__nav__list__item active' : 'header__leftbar__nav__list__item'}`} to={e.link}
                                    onClick={() => {
                                        setMenu(e.id)
                                        setOpen(e.dropdown ? !open : false)
                                        sessionStorage.setItem('menu', e.id)
                                    }}>
                                    <li>
                                        <span href="">
                                            <i className={e.icon}></i>
                                            <span>{e[`nav_${lan}`]}</span>
                                        </span>
                                        <ul className={e.dropdown && open ? ' dropdown open__menu' : 'dropdown'}>
                                            {
                                                e.dropdown?.map((i) => (
                                                    <li className='dropdown__item' key={i.id}>
                                                        <Link to={i.link}>
                                                            {i[`nav_${lan}`]}
                                                        </Link>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </nav>
            </div>

            <div className="header__topbar">
                <div className="container">
                    <div className="container__left">
                        <h1>left</h1>
                    </div>
                    <div className="container__right">
                        <button className='container__right__icon'><i className="bi bi-bell-fill"></i></button>
                        <button className='container__right__icon'><i className="bi bi-person-fill"></i></button>
                        <Language />
                        <button className='container__right__btn'>+ To‘lov qo‘shish</button>
                    </div>
                </div>
            </div>

        </header>
    )
}

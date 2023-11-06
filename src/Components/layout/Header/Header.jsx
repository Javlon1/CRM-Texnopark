import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { HeaderData } from '../../../Data/Data'
import logo from "../../../Assets/Img/logo.png"
import Language from './Language/Language'
import './Header.scss'
import Btn from '../../Ui/Btn/Btn'


export default function Header() {

    const { lan, menu, setMenu } = React.useContext(Context)
    const [drop, setDrop] = React.useState(1)
    const [notification, setNotification] = React.useState(false)
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
                                                    <li className={drop === i.id ? 'dropdown__item act-drop' : 'dropdown__item'}
                                                        key={i.id}
                                                        onClick={() => {
                                                            setDrop(i.id)
                                                        }}>
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
                <div className="header__topbar__container">
                    <div className="header__topbar__container__left">
                        <h1>left</h1>
                    </div>
                    <div className="header__topbar__container__right">
                        <div className='header__topbar__container__right__notification'>
                            <button className='header__topbar__container__right__icon'
                                onClick={() => {
                                    setNotification(!notification)
                                }}
                            >
                                <i className="bi bi-bell-fill"></i>
                            </button>
                            <ul className={notification ? "header__topbar__container__right__notification__list act-noti" : "header__topbar__container__right__notification__list"}>
                                <div className='header__topbar__container__right__notification__list__btn'
                                    onClick={() => {
                                        setNotification(false)
                                    }}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </div>
                                <li className="header__topbar__container__right__notification__list__item">
                                    <h1>notification</h1>
                                </li>
                            </ul>
                        </div>
                        <Link to="/profil" className='header__topbar__container__right__icon'>
                            <i className="bi bi-person-fill"></i>
                        </Link>
                        <Language />
                        <Btn text='+ To‘lov qo‘shish' />
                    </div>
                </div>
            </div>

        </header>
    )
}

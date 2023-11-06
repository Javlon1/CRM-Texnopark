import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { HeaderData, NotificationData, rateData } from '../../../Data/Data'
import logo from "../../../Assets/Img/logo.png"
import Language from './Language/Language'
import './Header.scss'
import Btn from '../../Ui/Btn/Btn'
import usd from "../../../Assets/Img/usd.png"
import uzs from "../../../Assets/Img/uzs.png"

export default function Header() {

    const { lan, menu, setMenu } = React.useContext(Context)
    const [drop, setDrop] = React.useState(1)
    const [notification, setNotification] = React.useState(false)
    const [headerData] = React.useState(HeaderData)
    const [notificationData] = React.useState(NotificationData)
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
                    {
                        rateData?.map((e) => (
                            <div key={e.id} className="header__topbar__container__rate">
                                <div className="header__topbar__container__rate__items">
                                    <b>{e.usd}</b>
                                    <span>
                                        <img src={usd} alt="" />
                                    </span>
                                </div>
                                <span className='arrow'>
                                    <i className="bi bi-arrow-left-right"></i>
                                </span>
                                <div className="header__topbar__container__rate__items">
                                    <b>{e.uzs}</b>
                                    <span>
                                        <img src={uzs} alt="" />
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                    <div className="header__topbar__container__right">
                        <div className='header__topbar__container__right__notification'>
                            <button className='header__topbar__container__right__icon'
                                onClick={() => {
                                    setNotification(!notification)
                                }}
                            >
                                <p className='header__topbar__container__right__icon__counter'>{notificationData.length}</p>
                                <i className="bi bi-bell-fill"></i>
                            </button>
                            <div className={notification ? "header__topbar__container__right__notification__list act-noti" : "header__topbar__container__right__notification__list"}>
                                <div className='header__topbar__container__right__notification__list__btn'>
                                    <span
                                        onClick={() => {
                                            setNotification(false)
                                        }}
                                    >
                                        <i className="bi bi-x-lg"></i>
                                    </span>
                                </div>
                                <ul className='header__topbar__container__right__notification__list__info'>
                                    {
                                        notificationData?.map((e, i) => (
                                            <li key={i} className="header__topbar__container__right__notification__list__info__item">
                                                <div className='cmc'>
                                                    <b className='cmc__b'>
                                                        {i + 1}
                                                    </b>
                                                    <span className='cmc__span'>
                                                        <h6 className='cmc__span__title'>
                                                            {e[`title_${lan}`]}
                                                        </h6>
                                                        <p className='cmc__span__text'>
                                                            {e[`text_${lan}`]}
                                                        </p>
                                                    </span>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
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

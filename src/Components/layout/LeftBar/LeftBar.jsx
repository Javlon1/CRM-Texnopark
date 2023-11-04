import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { HeaderData } from '../../../Data/Data'
import logo from "../../../Assets/Img/logo.png"
import './LeftBar.scss'


export default function LeftBar() {

    const { lan, menu, setMenu } = React.useContext(Context)
    const [headerData] = React.useState(HeaderData)
    const [open, setOpen] = React.useState(false)

    setMenu(headerData[menu - 1].id)

    return (
        <section className='leftbar'>
            <nav className='leftbar__nav'>
                <div className='leftbar__nav__img'>
                    <Link to="/"
                        onClick={() => {
                            sessionStorage.setItem('menu', 1)
                            setMenu(1)
                        }}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="leftbar__nav__list">
                    {
                        HeaderData?.map((e) => (
                            <li key={e.id} className={`${menu === e.id ? 'leftbar__nav__list__item active' : 'leftbar__nav__list__item'}`}
                                onClick={() => {
                                    setMenu(e.id)
                                    setOpen(e.dropdown ? !open : false)
                                    sessionStorage.setItem('menu', e.id)
                                }}>
                                <Link to={e.link}>
                                    <i className={e.icon}></i>
                                    <span>{e[`nav_${lan}`]}</span>
                                </Link>
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
                        ))
                    }
                </ul>
            </nav>
        </section>
    )
}
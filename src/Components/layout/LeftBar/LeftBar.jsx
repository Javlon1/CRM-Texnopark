import * as React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context/Context'
import { HeaderData } from '../../../Data/Data'
import logo from "../../../Assets/Img/logo.png"
import "./LeftBar.scss"

export default function LeftBar() {

    const { lan, menu, setMenu } = React.useContext(Context)
    const [drop, setDrop] = React.useState(1)
    const [open, setOpen] = React.useState(false)

    return (
        <div className='leftbar'>
            <nav className='leftbar__nav'>
                <div className='leftbar__nav__img'>
                    <Link to="/"
                        onClick={() => {
                            sessionStorage.setItem('menu', 1)
                            setMenu(1)
                            setOpen(false)
                        }}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="leftbar__nav__list">
                    {
                        HeaderData?.map((e) => (
                            <Link key={e.id} className={`${menu === e.id ? 'leftbar__nav__list__item active' : 'leftbar__nav__list__item'}`} to={e.link}
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
    )
}
import * as React from 'react'
import './Btn.scss'
import { Link } from 'react-router-dom';
import { Context } from '../../../Context/Context';


const Btn = ({ text }) => {
    const { setMenu } = React.useContext(Context)

    return (
        <Link to="/finance" className='allBtn'
            onClick={() => {
                console.log(4);
                setMenu(4)
                sessionStorage.setItem('menu', 4)
            }}
        >
            {text}
        </Link>
    )
}

export default Btn;
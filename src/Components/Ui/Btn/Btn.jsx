import * as React from 'react'
import './Btn.scss'
import { Link } from 'react-router-dom';


const Btn = ({text}) => { 

    return(
        <Link to="/finance" className='allBtn'>{text}</Link>
    )
}

export default Btn;
import { Outlet } from 'react-router'
import React from 'react'
import '../styles/root.css'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'

//https://squareup.com/appointments/book/0zl01bh8pqfscm/LY99XH9365HYB/start

const Root = () => {
    return(
        <div id='root-body'>
            <div className='header'>
                <Link to='/home'>Home</Link>
                <Link  to='/services'>Services</Link>
                <Link  to='/home'>Book now!</Link>
            </div>
            <div className='child'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default Root

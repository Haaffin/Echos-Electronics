import { Outlet, Navigate } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/root.css'

const Root = () => {
    return(
        <div id='root-body'>
            <div className='header'>
                Root
                <a href='/sgjkd'>Test</a>
            </div>
            <div className='child'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Root

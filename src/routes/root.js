import { Outlet } from 'react-router'
import '../styles/root.css'

export default function Root() {
    return(
        <>
        <div id='root-body'>
            <div className='header'>
                Root
                <a href='/sgjkd'>Test</a>
            </div>

            <div className='child'>
                <Outlet/>
            </div>
        </div>
        </>
    )
}
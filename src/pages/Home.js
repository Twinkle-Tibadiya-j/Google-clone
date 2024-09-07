import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import PersonIcon from '@mui/icons-material/Person';
import "./Home.css"
import Search from './SearchInput';

function Home() {
  return (
    <div className="home">
        <div className="home_header">
            <div className="home_headerLeft">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="home_headerRight">
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
                <PersonIcon/>
            </div>
        </div>
        <div className="home_body">
            <img src="https://images.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="logo"></img>

            <div className='home_inputContainer'>
                <Search/>
            </div>
        </div>
    </div>
  )
}

export default Home
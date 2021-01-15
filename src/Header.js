import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from "./StateProvider";
import { auth } from './Firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return (
        <div className="header__main">
                <Link to="/">
                <img className="header__logo" src="/amazon-logo-brand-company.jpg" alt="Amazon Logo" />
                </Link>
            <div className="header__search">
                <input
                className="header__searchIn" 
                type="text" />
                <SearchIcon className="header__searchIcon" />
            <div className="header__nav">
            <Link to={!user && '/login'} className="link">
                <div onClick={handleAuthenticaton}className="header__navoption">
                    <span className="header__optionOne" >{!user ? 'Guest' : user.email}</span>
                    <span className="header__optionTwo">{user ? 'SignOut' : 'SignIn'}</span>
                    </div>
                    </Link>
                <div className="header__navoption">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">Orders</span>
                </div>
                <div className="header__navoption">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>
                <Link to="/checkout" className="link"> 
                <div className="header__shopbasket">   
                    <ShoppingBasketIcon />                
                    <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link> 
            </div>
        </div>
    </div>
    )
}

export default Header

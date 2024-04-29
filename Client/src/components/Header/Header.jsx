import NavBar from "./Navbar"
import Billboard from '../common/Billboard'
import SearchBar from "./SearchBar"
import AuthControls from "./AuthControls"
import styles from './header.module.css'
import ShoppingCart from "./ShoppingCart"

const Header = () => {
  return (
    <div >
      <div className={styles.navBar} >
        <NavBar/>
        <SearchBar/>
        <AuthControls/>
        <ShoppingCart/>
      </div>
      <Billboard/>
    </div>
        
  )
}

export default Header
import styles from './header.module.css'
import NavBar from '../../NavBar/NavBar'
import BillBoard from '../../BillBoard/BillBoard'

const Header = () => {
  return (
    <>
    <NavBar/>
    <BillBoard products={{}} />
    </>
  )
}

export default Header
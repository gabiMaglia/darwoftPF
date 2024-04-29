import Logo from '../common/Logo'
import styles from './navbar.module.css'


const Navbar = () => {
  const navigation = [
    { name: 'Celulares', href: '#', current: true },
    { name: 'Electronica', href: '#', current: false },
    { name: 'Commputacion', href: '#', current: false },
   
  ]
  return (
    <div className={styles.navBar}>
      <Logo/>
      <ul className={styles.links}>
        { navigation.map((navlink, index) => (
          <li key={index}>
            <a href={navlink.href}>{navlink.name}</a>
          </li>
        )) }
      </ul>
    </div>
  )
}

export default Navbar
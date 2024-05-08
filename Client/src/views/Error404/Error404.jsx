import { useNavigate } from "react-router-dom";
import OutlinedButton from '../../componenets/ui/OutlinedButton/OutlinedButton'
import Img from '../../componenets/ui/Img/Img'
import sadDino from '../../assets/sadDino.gif'

import styles from './error.module.css'

const Error404 = () => {
  const navigate = useNavigate()
  const handleReturn = ()=> {
    navigate('/')
  }

  return (
    <section className={styles.container}>
      <h2>OPPS....</h2>
      <Img img={sadDino} alt={404} />
      <h3>Error 404</h3>
      <p>Pagina no encontrada</p>
      <OutlinedButton onClick={handleReturn} > Volver A la pagina principal</OutlinedButton>
    </section>
  )
}

export default Error404
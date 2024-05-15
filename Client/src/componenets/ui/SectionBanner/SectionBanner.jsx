import { useSelector } from 'react-redux'
import styles from './sectionBanner.module.css'

const SectionBanner = () => {
  const title = useSelector(state => state.products.banerDescription)
  return (
    <div className={styles.sectionBanner}> <h2>{title}</h2> </div>
  )
}

export default SectionBanner
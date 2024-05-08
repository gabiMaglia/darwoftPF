import styles from './sectionBanner.module.css'

const SectionBanner = ({title}) => {
  return (
    <div className={styles.sectionBanner}> <h2>{title}</h2> </div>
  )
}

export default SectionBanner
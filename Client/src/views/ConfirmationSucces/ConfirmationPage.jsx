import { Link } from 'react-router-dom'
import OutlinedButton from '../../componenets/ui/OutlinedButton/OutlinedButton'
import PATH_ROUTES from '../../helpers/routes.helper'

import styles from './confirm.module.css'

const ConfirmationPage = () => {
  return (
    <div className={styles.confirmPage}>
        <h2>Su cuenta esta correctamente activada!</h2>
        <OutlinedButton>
            <Link to={PATH_ROUTES.HOME}>Continue</Link>
        </OutlinedButton>
    </div>
    
)
}

export default ConfirmationPage
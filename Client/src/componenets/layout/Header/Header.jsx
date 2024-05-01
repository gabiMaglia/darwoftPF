import NavBar from '../../NavBar/NavBar'
import BillBoard from '../../BillBoard/BillBoard'
import { productObject } from '../../../utils/exapleObjects'

const Header = () => {
  
  return (
    <>
    <NavBar/>
    <BillBoard products={productObject} />
    </>
  )
}

export default Header
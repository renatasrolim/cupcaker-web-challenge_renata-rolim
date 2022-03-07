import { Typography, TypographyVariant } from '../typography'

import styles from './styles.module.scss'

export interface InputsProps {

}

const Inputs = ({ }: InputsProps): JSX.Element => {
  return (
   
<form>
  <div>
    <label>Coin</label>
    <select name="" id=""></select>
  </div>
  <div className="input-price">
    <label>Price</label>
    <input type="number" />
  </div>
  <div>
    <label>Amount</label>
    <input type="number" />
  </div>
</form>  

  
  )
}

export { Inputs }

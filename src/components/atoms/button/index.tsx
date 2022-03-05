import { Typography } from '../typography'

import styles from './styles.module.scss'

export interface ButtonProps {
label: string
}

const Button = ({ label }: ButtonProps): JSX.Element => {
  return (
    <a href=""><button className={(styles.container)}>ADD NEW COIN</button></a>
  
  )
}

export { Button }

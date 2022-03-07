import { Typography, TypographyVariant } from '../typography'

import styles from './styles.module.scss'

export interface ButtonProps {
label: string
}

const Button = ({ label }: ButtonProps): JSX.Element => {
  return (
    <a href=""><button className={(styles.container)}>
    <Typography className={(styles.label)} text={label} variant={TypographyVariant.label}/>
    </button></a>
  
  )
}

export { Button }

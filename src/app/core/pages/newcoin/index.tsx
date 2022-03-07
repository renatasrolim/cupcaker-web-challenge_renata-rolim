import React from 'react'

import { Inputs, Panel, Typography, TypographyVariant } from 'components/atoms'

import styles from './styles.module.scss'

const NewCoin = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Typography text="Add New Coin" variant={TypographyVariant.h3} />
      <Panel className={styles.panel}>
      <Inputs/>
        </Panel>
    </div>
  )
}

export default NewCoin

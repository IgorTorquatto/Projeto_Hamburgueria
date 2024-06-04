import React from 'react'
import { Btn } from './styles'

function Button({children, ...rest}) {
  return (
    <Btn {...rest}>{children}</Btn>
  )
}

export default Button

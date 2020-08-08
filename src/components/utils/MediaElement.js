import React from 'react'
import FlexRow from './FlexRow'

export default function Media (props) {
  const style = {
    borderRadius: '5px',
    width: '100%'
  }
  return (<FlexRow class='width80'><img style={style} src={props.src} alt={props.alt || ''} /></FlexRow>)
}

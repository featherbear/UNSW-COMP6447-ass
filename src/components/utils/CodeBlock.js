import React from 'react'

export default function Code (props) {
  const style = {
    container: {
      height: '100%',
      margin: '0 auto',
      backgroundColor: '#263238',
      padding: '5px',
      borderRadius: '5px'
    },
    code: {
      whiteSpace: 'pre-wrap',
      color: 'rgb(233,237,237)'
    }
  }
  return (
    <div style={style.container}>
      <code style={style.code}>{props.children}</code>
    </div>
  )
}

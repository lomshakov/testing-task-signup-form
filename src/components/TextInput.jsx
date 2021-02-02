import React from 'react'
import '../styles.css'

const TextInput = ({input, meta, ...rest}) => (
    <>
        <input type="text" {...input} {...rest} />
        {meta.error && meta.touched && <div className='error'>{meta.error}</div>}
    </>
)

export default TextInput

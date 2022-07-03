import React from 'react';

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  },
  password: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
    message: 'A senha deve ter minimo 8 caracteres, 1 dígito, 1 caractere minúsculo, 1 maíusculo e caractere especial'
  },
  number: {
    regex: /^\d+$/,
    message: 'Utilize numeros apenas'
  }
}


const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function onChange({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setError('preencha um valor')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    value,
    setValue,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
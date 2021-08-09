import {useState} from 'react'

export const useForm = (initialState = {}) => {

    const [values, setValue] = useState(initialState);

    const reset = (newState = initialState) => {
      setValue(newState)
    }

    const handleInputChange = ({ target }) => {
        setValue({
          ...values,
          [target.name]: target.value,
        });
      };

      return [values,handleInputChange,reset]
 
}
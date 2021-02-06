import {useState, useCallback} from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChangeText = useCallback((name, value) => {
    setForm((prevForm) => ({...prevForm, [name]: value}));
  }, []);

  const reset = useCallback(() => setForm(initialForm), [initialForm]);

  return [form, onChangeText, reset];
}

export default useInputs;

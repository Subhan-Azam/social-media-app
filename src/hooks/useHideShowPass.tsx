import {useState} from 'react';

const useHideShowPass = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return {showPassword, togglePasswordVisibility};
};

export default useHideShowPass;

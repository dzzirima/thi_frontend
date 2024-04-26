"use client"

import { Input, InputGroup } from 'rsuite';
import "rsuite/dist/rsuite.css";
import EyeIcon from '@rsuite/icons/legacy/Eye';
import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';
import { useState } from 'react';

const styles = {
//   width:400
};

const PasswordTextField = () => {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <InputGroup  inside style={styles} className='border border-gray-500 mb-2 mt-2'>
      <Input  name = "password" type={visible ? 'text' : 'password'}  />
      <InputGroup.Button onClick={handleChange}>
        {visible ? <EyeIcon /> : <EyeSlashIcon />}
      </InputGroup.Button>
    </InputGroup>
  );
};

export default PasswordTextField
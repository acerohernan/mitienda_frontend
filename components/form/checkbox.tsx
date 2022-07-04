import { useState } from 'react';
import styles from '../../styles/components/checkbox.module.css';

interface CheckboxProps {
  children?: any;
}

const Checkbox: React.FC<CheckboxProps> = ({ children }) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <button
      className="bg-slate-100 p-2 flex items-center cursor-pointer w-full"
      type="button"
      onClick={handleChecked}
    >
      <div className={styles.round}>
        <input type="checkbox" id="checkbox" checked={checked} />
        <label htmlFor="checkbox"></label>
      </div>
      <div className="inline-block text-info ml-5">{children}</div>
    </button>
  );
};

export default Checkbox;

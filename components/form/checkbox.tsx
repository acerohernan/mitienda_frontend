import styles from '../../styles/components/checkbox.module.css';

interface CheckboxProps {
  children?: any;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ children, checked, onChange }) => {
  return (
    <button
      className="bg-slate-100 p-2 flex items-center cursor-pointer w-full"
      type="button"
      onClick={onChange}
    >
      <div className={styles.round}>
        <input
          type="checkbox"
          id="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <label></label>
      </div>
      <div className="inline-block text-info ml-5">{children}</div>
    </button>
  );
};

export default Checkbox;

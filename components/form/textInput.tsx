import { ReactElement } from 'react';

interface InputProps {
  children?: ReactElement;
  error?: boolean;
  inputProps?: any;
}

const CustomTextInput: React.FC<InputProps> = ({
  children,
  inputProps,
  error,
}) => {
  return (
    <div className="flex bg-slate-100 items-center w-full">
      {children && <div className="p-2">{children}</div>}
      <input
        type="text"
        className={error ? 'text-field-error' : 'text-field'}
        {...inputProps}
      />
    </div>
  );
};

export default CustomTextInput;

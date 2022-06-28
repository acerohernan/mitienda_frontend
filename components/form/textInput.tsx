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
    <div className="flex bg-slate-100 items-center">
      {children && (
        <div className="p-2 px-4 text-lg bg-slate-200">{children}</div>
      )}
      <input
        type="text"
        className={error ? 'text-field-error' : 'text-field'}
        {...inputProps}
      />
    </div>
  );
};

export default CustomTextInput;

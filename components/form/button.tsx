import React from 'react';
import LoaderSpin from './loader';

interface ButtonProps {
  className?: string;
  small?: boolean;
  loading?: boolean;
  submit?: boolean;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  small,
  onClick,
  text,
  loading,
  submit,
}) => {
  return (
    <button
      className={`${small ? 'button-sm' : 'button'} ${className} text-center`}
      onClick={onClick}
      disabled={loading}
      type={submit ? 'submit' : 'button'}
    >
      {loading ? <LoaderSpin /> : <>{text}</>}
    </button>
  );
};

export default Button;

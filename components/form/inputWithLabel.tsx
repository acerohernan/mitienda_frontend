import { ReactElement } from 'react';
import CustomBottomMessage from './bottomMessage';
import CustomLabel from './label';
import CustomTextInput from './textInput';

interface TextInputWithLabelProps {
  labelText: string;
  inputProps?: any;
  bottomMessage?: string;
  errorMsg?: string;
  optional?: boolean;
  textarea?: boolean;
  children?: ReactElement;
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  labelText,
  inputProps,
  bottomMessage,
  errorMsg,
  optional,
  textarea,
  children,
}) => {
  return (
    <div className="mb-6">
      <CustomLabel
        text={labelText}
        optional={Boolean(optional)}
        className="mb-2"
      />
      {textarea ? (
        <textarea className="text-field -mb-2" {...inputProps} />
      ) : (
        <CustomTextInput error={!!errorMsg} inputProps={inputProps}>
          {children}
        </CustomTextInput>
      )}
      <CustomBottomMessage text={bottomMessage} errorMsg={errorMsg} />
    </div>
  );
};

export default TextInputWithLabel;

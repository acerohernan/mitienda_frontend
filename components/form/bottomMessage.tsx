import { RiErrorWarningFill } from 'react-icons/ri';

interface BottomMessageProps {
  text?: string;
  errorMsg?: string;
}

const CustomBottomMessage: React.FC<BottomMessageProps> = ({
  errorMsg,
  text,
}) => {
  if (!errorMsg && !text) return null;

  if (errorMsg) {
    return (
      <div className="text-red-500 flex items-center mt-2">
        <div className="w-5 h-5">
          <RiErrorWarningFill size={20} />
        </div>
        <span className="text-sm font-medium ml-1">{errorMsg}</span>
      </div>
    );
  }

  return <span className="label-bottom mt-2">{text}</span>;
};

export default CustomBottomMessage;

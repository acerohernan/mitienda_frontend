import { AiOutlineCheckCircle, AiOutlineRight } from 'react-icons/ai';
import { stepsItems } from '../../../../utils/data/admin';

const AdminSteps: React.FC = () => {
  return (
    <div className="card bg-darkgreen100">
      <div className="flex items-center justify-between mb-3">
        <h1 className="h3 mb-2">Completa tu cuenta</h1>
      </div>
      <div>
        {stepsItems.map((step, i) => (
          <StepItem {...step} key={i} last={stepsItems.length - 1 === i} />
        ))}
      </div>
    </div>
  );
};

interface StepItemProps {
  title: string;
  description: string;
  completed: boolean;
  icon?: any;
  last?: boolean;
}

const StepItem: React.FC<StepItemProps> = ({
  title,
  description,
  completed,
  icon,
  last,
}) => {
  return (
    <button
      className={`grid grid-cols-[40px_auto_40px] gap-2 py-5 border-t border-gray-300 text-start w-full ${
        last ? 'pb-0' : ''
      }`}
      disabled={completed}
    >
      {completed ? (
        <div className="bg-darkgreen400 rounded-full w-8 h-8 flex items-center justify-center text-white">
          <AiOutlineCheckCircle size={20} />
        </div>
      ) : (
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-white border border-darkgreen400">
          {icon}
        </div>
      )}
      <div>
        <h6 className={`mb-2 ${completed && 'opacity-40'}`}>{title}</h6>
        <span className={`font-light ${completed && 'opacity-40'}`}>
          {description}
        </span>
      </div>
      <div className={`${completed ? 'opacity-40' : ''}`}>
        <AiOutlineRight size={22} />
      </div>
    </button>
  );
};

export default AdminSteps;

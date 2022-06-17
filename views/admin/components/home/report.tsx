import { AiOutlineInfoCircle } from 'react-icons/ai';
import { reportItems } from '../../../../utils/data/admin';

const AdminReport: React.FC = () => {
  return (
    <div className="card bg-darkgreen100">
      <div className="flex items-center justify-between mb-3">
        <h1 className="h3">Reporte</h1>
        <select className="p-2">
          <option>Ayer</option>
          <option>Últimos 7 días</option>
        </select>
      </div>
      <div>
        {reportItems.map((report, i) => (
          <ReportItem {...report} last={reportItems.length - 1 === i} key={i} />
        ))}
      </div>
    </div>
  );
};

interface ReportItemProps {
  title: string;
  value: string;
  percentage: string;
  noBorder?: boolean;
  last?: boolean;
}

const ReportItem: React.FC<ReportItemProps> = ({
  title,
  value,
  percentage,
  last,
}) => {
  return (
    <div
      className={`py-3  flex justify-between items-start ${
        !last ? 'border-b border-gray-300 mb-3' : 'mb-0'
      }`}
    >
      <div className="flex items-center">
        <span className="mr-1">{title}</span>
        <AiOutlineInfoCircle />
      </div>
      <div>
        <span>{value}</span>
        <span className="text-gray-600 text-sm text-end">{percentage}%</span>
      </div>
    </div>
  );
};

export default AdminReport;

import Link from 'next/link';

interface AdminButtonListProps {
  title: string;
  items: AdminButtonProp[];
}

interface AdminButtonProp {
  label: string;
  icon: any;
  link?: string;
}

const AdminButtonList: React.FC<AdminButtonListProps> = ({ title, items }) => {
  return (
    <div className="card bg-darkblue100">
      <h1 className="h3 mb-2">{title}</h1>
      {items.map((item, i) => {
        const last = items.length - 1 === i;

        if (item.link) {
          return (
            <Link href={item.link}>
              <a
                className={`border-t border-gray-300 w-full text-start font-light py-4 grid grid-cols-[24px_auto] items-center gap-2 ${
                  last ? 'pb-0' : ''
                }`}
                key={i}
              >
                <div className="text-2xl">{item.icon}</div>
                <span className="text-md">{item.label}</span>
              </a>
            </Link>
          );
        }

        return (
          <button
            className={`border-t border-gray-300 w-full text-start font-light py-4 grid grid-cols-[24px_auto] items-center gap-2 ${
              last ? 'pb-0' : ''
            }`}
            key={i}
          >
            <div className="text-2xl">{item.icon}</div>
            <span className="text-md">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default AdminButtonList;

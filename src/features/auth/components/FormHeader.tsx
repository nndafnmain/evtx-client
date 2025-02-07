import { Link } from "react-router-dom";

export const FormHeader = ({
  title,
  subtitle,
  link,
  to,
}: {
  title: string;
  subtitle: string;
  link: string;
  to: string;
}) => {
  return (
    <header className="space-y-3 text-center">
      <p className="text-lg font-semibold text-gray-800 md:text-xl">{title}</p>
      <p className="text-sm text-gray-400">
        {subtitle}{" "}
        <Link to={to} className="text-blue-700">
          {link}
        </Link>
      </p>
    </header>
  );
};

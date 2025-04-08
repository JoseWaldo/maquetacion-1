interface CardProps {
  title: string;
  tags: string[];
  date: string;
}

const Card = ({ title, tags, date }: CardProps) => {
  return (
    <article className="flex flex-col gap-2 p-4 rounded-md bg-gray-200 text-[.9rem] text-gray-900">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="flex gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="inline-block p-[10px] rounded-md bg-gray-300 leading-1"
          >
            {tag}
          </li>
        ))}
      </ul>
      <span>{date}</span>
    </article>
  );
};

export { Card };

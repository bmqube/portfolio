export const BlogItem = ({ index, title, summary, date }: any) => {
  return (
    <div
      key={index}
      className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
    >
      <h3 className="text-xl text-blue-400 font-semibold mb-2">{title} </h3>
      <p className=" mb-2">{summary}</p>
      <p className="text-gray-400">{date}</p>
    </div>
  );
};

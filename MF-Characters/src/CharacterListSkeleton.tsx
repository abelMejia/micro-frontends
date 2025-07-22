const CharacterListSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-pulse"
      >
        <div className="w-20 h-20 rounded-full mb-4 bg-indigo-100" />
        <div className="h-4 w-24 bg-indigo-100 rounded mb-2" />
        <div className="h-3 w-20 bg-indigo-100 rounded mb-1" />
        <div className="h-3 w-16 bg-indigo-100 rounded" />
      </div>
    ))}
  </div>
);

export default CharacterListSkeleton;

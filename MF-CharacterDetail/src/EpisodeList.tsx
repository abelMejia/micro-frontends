interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  url: string;
  created: string;
  characters: string[];
}

export default function EpisodeList({ episodes }: { episodes: Episode[] }) {
  if (!episodes || episodes.length === 0) return null;

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Episodios</h2>
      <ul className="space-y-4">
        {episodes.map((ep) => (
          <li key={ep.id} className="p-4 border rounded bg-gray-50">
            <div className="font-bold text-gray-900">{ep.name} <span className="text-xs text-gray-500">({ep.episode})</span></div>
            <div className="text-gray-700">Aired: {ep.air_date}</div>
            <div className="text-gray-500 text-xs">Creado: {new Date(ep.created).toLocaleString()}</div>
            <div className="text-gray-600 text-xs">Personajes: {ep.characters.length}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

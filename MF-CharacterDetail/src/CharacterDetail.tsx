import MultiFetch from "./hooks/MultiFetch";
import EpisodeList from "./EpisodeList";

interface Character {
  id: number | string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created?: string;
  location?: {
    name: string;
    url: string;
  };
  episode?: string[];
}

interface CharacterProps {
  character: Character;
  callback: (data: unknown) => void;
}

const CharacterDetail: React.FC<CharacterProps> = ({character, callback }: CharacterProps) => {
  const {loading, data, error } = MultiFetch({ resource: character.episode || [] });

  return (
    <div className="relative max-l-md mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-8 p-6">
      <button
        title="Regresar a la lista"
        onClick={() => callback(null)}
        style={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: 'transparent',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          zIndex: 10
        }}
        aria-label="Cerrar"
      >
        ×
      </button>
      <div className="flex items-center space-x-4">
        <img
          src={character.image}
          alt={character.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{character.name}</h1>
          <p className="text-gray-600">{character.status}</p>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div>
          <span className="font-semibold text-gray-800">Género: </span>
          <span className="text-gray-700">{character.gender}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Especie: </span>
          <span className="text-gray-700">{character.species}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Creado: </span>
          <span className="text-gray-700">{character.created}</span>
        </div>
        <div>
          <span className="font-semibold text-gray-800">Ubicación: </span>
          <span className="text-gray-700">{character.location?.name}</span>
        </div>
      </div>

      {loading && <div className="mt-6 text-gray-500">Cargando episodios...</div>}
      {error && <div className="mt-6 text-red-500">Error: {error}</div>}
      {data && <EpisodeList episodes={data as any} />}
    </div>
  )
}

export default CharacterDetail;

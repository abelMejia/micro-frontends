import { useEffect, useState } from "react";

interface Character {
  id: number | string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

interface CharacterProps {
  data: Character[];
  callback: (data: Character) => void;
}

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

const CharacterList = ({ data, callback }: CharacterProps) => {
  const [filtered, setFiltered] = useState<Character[]>([]);
  const [filters, setFilters] = useState({
    name: "",
    status: "",
    species: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const statusOptions = Array.from(new Set(data.map((c) => c.status))) as string[];
  const speciesOptions = Array.from(new Set(data.map((c) => c.species))) as string[];

  useEffect(() => {
    const delay = 600;
    const params = new URLSearchParams();
    if (filters.name) params.append("name", filters.name);
    if (filters.status) params.append("status", filters.status);
    if (filters.species) params.append("species", filters.species);

    setLoading(true);
    setError(null);

    const timeoutId = setTimeout(() => {
      fetch(`https://rickandmortyapi.com/api/character/?${params.toString()}`)
        .then(async (res) => {
          if (!res.ok) {
            throw new Error("No se encontraron personajes.");
          }
          const json = await res.json();
          setFiltered(json.results || []);
        })
        .catch((err) => {
          setFiltered([]);
          setError(err.message);
        })
        .finally(() => setLoading(false));
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [filters]);


  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return <>
      <div className="flex flex-col w-full">
          <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Lista de Personajes</h2>

          <div className="flex flex-wrap gap-4 mb-6 justify-center items-end">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600" htmlFor="name">Buscar</label>
              <input
                id="name"
                name="name"
                type="text"
                value={filters.name}
                onChange={handleFilterChange}
                placeholder="Buscar por nombre"
                className="px-4 py-2 border border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition w-full max-w-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600" htmlFor="status">Estado</label>
              <select
                id="status"
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="border border-indigo-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              >
                <option value="">Todos los estados</option>
                {statusOptions.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold text-gray-600" htmlFor="species">Especie</label>
              <select
                id="species"
                name="species"
                value={filters.species}
                onChange={handleFilterChange}
                className="border border-indigo-300 rounded-lg px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
              >
                <option value="">Todas las especies</option>
                {speciesOptions.map((species) => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>
          </div>
          {loading ? (
            <CharacterListSkeleton />
          ) : error ? (
            <div className="text-center text-red-600">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered && filtered.map((character) => (
                <div
                  key={character.id}
                  onClick={() => callback(character)}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition flex flex-col items-center cursor-pointer"
                >
                  <img src={character.image} alt={character.name} className="w-20 h-20 rounded-full mb-4 border-4 border-indigo-200 shadow" />
                  <div className="flex flex-col items-center">
                    <span className="text-lg font-bold capitalize mb-1 text-indigo-800">{character.name}</span>
                    <span className="text-gray-600 mb-1">{character.gender} &middot; {character.species}</span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mt-1
                        ${character.status === 'Alive' ? 'bg-green-200 text-green-800'
                          : character.status === 'Dead' ? 'bg-red-200 text-red-800'
                          : 'bg-gray-200 text-gray-800'}`}
                    >
                      {character.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
  </>
}

export default CharacterList

import { useEffect, useState } from 'react';

export default function MultiFetch<T>({ resource }: { resource: string[] }) {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const details = await Promise.all(
          resource.map(async (url: string) => {
            const res = await fetch(url);
            if (!res.ok) throw new Error(`Error al obtener ${url}`);
            return res.json();
          })
        );

        setData(details);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Error desconocido.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resource]);

  return {
    loading,
    data,
    error
  };
}

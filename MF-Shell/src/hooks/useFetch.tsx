import { useEffect, useState } from "react";
import Httpclient from "../api/HttpClient";

function useFetch<T>(endpoint: string) {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ data, setData ] = useState<T[] | null>(null);
    const [ error, setError ] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Httpclient.get<{ results: T[]}>(endpoint);
                console.log('response', response.results);
                setData(response.results);

            } catch (error) {
              console.error(error);
              setError(error instanceof Error ? error.message: 'Error desconocido.')
            } finally {
              setLoading(false)
            }
        }

        fetchData()
    }, [])


    return { loading, data, error }

}

export default useFetch;

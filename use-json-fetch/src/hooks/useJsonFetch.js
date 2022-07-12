import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        if (url === null) return;
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const data = await response.json();
                setData(data);
                setError(null);
            } catch (e) {
                setError(e)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url])

    return [data, loading, error];
}
import { useState, useCallback } from 'react';

/**
 * useSearch Hook
 * Encapsulates the logic for hitting the Serper.dev API to fetch
 * "default" Google search data.
 */
export const useSearch = () => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const executeSearch = useCallback(async (query, location = 'in') => {
    // Reset state before new search
    setIsLoading(true);
    setError(null);

    const myHeaders = new Headers();
    // In a production app, move this to process.env.NEXT_PUBLIC_SERPER_API_KEY
    myHeaders.append('X-API-KEY', '79ae129eebdb86624ce76801c03ddc2ab76cc0f4');
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      q: query,
      gl: location,
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        'https://google.serper.dev/search',
        requestOptions,
      );

      if (!response.ok) {
        throw new Error(`Search failed with status: ${response.status}`);
      }

      const data = await response.json();

      // We specifically extract 'organic' results as they contain Title, Link, and Snippet
      setResults(data.organic || []);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Serper API Error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    results,
    isLoading,
    error,
    executeSearch,
  };
};

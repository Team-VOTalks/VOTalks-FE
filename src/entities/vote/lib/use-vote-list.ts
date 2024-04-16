import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import getVotes from '../api/get-votes';

export default function useVoteList() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['votes', currentCategory],
    queryFn: () => getVotes(currentCategory === 'all' ? undefined : currentCategory),
  });
  const setCategory = useCallback((category: string) => {
    setCurrentCategory(category);
  }, []);

  return { data, isLoading, isError, currentCategory, setCategory };
}

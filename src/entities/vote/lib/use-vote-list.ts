import { useCallback, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import getVotes from '../api/get-votes';
import postVote from '../api/post-vote';

export default function useVoteList() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const { data, isLoading, isError } = useQuery({
    queryKey: ['votes', currentCategory],
    queryFn: () => getVotes(currentCategory === 'all' ? undefined : currentCategory),
  });
  const setCategory = useCallback(setCurrentCategory, []);

  const voteMutation = useMutation({
    mutationFn: postVote,
  });
  const handleVoteClick = useCallback(voteMutation.mutate, []);

  return { data, isLoading, isError, currentCategory, setCategory };
}

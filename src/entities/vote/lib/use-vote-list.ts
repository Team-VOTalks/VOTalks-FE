import { useCallback, useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import getVotes from '../api/get-votes';

export default function useVoteList() {
  const [currentCategory, setCurrentCategory] = useState('all');
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['votes', currentCategory],
      queryFn: ({ pageParam }) =>
        getVotes({ category: currentCategory === 'all' ? undefined : currentCategory, pageParam }),
      initialPageParam: 1,
      getNextPageParam: lastPage =>
        lastPage.pageInfo.done ? undefined : lastPage.pageInfo.pageIndex + 1,
    });
  const setCategory = useCallback(setCurrentCategory, []);

  return {
    data,
    isLoading,
    isError,
    currentCategory,
    setCategory,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
}

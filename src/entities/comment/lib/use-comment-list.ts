import { useInfiniteQuery } from '@tanstack/react-query';
import getComments from '../api/get-comments';

export default function useCommentList({ voteId }: { voteId: string }) {
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['votes', voteId, 'comments'],
      queryFn: ({ pageParam }) => getComments({ voteId, pageParam }),
      initialPageParam: 1,
      getNextPageParam: lastPage =>
        lastPage.pageInfo.done ? undefined : lastPage.pageInfo.pageIndex + 1,
    });

  return {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  };
}

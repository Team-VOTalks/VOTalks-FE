import { useInfiniteQuery } from '@tanstack/react-query';
import getReplies from '../api/get-replies';

export default function useReplyList({ voteId, commentId }: { voteId: string; commentId: number }) {
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['votes', voteId, 'comments', commentId, 'replies'],
      queryFn: ({ pageParam }) => getReplies({ voteId, commentId, pageParam }),
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

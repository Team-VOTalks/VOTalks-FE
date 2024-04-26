import { useMutation, useQueryClient } from '@tanstack/react-query';
import postVote from '../api/post-vote';

export default function useVoteContent() {
  const queryClient = useQueryClient();
  const voteMutation = useMutation({
    mutationFn: postVote,
  });

  return voteMutation;
}

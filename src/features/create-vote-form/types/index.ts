export interface CreateVoteFormValues {
  category: string;
  title: string;
  description: string;
  options: Array<{ value: string }>;
}

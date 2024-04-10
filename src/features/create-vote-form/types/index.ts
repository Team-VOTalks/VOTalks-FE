export interface CreateVoteFormValues {
  category: string;
  title: string;
  description: string;
  options: Array<{ value: string }>;
}

export type CreateVoteFormRequestValues = Pick<CreateVoteFormValues, 'title' | 'category'> & {
  description: string | null;
  options: string[];
};

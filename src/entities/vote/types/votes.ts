import Vote from './vote';
import { Pagination } from '@/shared/types';

export default interface Votes extends Pagination {
  content: Vote[];
}

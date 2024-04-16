export interface Pagination {
  pageInfo: {
    pageIndex: number;
    totalPageLength: number;
    done: boolean;
  };
}

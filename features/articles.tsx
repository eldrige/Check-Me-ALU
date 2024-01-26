import { axios } from '@/lib/axios';

import { useQuery } from 'react-query';

const getArticles = (): Promise<any> => axios.get(`articles/`);

export const useGetArticles = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: getArticles,
  });

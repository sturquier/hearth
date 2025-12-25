import { useQuery } from '@tanstack/react-query';

import type { UseQueryResult } from '@tanstack/react-query';

import { QUERY_KEYS } from '@hearth/client/constants/queries';
import type { CategoryResponseContract } from '@hearth/shared-contracts';
import { API_PATH } from '@hearth/shared-paths';

export const useFetchCategories = (): UseQueryResult<
  CategoryResponseContract[],
  Error
> => {
  return useQuery({
    queryKey: [QUERY_KEYS.CATEGORIES],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}${API_PATH.BUDGET_CATEGORIES}`,
      );

      if (!response.ok)
        throw new Error('An error occurred while fetching categories');

      return response.json();
    },
  });
};

import { renderHook, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { createQueryWrapper } from '@hearth/client/test/utils/createQueryWrapper';
import type { CategoryResponseContract } from '@hearth/shared-contracts';

import { useFetchCategories } from './useFetchCategories';

describe('useFetchCategories', () => {
  it('should fetch and return categories', async () => {
    const mockCategories: CategoryResponseContract[] = [
      { id: '1', name: 'Food' },
      { id: '2', name: 'Car' },
    ];

    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
      json: () => mockCategories,
    } as unknown as Response);

    const { result } = renderHook(() => useFetchCategories(), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual(mockCategories);
  });

  it('should handle fetch error', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
    } as Response);

    const { result } = renderHook(() => useFetchCategories(), {
      wrapper: createQueryWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
  });
});

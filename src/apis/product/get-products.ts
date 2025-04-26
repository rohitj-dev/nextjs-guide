import 'server-only';

import type { Products } from '@/app/types';

export async function getProducts({ limit = 10, page = 1 }: { limit?: number; page?: number } = {}): Promise<Products> {
  const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * limit}`);
  const products = await res.json();

  return products;
}

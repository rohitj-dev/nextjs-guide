import 'server-only';

import type { Product } from '@/app/types';

export async function getProductDetails(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const products = await res.json();

  return products;
}

import { getProductDetails } from '@/apis/product';
import type { Params } from '@/app/types';

export default async function ProductDetails({ params }: { params: Params }) {
  const { id } = await params;
  const product = await getProductDetails(id);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-2xl font-semibold'>Product Details</h1>
      <br />
      <p>Product details will be displayed here.</p>
      <p>Product ID: {id}</p>

      <pre>{JSON.stringify(product, null, 4)}</pre>
    </div>
  );
}

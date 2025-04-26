import { getProducts } from '@/apis/product';
import { Product } from '@/app/components';

export default async function Products() {
  const data = await getProducts({ limit: 10, page: 1 });

  if (!data) {
    return <div className='container mx-auto p-4'>No products found</div>;
  }

  if (data.products.length === 0) {
    return <div className='container mx-auto p-4'>No products available</div>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-2xl font-semibold'>Products</h1>
      <br />

      <section
        id='products'
        className='w-fit mx-auto grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-8 mt-10 mb-5'
      >
        {data.products.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </section>
    </div>
  );
}

import type { Params, SearchParams } from '@/app/types';

export default async function Page({ params, searchParams }: { params: Params; searchParams: SearchParams }) {
  const paramsRes = await params;
  const searchParamsRes = await searchParams;

  console.log(`🔥💻 [my logger ~~~~~~~~~~ paramsRes] -------- `, paramsRes);
  console.log(`🔥💻 [my logger ~~~~~~~~~~ searchParamsRes] -------- `, searchParamsRes);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-2xl font-semibold'>Dynamic ID Page</h1>
      <br />

      <div className='grid grid-cols-2 gap-4 p-4'>
        <p>Page ID:&nbsp;</p>
        <p>{paramsRes.pageId}</p>

        <p>Query Params: </p>
        <code>
          <pre>{JSON.stringify(searchParamsRes, undefined, 4)}</pre>
        </code>
      </div>
    </div>
  );
}

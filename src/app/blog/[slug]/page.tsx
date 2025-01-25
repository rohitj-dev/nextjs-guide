export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const paramsRes = await params;
  const searchParmsRes = await searchParams;

  console.log(`🔥💻 [my logger ~~~~~~~~~~ paramsRes] -------- `, paramsRes);
  console.log(`🔥💻 [my logger ~~~~~~~~~~ searchParmsRes] -------- `, searchParmsRes);

  return <h1>My Page</h1>;
}

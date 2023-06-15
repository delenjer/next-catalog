import Catalog from '@/components/Catalog/Catalog'
import {BASE_URL} from '@/api/api';
import {Suspense} from 'react';
import {ArtObjectsListDto} from '@/models';

const getArts = async (num:number) => {
  const res = await fetch(`${BASE_URL}&ps=10&p=${num}`)
  return res.json();
}

export default async function Home({ searchParams }: { searchParams: { page: string } }) {
  const data = await getArts(+searchParams.page).then((res:ArtObjectsListDto) => res.artObjects);

  console.log(searchParams)

  return (
    <main className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Catalog data={data}  />
      </Suspense>
    </main>
  )
}

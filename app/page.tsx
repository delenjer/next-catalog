import Catalog from '@/components/Catalog/Catalog'
import { PageProviderWrapper } from '@/components/PageProviderWrapper/PageWrapper';
import {BASE_URL, getCatalog} from '@/api/api';
import {Suspense} from 'react';
import {ArtObjectsListDto, CatalogDto} from '@/models';
import Link from 'next/link';

async function getArts(num) {
  const res = await fetch(`${BASE_URL}&ps=10&p=${num}`)
  return res.json();
}

export default async function Home({ searchParams }) {
  const data = await getArts(+searchParams.page).then((res:ArtObjectsListDto) => res.artObjects);

  console.log(searchParams.page)


  return (
    <main className="p-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Catalog data={data}  />
      </Suspense>

      {/*<PageProviderWrapper>*/}
      {/*  <Catalog data={data} />*/}
      {/*</PageProviderWrapper>*/}
    </main>
  )
}

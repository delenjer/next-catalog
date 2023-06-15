'use client';

import { getCatalog } from "@/api/api";
import {memo, Suspense, useState, useEffect } from "react";
import {useQuery} from 'react-query';
import {CatalogItem} from '@/components/Catalog/CatalogItem';
import {ArtObjectsListDto, CatalogDto} from '@/models';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import ReactPaginate from 'react-paginate';

const Catalog = async ({ data }) => {
  const [ page, setPage ] = useState(2);

  const pageCount = Math.ceil(10000 / data.length);
  const router = useRouter()

  const handleClick = (e) => {
    router.push(`/?page=${e.selected}`);
    console.log(e.selected)
  };

  // const { data, isLoading } = useQuery(
  //   ['catalog'],
  //   () => getCatalog(10)
  // );

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handleClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

      <div className="flex flex-col items-center">
        {
          data && data.map((catalog:CatalogDto) => (
            <CatalogItem
              key={catalog.id}
              path={catalog.webImage.url}
              id={catalog.objectNumber}
            />
          ))
        }
        {/*{*/}
        {/*  isLoading ? (*/}
        {/*      <p>Loading...</p>*/}
        {/*    ) : (*/}
        {/*      data.map((catalog:CatalogDto) => (*/}
        {/*        <CatalogItem*/}
        {/*          key={catalog.id}*/}
        {/*          path={catalog.webImage.url}*/}
        {/*          id={catalog.objectNumber}*/}
        {/*        />*/}
        {/*      ))*/}
        {/*  )*/}
        {/*}*/}
      </div>
    </>
  )
}

export default memo(Catalog);

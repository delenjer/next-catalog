'use client';

import {memo} from "react";
import {CatalogItem} from '@/components/Catalog/CatalogItem';
import {CatalogDto} from '@/models';
import { useRouter } from 'next/navigation'
import ReactPaginate from 'react-paginate';

const Catalog:({data}: { data: CatalogDto[] }) => JSX.Element = ({ data }) => {
  const pageCount = Math.ceil(10000 / data.length);
  const router = useRouter()

  const handleClick = (e: {selected: number}) => {
    console.log(e)

    router.push(`/?page=${e.selected}`);
  };

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
      </div>
    </>
  )
}

export default memo(Catalog);

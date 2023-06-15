import Image from 'next/legacy/image';
import Link from 'next/link';
import {FC} from 'react';

type CatalogItemProps = {
  path: string,
  id: string,
}

export const CatalogItem:FC<CatalogItemProps> = ({ path, id }) => (
  <Link
    className="relative w-full max-w-[1035px] h-screen"
    href={`details/${id}`}
  >
    <Image
      src={path}
      layout='fill'
      alt="Picture of the author"
    />
  </Link>
)

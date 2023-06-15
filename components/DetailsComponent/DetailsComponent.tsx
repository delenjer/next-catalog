'use client';

import {useQuery} from 'react-query';
import {catalogDetails} from '@/api/api';

export const DetailsComponent = ({ id }:string) => {
  const { data, isLoading } = useQuery(
    ['details', id],
    () => catalogDetails(id)
  );

  console.log(data)

  return (
    <h3>Details</h3>
  );
}

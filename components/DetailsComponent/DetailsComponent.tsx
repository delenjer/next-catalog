'use client';

import {useQuery} from 'react-query';
import {catalogDetails} from '@/api/api';
import {FC} from 'react';

type DetailsComponentProps = {
  id: string;
}

export const DetailsComponent:FC<DetailsComponentProps> = ({ id }) => {
  const { data, isLoading } = useQuery(
    ['details', id],
    () => catalogDetails(id)
  );

  return (
    <h3>Details</h3>
  );
}

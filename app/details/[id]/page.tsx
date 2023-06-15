import {DetailsComponent} from '@/components/DetailsComponent/DetailsComponent';
import {PageProviderWrapper} from '@/components/PageProviderWrapper/PageWrapper';

const Details = ({ params }: { params: { id: string } }) => {
  return (
    <PageProviderWrapper>
      <DetailsComponent id={params.id} />
    </PageProviderWrapper>
  )
}

export default Details;

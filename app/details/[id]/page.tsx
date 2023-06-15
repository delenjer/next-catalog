import {DetailsComponent} from '@/components/DetailsComponent/DetailsComponent';
import {PageProviderWrapper} from '@/components/PageProviderWrapper/PageWrapper';

export default async function Details({ params }: { id: string }) {
  return (
    <PageProviderWrapper>
      <DetailsComponent id={params.id} />
    </PageProviderWrapper>
  )
}

export interface CatalogDto {
  hasImage: boolean;
  headerImage: ImageDataDto;
  id: string;
  links: LinksDataDto;
  longTitle: string;
  objectNumber: string;
  permitDownload: boolean;
  principalOrFirstMaker: string;
  productionPlaces: any[];
  showImage: boolean;
  title: string;
  webImage: ImageDataDto;
}

interface ImageDataDto {
  guid: string;
  width: number;
  height: number;
  offsetPercentageX: number;
  offsetPercentageY: number;
  url: string;
}

interface LinksDataDto {
  self: string;
  web: string;
}

export interface ArtObjectsListDto {
  artObjects: CatalogDto[];
  count: number;
  countFacets: {
    hasimage: number;
    ondisplay: number;
  },
  elapsedMilliseconds: number;
  facets: any[];
}


import { IMDbMostPopularTVs, Item } from "@/shared/interfaces/IMDbMostPopularTVs";
import { IMDBTitle, OptsTitle } from "@/shared/interfaces/IMDbTitle";
import { http } from "@/shared/utils/http";

const MostPopularTVs = async ( limit: number ): Promise<Item[]> => {
  const mostPopularTVs = await http.GET<IMDbMostPopularTVs>( '/MostPopularTVs' );
  
  if ( mostPopularTVs.errorMessage ) {
    console.error( "MostPopularTVs => ", mostPopularTVs.errorMessage );
    return [];
  };

  return mostPopularTVs.items.slice( 0, limit );
};

const MostPopularIdTVs = async ( limit: number ): Promise<string[]> => {
  const mostPopularTVs = await http.GET<IMDbMostPopularTVs>( '/MostPopularTVs' );
  
  if ( mostPopularTVs.errorMessage ) {
    console.error( "MostPopularTVs => ", mostPopularTVs.errorMessage );
    return [];
  };

  return mostPopularTVs.items.slice( 0, limit ).map( tv => tv.id  );
};

const Title = async ( id: string, optTitle: OptsTitle[] ): Promise<IMDBTitle> => {
  const endpoint = `/Title`;
  const optEndpoint = `/${id}/${optTitle.join(',')}`;
  const title = await http.GET<IMDBTitle>( endpoint, optEndpoint );
  
  if ( title.errorMessage ) {
    console.error( "MostPopularTVs => ", title.errorMessage );
  };
  
  return title;
};

export const IMDbService = {
  MostPopularTVs,
  MostPopularIdTVs,
  Title
};
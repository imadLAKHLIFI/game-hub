import gener from "../data/generes";
export interface Genre{
    id: number;
    name: string;
    image_background: string;
}


const useGenres = () => ({data: gener, isLoading: false, error: null})
 
export default useGenres;
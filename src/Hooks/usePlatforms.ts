import Platforms from "../data/Platforms";

interface Platform {
    id: number;
    name: string;
    slug: string;
}
const usePlatforms = () => ({data:Platforms, error:null});
 export default usePlatforms;
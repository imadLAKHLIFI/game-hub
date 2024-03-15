import useData from "./useData";

export interface Sort {
    id: number;
    name: string;
    slug: string;
}
const useSorts = () => useData<Sort>('/sorts/lists/parents');
 export default useSorts;
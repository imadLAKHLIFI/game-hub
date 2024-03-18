import useData from "./useData";

export interface Sort {
    id: number;
    odrer: string;
}
const useSorts = () => useData<Sort>('/sorts/lists/parents');
 export default useSorts;
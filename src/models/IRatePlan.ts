export default interface IRatePlan {
    code: string;
    name: string;
    family: string;
    monthlyPrice: number;
    monthlyDisplayPrice: string;
    isSelectable: boolean;
}
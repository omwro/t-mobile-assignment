export default interface IServices {
    code: string;
    name: string;
    family: string;
    monthlyPrice?: number;
    monthlyDisplayPrice?: string;
    size?: string;
    dataNationalSize?: string;
    voiceSize?: string;
    smsSize?: string;
    activationPrice?: number;
    activationDisplayPrice?: string;
    isSelectable: boolean;
}
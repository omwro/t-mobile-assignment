import IDevice from "./IDevice";
import IRatePlan from "./IRatePlan";
import IServices from "./IServices";
import IPrices from "./IPrices";
import {getCoreServiceByCode} from "../utilities/useData";

export default class Product {
    private id: string;
    private device: IDevice;
    private rateplan: IRatePlan;
    private services: IServices[];
    private prices: IPrices;

    constructor(id: string, device: IDevice, rateplan: IRatePlan, services: IServices[], prices: IPrices) {
        this.id = id;
        this.device = device;
        this.rateplan = rateplan;
        this.services = services;
        this.prices = prices;
    }

    static fromJson(json: any): Product {
        const prices: IPrices = this.pricesFromJson(json);
        const {id, device, rateplan, services} = json;
        return new Product(id, device, rateplan, services, prices);
    }

    private static pricesFromJson(json: any): IPrices {
        const {
            totalMonthlyPrice,
            totalMonthlyDisplayPrice,
            totalUpfrontPrice,
            totalUpfrontDisplayPrice,
            totalActivationPrice,
            totalActivationDisplayPrice,
            totalOneTimePrice,
            totalOneTimeDisplayPrice,
            serviceTotalMonthlyPrice,
            serviceTotalMonthlyDisplayPrice
        } = json;
        return {
            totalMonthlyPrice,
            totalMonthlyDisplayPrice,
            totalUpfrontPrice,
            totalUpfrontDisplayPrice,
            totalActivationPrice,
            totalActivationDisplayPrice,
            totalOneTimePrice,
            totalOneTimeDisplayPrice,
            serviceTotalMonthlyPrice,
            serviceTotalMonthlyDisplayPrice,
        };
    }

    getDeviceBrand(): string {
        return `${this.device.brand}`
    }

    getDeviceTitle(): string {
        return `${this.device.brand} ${this.device.model}`
    }

    getDeviceFrontImage(imageBaseUrl: string = ""): string {
        // @ts-ignore
        return `${imageBaseUrl}${this.device.media.images.find(x => x.type === "Front").url}`
    }

    getDeviceBackImage(imageBaseUrl: string = ""): string {
        // @ts-ignore
        return `${imageBaseUrl}${this.device.media.images.find(x => x.type === "Back").url}`
    }

    getDeviceStockStatus(isShort: boolean = false): string {
        const splitStockStatus = this.device.stockStatus.split(",")
        return isShort && splitStockStatus ? splitStockStatus[0] : this.device.stockStatus
    }

    getFirstServiceName(): string {
        return this.services[0].name;
    }

    getFirstServiceCode(): string {
        return this.services[0].code;
    }

    getCoreService(): any {
        return getCoreServiceByCode(this.getFirstServiceCode())
    }

    getCoreServiceMonthlyPrice(): String {
        return this.getCoreService()[0].monthlyDisplayPrice
    }

    getDeviceMonthlyPrice(): string {
        return this.prices.totalMonthlyDisplayPrice;
    }

    getDeviceUpfrontPriceText(): string {
        return `Bijbetaling toestel ${this.device.upfrontDisplayPrice}`;
    }

    getDeviceMonthlyInstallmentPrice(): string {
        return this.device.installmentPlan.monthlyDisplayPrice;
    }

    getStickerArray(): string[] {
        return this.device.sticker ? this.device.sticker.text.split(" ") : [];
    }
}
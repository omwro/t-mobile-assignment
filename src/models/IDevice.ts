export default interface IDevice {
    code: string;
    category: string;
    brand: string;
    model: string;
    modelWithMemory: string;
    modelWithMemoryAndColor: string;
    description: string;
    memory: string;
    color: {
        name: string;
        value: string;
    };
    media: {
        imageUrl: string;
        images: {
            type: string;
            url: string;
        }[];
    };
    specification: {
        summary: {
            categories: {
                image: {
                    alternateText: string;
                    height: string;
                    imageUrl: string;
                    width: string;
                    navigation: {
                        text: string;
                        url: string;
                        toolTip: string;
                        target: string;
                        openInNewWindow: boolean;
                        displayAs: string;
                        linkVariant: string;
                        urlWithoutQueryString: string;
                        urlQueryString: string;
                    };
                };
                text: string;
            }[];
        };
        categories: {
            title: string;
            icon: {
                image: {
                    alternateText: string;
                    height: string;
                    imageUrl: string;
                    width: string;
                };
            };
            characteristics: {
                name: string;
                value: string;
            }[];
        }[];
    };
    uniqueSellingPoints: string[];
    segment: string;
    screenSizeCategory: string;
    sticker: {
        text: string;
    };
    stockStatus: string;
    variations: {
        code: string;
        category: string;
        brand: string;
        model: string;
        modelWithMemory: string;
        modelWithMemoryAndColor: string;
        description: string;
        memory: string;
        color: {
            name: string;
            value: string;
        };
        media: {
            imageUrl: string;
            images: {
                type: string;
                url: string;
            }[];
        };
    }[];
    installmentPlan: {
        code: string;
        name: string;
        monthlyPrice: number;
        monthlyDisplayPrice: string;
        isSelectable: boolean;
    };
    monthlyPrice: number;
    monthlyDisplayPrice: string;
    upfrontPrice: number;
    upfrontDisplayPrice: string;
    taxPrice: number;
    taxDisplayPrice: string;
}
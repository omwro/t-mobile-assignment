import brandsJson from "../data/brands.json"
import productsJson from "../data/offering-GAP59.json"
import coreServicesJson from "../data/core-services.json"
import Product from "../models/Product";

export const getSortedBrands = () => brandsJson.sort((a, b) => a.sortOrder - b.sortOrder)
export const getProducts = () => productsJson.map(productJson => Product.fromJson(productJson))
export const getProductsByBrand = (brands: Array<string>) => brands.length > 0 ? getProducts().filter(x => brands.includes(x.getDeviceBrand())) : getProducts()
export const getCoreServiceByCode = (code: string) => coreServicesJson.filter(x => x.code === code)
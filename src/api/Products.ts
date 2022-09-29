import axiosClient from "./axiosClient";

const Products = {
	getProducts: (params = '') => axiosClient.get(`/products/list${params}`),
}

export default Products;
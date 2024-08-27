export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_GRAPHQL_URL = process.env.NEXT_PUBLIC_API_GRAPHQL_URL;
export const API_GRAPHQL_APP_ID = process.env.NEXT_PUBLIC_API_GRAPHQL_APP_ID;
export const API_GRAPHQL_KEY = process.env.NEXT_PUBLIC_API_GRAPHQL_KEY;

export const API = {
  GET_PRODUCT: `${API_URL}/product/filter/all`, // params: { min: 0, max: 10000000, per_page: 100, url_key_v2: "sua-cho-be", get_brand_info: true }
  GET_PRODUCT_DETAIL: `${API_URL}/product`,
  GET_MENU_CATEGORY: `${API_URL}/menu/category/v2`,
  GET_RELATED_PRODUCT: `${API_BASE_URL}/products_biboshop/Products/Api_BiboOffice_list_tuongtu_func?page_index=0&page_size=100&mahang=100023`,
};

export const HEADERS_API = {
  "Content-Type": "application/json",
  "X-Api-Key": `${API_GRAPHQL_KEY}`,
  "App-Cache-Id": `${API_GRAPHQL_APP_ID}`,
};

export const NAV_LINK = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot password", href: "/forgot-password" },
];

export const MOBILE_FOOTER_LINK = [
  { id: 1, label: "Trang chủ", href: "/", icon: "/icons/footer-home-active.png" },
  { id: 2, label: "Tìm kiếm", href: "/search", icon: "/icons/footer-search.png" },
  { id: 3, label: "Danh mục", href: "/category", icon: "/icons/footer-category.png" },
  { id: 4, label: "Giỏ hàng", href: "/cart", icon: "/icons/footer-cart.png" },
  { id: 5, label: "Tài khoản", href: "/user", icon: "/icons/footer-user.png" },
];

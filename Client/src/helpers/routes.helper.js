/**
 * Routes Object
 */

const PATH_ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  PERSONAL: "/dashboard",
  PERSONALDATA: "/dashboard",
  PERSONALADDRESS: "/dashboard/contact",
  PERSONALCREDENTIALS: "/dashboard/credentials",
  WISHLIST: "wish",
  SHOPPINGCART: "/cart",
  CHECKOUT: "/checkout",
  DETAIL: "/detail/:id",
  ABOUT: "/about",
  CHANGEPASSWORD: "/changepassword/:token",
  ACOUNTCONFIRMED: "/account_confirmed",
  ERROR404: "/*",

  admin: {
    STOCK: "stock",
    BRANDSCATEGORY: "brandscat",
  },
};

export default PATH_ROUTES;

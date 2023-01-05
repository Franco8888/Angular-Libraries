import { ProductsComponent } from "./products/products.component";
import { UserComponent } from "./user/user.component";

// list for declaration in main module
export const ComponentsList = [
    ProductsComponent,
    UserComponent
]

// Export out of library using public-api.ts
export * from "./user/user.component"
export * from "./products/products.component"

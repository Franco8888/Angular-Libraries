import { ProductService } from './product.service';
import { UserService } from './user.service';

// list is not necessary since if you say Provided in root then you do not have to add services in providers

// Export out of library using public-api.ts
export * from './product.service'
export * from './user.service'


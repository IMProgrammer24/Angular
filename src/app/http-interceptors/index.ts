import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthHeaderInterceptor } from "./auth-header-interceptor";

export const httpInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass:AuthHeaderInterceptor, multi:true}
];

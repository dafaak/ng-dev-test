import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from "../../../environments/environment.development";

export const authorInterceptor: HttpInterceptorFn = (req, next) => {

  const authReq = req.clone({
    setHeaders: {
      authorId: environment.AUTHOR_ID
    }
  });

  return next(authReq);
};

import { createParamDecorator, HttpException } from '@nestjs/common';
import { ExecutionContextHost } from '@nestjs/core/helpers/execution-context-host';

export const Auth = createParamDecorator(
  (data: unknown, context: ExecutionContextHost) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (user) {
      return user;
    } else {
      throw new HttpException('Unauthorized', 401);
    }
  },
);

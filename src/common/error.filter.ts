import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { ZodError } from 'zod';

@Catch(ZodError, HttpException)
export class ErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    if (exception instanceof HttpException) {
      return response.status(exception.getStatus()).json({
        error: exception.getResponse(),
      });
    } else if (exception instanceof ZodError) {
      return response.status(400).json({
        error: 'Validation error',
      });
    } else {
      return response.status(500).json({
        error: exception.message,
      });
    }
  }
}

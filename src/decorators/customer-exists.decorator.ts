import { registerDecorator, ValidationOptions } from 'class-validator';
import { CustomerExistsConstraint } from './customer-exists.constraint';

export function CustomerExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CustomerExistsConstraint,
    });
  };
}

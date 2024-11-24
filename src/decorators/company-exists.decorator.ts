import { registerDecorator, ValidationOptions } from 'class-validator';
import { CompanyExistsConstraint } from './company-exists.constraint';

export function CompanyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: CompanyExistsConstraint,
    });
  };
}

import { registerDecorator, ValidationOptions } from 'class-validator';
import { RoleExistsConstraint } from './role-exists.constraint';

export function RoleExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RoleExistsConstraint,
    });
  };
}

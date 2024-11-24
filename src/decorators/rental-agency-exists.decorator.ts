import { registerDecorator, ValidationOptions } from 'class-validator';
import { RentalAgencyExistsConstraint } from './rental-agency-exists.constraint';

export function RentalAgencyExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: RentalAgencyExistsConstraint,
    });
  };
}

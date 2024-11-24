import { registerDecorator, ValidationOptions } from 'class-validator';
import { ProposalExistsConstraint } from './proposal-exists.constraint';

export function ProposalExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ProposalExistsConstraint,
    });
  };
}

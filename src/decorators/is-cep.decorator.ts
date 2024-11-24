import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsCEP(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isCEP',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && new RegExp("(^[0-9]{5})-?([0-9]{3}$)").test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'O CEP fornecido é inválido!';
        }
      },
    });
  };
}
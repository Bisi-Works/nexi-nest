import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsRG(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isRG',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && new RegExp("(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)").test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'O RG fornecido é inválido!';
        }
      },
    });
  };
}
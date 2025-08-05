import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { checkCommonDomainTypos } from '../../mail/email-validator.util';

export function IsValidEmailDomain(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidEmailDomain',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') {
            return false;
          }
          
          const validation = checkCommonDomainTypos(value);
          if (!validation.isValid) {
            // Store the corrected email for potential use
            (args.object as any)[`${propertyName}Corrected`] = validation.correctedEmail;
            return false;
          }
          
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          const validation = checkCommonDomainTypos(args.value);
          return validation.error || 'Invalid email domain';
        },
      },
    });
  };
} 
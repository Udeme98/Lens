import { validateEmail, checkCommonDomainTypos, validateEmailFormat } from './email-validator.util';

describe('Email Validator Utils', () => {
  describe('validateEmailFormat', () => {
    it('should validate correct email formats', () => {
      expect(validateEmailFormat('test@example.com')).toBe(true);
      expect(validateEmailFormat('user.name@domain.co.uk')).toBe(true);
      expect(validateEmailFormat('test+tag@gmail.com')).toBe(true);
    });

    it('should reject invalid email formats', () => {
      expect(validateEmailFormat('invalid-email')).toBe(false);
      expect(validateEmailFormat('test@')).toBe(false);
      expect(validateEmailFormat('@domain.com')).toBe(false);
      expect(validateEmailFormat('test.domain.com')).toBe(false);
    });
  });

  describe('checkCommonDomainTypos', () => {
    it('should detect common Gmail typos', () => {
      const result = checkCommonDomainTypos('user@gmil.com');
      expect(result.isValid).toBe(false);
      expect(result.correctedEmail).toBe('user@gmail.com');
      expect(result.error).toContain('Did you mean user@gmail.com?');
    });

    it('should detect other common typos', () => {
      expect(checkCommonDomainTypos('user@hotmai.com').correctedEmail).toBe('user@hotmail.com');
      expect(checkCommonDomainTypos('user@outlok.com').correctedEmail).toBe('user@outlook.com');
      expect(checkCommonDomainTypos('user@yahooo.com').correctedEmail).toBe('user@yahoo.com');
    });

    it('should accept valid domains', () => {
      expect(checkCommonDomainTypos('user@gmail.com').isValid).toBe(true);
      expect(checkCommonDomainTypos('user@hotmail.com').isValid).toBe(true);
      expect(checkCommonDomainTypos('user@outlook.com').isValid).toBe(true);
      expect(checkCommonDomainTypos('user@yahoo.com').isValid).toBe(true);
    });
  });

  describe('validateEmail', () => {
    it('should validate correct emails', () => {
      const result = validateEmail('test@gmail.com');
      expect(result.isValid).toBe(true);
    });

    it('should detect format errors', () => {
      const result = validateEmail('invalid-email');
      expect(result.isValid).toBe(false);
      expect(result.error).toContain('Invalid email format');
    });

    it('should detect domain typos', () => {
      const result = validateEmail('test@gmil.com');
      expect(result.isValid).toBe(false);
      expect(result.correctedEmail).toBe('test@gmail.com');
      expect(result.error).toContain('Did you mean test@gmail.com?');
    });
  });
}); 
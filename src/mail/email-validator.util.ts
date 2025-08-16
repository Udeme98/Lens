// Email validation utility functions
export interface EmailValidationResult {
  isValid: boolean;
  correctedEmail?: string;
  error?: string;
}

export function validateEmailFormat(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function checkCommonDomainTypos(email: string): EmailValidationResult {
  const commonTypos: { [key: string]: string } = {
    'gmil.com': 'gmail.com',
    'gmal.com': 'gmail.com',
    'gmai.com': 'gmail.com',
    'gamil.com': 'gmail.com',
    'gmial.com': 'gmail.com',
    'hotmai.com': 'hotmail.com',
    'hotmal.com': 'hotmail.com',
    'hotmil.com': 'hotmail.com',
    'outlok.com': 'outlook.com',
    'outloook.com': 'outlook.com',
    'yahooo.com': 'yahoo.com',
    'yaho.com': 'yahoo.com',
  };

  const domain = email.split('@')[1]?.toLowerCase();
  if (domain && commonTypos[domain]) {
    const correctedEmail = `${email.split('@')[0]}@${commonTypos[domain]}`;
    return {
      isValid: false,
      correctedEmail,
      error: `Email domain typo detected. Did you mean ${correctedEmail}?`
    };
  }

  return { isValid: true };
}

export function validateEmail(email: string): EmailValidationResult {
  // First check format
  if (!validateEmailFormat(email)) {
    return {
      isValid: false,
      error: `Invalid email format: ${email}`
    };
  }

  // Then check for domain typos
  return checkCommonDomainTypos(email);
} 
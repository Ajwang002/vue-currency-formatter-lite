import { describe, it, expect } from 'vitest';
import { formatCurrency, Locales, Currencies } from './formatter';

describe('vue-currency-lite logic', () => {
  
  it('formats Indian Rupees in Lakhs correctly', () => {
    const result = formatCurrency(250000, Currencies.INR, Locales.INDIA);
    // Note: \u00A0 is a non-breaking space often used by Intl
    expect(result.replace(/\u00A0/g, ' ')).toBe('₹2,50,000.00');
  });

  it('hides the currency symbol when hideSymbol is true', () => {
    const result = formatCurrency(1000, 'USD', 'en-US', { hideSymbol: true });
    expect(result).toBe('1,000.00');
  });

  it('strips .00 when autoDecimal is true', () => {
    const result = formatCurrency(250, 'USD', 'en-US', { autoDecimal: true });
    expect(result).toBe('$250');
  });

  it('keeps decimals when autoDecimal is true but value has cents', () => {
    const result = formatCurrency(250.50, 'USD', 'en-US', { autoDecimal: true });
    expect(result).toBe('$250.50');
  });

  it('uses the cache for consecutive calls', () => {
    // This test ensures performance is optimized
    const call1 = formatCurrency(100, 'EUR', 'de-DE');
    const call2 = formatCurrency(200, 'EUR', 'de-DE');

    expect(call1).toBe('100,00\u00A0€');
    expect(call2).toBe('200,00\u00A0€');
  });
});
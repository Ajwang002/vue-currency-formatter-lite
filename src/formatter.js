import { CURRENCY_LOCALE_MAP } from "./constants";

const cache = new Map();

export const formatCurrency = (value, currency = 'USD', locale = 'en-US', options = {}) => {
  const { 
    hideSymbol = false, 
    autoDecimal = false, 
    ...rest 
  } = options;

  const targetLocale = locale || CURRENCY_LOCALE_MAP[currency] || 'en-US';

  // 1. Determine the base style
  const style = hideSymbol ? 'decimal' : 'currency';

  // 2. Handle the "hide zero after dot" logic
  // If autoDecimal is true and value is an integer, hide decimals.
  const minDecimals = autoDecimal && value % 1 === 0 ? 0 : 2;

  const config = {
    style,
    currency,
    minimumFractionDigits: minDecimals,
    maximumFractionDigits: 2,
    ...rest,
  };

  // 3. Cache the formatter instance for high performance
  const cacheKey = `${targetLocale}-${currency}-${JSON.stringify(config)}`;
  
  if (!cache.has(cacheKey)) {
    cache.set(cacheKey, new Intl.NumberFormat(targetLocale, config));
  }
  
  return cache.get(cacheKey).format(value);
};
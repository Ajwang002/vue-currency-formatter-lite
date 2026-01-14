import { formatCurrency } from './formatter';

// Composable for Script Setup
export const useCurrency = () => {
  return { format: formatCurrency };
};

// Vue Plugin
export default {
  install: (app, defaultOptions = {}) => {
    const { locale = 'en-US', currency = 'USD' } = defaultOptions;

    // Add to global properties for Options API: {{ $currency(amount) }}
    app.config.globalProperties.$currency = (value, curr, loc, opts) => {
      return formatCurrency(
        value, 
        curr || currency, 
        loc || locale, 
        opts
      );
    };

    // Provide for Composition API: const format = inject('formatCurrency')
    app.provide('formatCurrency', formatCurrency);
  }
};
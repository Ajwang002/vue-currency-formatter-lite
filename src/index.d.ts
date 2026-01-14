import { App, Plugin } from 'vue';

/**
 * Configuration options for the formatter
 */
export interface CurrencyOptions {
  /** If true, returns only the formatted number without the currency symbol. */
  hideSymbol?: boolean;
  /** If true, hides '.00' for integers but shows decimals for floats (e.g., 250.00 -> 250). */
  autoDecimal?: boolean;
  /** The minimum number of fraction digits to use. Default is 2. */
  minimumFractionDigits?: number;
  /** The maximum number of fraction digits to use. Default is 2. */
  maximumFractionDigits?: number;
}

/**
 * The core formatting function
 */
export declare function formatCurrency(
  value: number,
  currency?: string,
  locale?: string,
  options?: CurrencyOptions
): string;

/**
 * Vue Composable for use in <script setup>
 */
export declare function useCurrency(): {
  format: typeof formatCurrency;
};

/**
 * Vue Plugin registration
 */
declare const plugin: Plugin & {
  install: (app: App, defaultOptions?: { currency?: string; locale?: string }) => void;
};

export default plugin;
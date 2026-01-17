import { App, Plugin } from 'vue';

/**
 * 1. Define the specific Currency type from your choices
 */
export type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP' | 'JPY' | 'AED';

/**
 * 2. Define the specific Locale type from your choices
 */
export type LocaleName = 'USA' | 'INDIA' | 'GERMANY' | 'UK' | 'JAPAN' | 'UAE';

/**
 * 3. Define the Currency choices object
 */
export declare const Currencies: {
  readonly USD: 'USD';
  readonly INR: 'INR';
  readonly EUR: 'EUR';
  readonly GBP: 'GBP';
  readonly JPY: 'JPY';
  readonly AED: 'AED';
};

/**
 * 4. Define the Locale choices object
 */
export declare const Locales: {
  readonly USA: 'en-US';
  readonly INDIA: 'en-IN';
  readonly GERMANY: 'de-DE';
  readonly UK: 'en-GB';
  readonly JAPAN: 'ja-JP';
  readonly UAE: 'ar-AE';
};

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
  currency?: CurrencyCode | string,
  locale?: LocaleName | string,
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
  install: (app: App, defaultOptions?: { currency?: CurrencyCode | string; locale?: LocaleName | string }) => void;
};

export default plugin;
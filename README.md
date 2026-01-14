# vue-currency-formatter-lite 🪙

An ultra-lightweight (< 1KB), high-performance Vue 3 library for global currency formatting. It leverages the native `Intl.NumberFormat` API and includes an intelligent caching layer for maximum efficiency.

![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-currency-formatter-lite?color=brightgreen&label=bundle%20size)
![npm downloads](https://img.shields.io/npm/dm/vue-currency-formatter-lite?color=blue)
![npm version](https://img.shields.io/npm/v/vue-currency-formatter-lite)
![license](https://img.shields.io/github/license/Ajwang002/vue-currency-formatter-lite)

## ✨ Features

* **Zero Dependencies:** Uses native browser APIs.
* **Performance Optimized:** Caches `Intl` instances to prevent memory leaks and CPU spikes.
* **Tree-shakable:** Import only what you need.
* **Auto-Decimal:** Smartly hide `.00` for whole numbers.
* **Intellisense Support:** Includes a dictionary for Locales and Currencies.

---

## 🚀 Installation

```bash
npm install vue-currency-formatter-lite
```

## 🛠️ Usage

### 1. Global Setup

Register it as a plugin in your `main.js`.

```bash
import { createApp } from 'vue';
import App from './App.vue';
import VueCurrencyFormatter from 'vue-currency-formatter-lite';

const app = createApp(App);

// Optional: Set global defaults
app.use(VueCurrencyFormatter, {
  currency: 'USD',
  locale: 'en-US'
});

app.mount('#app');
```

### 2. Component Usage (Composition API)

Using the dictionary constants prevents typos and enables IDE autocomplete.

```bash
<script setup>
import { useCurrency, Currencies, Locales } from 'vue-currency-formatter';

const { format } = useCurrency();

const price = 250000;
</script>

<template>
  <p>{{ format(price, Currencies.INR, Locales.INDIA) }}</p>

  <p>{{ format(price, 'INR', 'en-IN', { hideSymbol: true }) }}</p>

  <p>{{ format(250, 'USD', 'en-US', { autoDecimal: true }) }}</p>
</template>
```

## ⚙️ Configuration Options

The `format` function accepts an options object:

| Option                  | Type           | Default       | Description                                                   |
| :-----------            |:-------------- | :-------------| :-------------                                                |
| `hideSymbol`            | `boolean`      | false         | If true, returns only the formatted number.                   |
| `autoDecimal`           | `boolean`      | false         | If true, hides .00 for integers but shows decimals for floats.|
| `minimumFractionDigits` | `number`       | 2             | Standard Intl property for decimal precision.                 |

## 📚 Constants Dictionary

To make development easier, we export common codes:

* **Locales:** `Locales.INDIA` (en-IN), `Locales.USA` (en-US), `Locales.GERMANY` (de-DE), etc.
* **Currencies:** `Currencies.INR`, `Currencies.USD`, `Currencies.EUR`, `Currencies.GBP`, etc.

## 🏎️ Performance Note

This library uses a **Global Instance Cache**. If you render a list of 1,000 currency items with the same locale/currency, the library creates exactly one `Intl.NumberFormat` engine and reuses it, making it significantly faster than calling native methods directly in a loop.

## 📄 License

MIT
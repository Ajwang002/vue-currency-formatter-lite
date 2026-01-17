type LocaleName = 'USA' | 'INDIA' | 'GERMANY' | 'UK' | 'JAPAN' | 'UAE' | 'FRANCE';
type LocaleValue = 'en-US' | 'en-IN' | 'de-DE' | 'en-GB' | 'ja-JP' | 'ar-AE' | 'fr-FR';
type CurrencyCode = 'USD' | 'INR' | 'EUR' | 'GBP' | 'JPY' | 'AED';


const LOCALE_CHOICES: Record<LocaleName, LocaleValue | string> = {
    USA: 'en-US',
    INDIA: 'en-IN',
    GERMANY: 'de-DE',
    FRANCE: 'fr-FR',
    UK: 'en-GB',
    JAPAN: 'ja-JP',
    UAE: 'ar-AE'
};

const CURRENCY_CHOICES: Record<CurrencyCode, string> = {
    USD: 'USD',
    INR: 'INR',
    EUR: 'EUR',
    GBP: 'GBP',
    JPY: 'JPY',
    AED: 'AED'
};

const CURRENCY_LOCALE_MAP: Record<CurrencyCode, string> = {
    USD: 'en-US',
    INR: 'en-IN',
    EUR: 'de-DE',
    GBP: 'en-GB',
    JPY: 'ja-JP',
    AED: 'ar-AE'
}


export {
    LOCALE_CHOICES,
    CURRENCY_CHOICES,
    CURRENCY_LOCALE_MAP,
    LocaleName,
    CurrencyCode,
    LocaleValue,
}
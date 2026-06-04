import type { Locale } from "./utils";

interface Dictionary {
  common: Record<string, string>;
  home: Record<string, string>;
  about: Record<string, string>;
  products: Record<string, string>;
  partner: Record<string, string>;
  contact: Record<string, string>;
}

const dictionaries = {
  ru: () => import("@/locales/ru/common.json").then((m) => m.default) as Promise<Record<string, string>>,
  en: () => import("@/locales/en/common.json").then((m) => m.default) as Promise<Record<string, string>>,
  zh: () => import("@/locales/zh/common.json").then((m) => m.default) as Promise<Record<string, string>>,
};

const homeDicts = {
  ru: () => import("@/locales/ru/home.json").then((m) => m.default) as Promise<Record<string, string>>,
  en: () => import("@/locales/en/home.json").then((m) => m.default) as Promise<Record<string, string>>,
  zh: () => import("@/locales/zh/home.json").then((m) => m.default) as Promise<Record<string, string>>,
};

const aboutDicts = {
  ru: () => import("@/locales/ru/about.json").then((m) => m.default) as Promise<Record<string, string>>,
  en: () => import("@/locales/en/about.json").then((m) => m.default) as Promise<Record<string, string>>,
  zh: () => import("@/locales/zh/about.json").then((m) => m.default) as Promise<Record<string, string>>,
};

const productsDicts = {
  ru: () => import("@/locales/ru/products.json").then((m) => m.default) as Promise<Record<string, string>>,
  en: () => import("@/locales/en/products.json").then((m) => m.default) as Promise<Record<string, string>>,
  zh: () => import("@/locales/zh/products.json").then((m) => m.default) as Promise<Record<string, string>>,
};

const contactDicts = {
  ru: () => import("@/locales/ru/contact.json").then((m) => m.default) as Promise<Record<string, string>>,
  en: () => import("@/locales/en/contact.json").then((m) => m.default) as Promise<Record<string, string>>,
  zh: () => import("@/locales/zh/contact.json").then((m) => m.default) as Promise<Record<string, string>>,
};

const partnerDicts = {
  ru: () => import("@/locales/ru/partner.json").then((m) => m.default) as Promise<Record<string, string>>,
  en: () => import("@/locales/en/partner.json").then((m) => m.default) as Promise<Record<string, string>>,
  zh: () => import("@/locales/zh/partner.json").then((m) => m.default) as Promise<Record<string, string>>,
};

export async function getDictionary(locale: Locale): Promise<Record<string, string>> {
  return dictionaries[locale]();
}

export async function getHomeDictionary(locale: Locale): Promise<Record<string, string>> {
  return homeDicts[locale]();
}

export async function getAboutDictionary(locale: Locale): Promise<Record<string, string>> {
  return aboutDicts[locale]();
}

export async function getProductsDictionary(locale: Locale): Promise<Record<string, string>> {
  return productsDicts[locale]();
}

export async function getContactDictionary(locale: Locale): Promise<Record<string, string>> {
  return contactDicts[locale]();
}

export async function getPartnerDictionary(locale: Locale): Promise<Record<string, string>> {
  return partnerDicts[locale]();
}

export type { Dictionary };

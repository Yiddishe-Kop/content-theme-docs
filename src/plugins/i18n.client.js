export default function ({ app, store }) {
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    document.body.setAttribute('dir', newLocale == 'he' ? 'rtl' : 'ltr')
    store.dispatch('fetchCategories')
  }
}

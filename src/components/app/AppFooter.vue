<template>
  <footer class="relative z-20 w-full h-16 bg-white border-t dark:border-gray-800 dark:bg-gray-900">
    <div class="container flex items-center justify-between w-full h-full px-4 mx-auto lg:px-8">
      <AppLangSwitcher />
      <AppColorSwitcher />
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

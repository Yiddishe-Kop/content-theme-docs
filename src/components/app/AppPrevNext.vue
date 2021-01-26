<template>
  <div
    v-if="prev || next"
    class="grid grid-cols-2 gap-2 border-t dark:border-gray-800"
    :class="{
      'lg:border-t-0': settings.layout === 'single'
    }"
  >
    <NuxtLink
      v-if="prev"
      :to="localePath(prev.to)"
      class="flex items-center justify-start py-4 font-bold text-primary-500 hover:bg-primary-100 dark-hover:bg-primary-900 lg:ps-8"
    >
      <IconArrowLeft class="flex-shrink-0 w-4 h-4 me-2" :class="{'transform rotate-180': $i18n.locale == 'he'}" />
      <span class="truncate">{{ prev.title }}</span>
    </NuxtLink>
    <span v-else>&nbsp;</span>

    <NuxtLink
      v-if="next"
      :to="localePath(next.to)"
      class="flex items-center justify-end py-4 font-bold text-primary-500 hover:bg-primary-100 dark-hover:bg-primary-900 lg:pe-8"
    >
      <span class="truncate">{{ next.title }}</span>
      <IconArrowRight class="flex-shrink-0 w-4 h-4 ms-2" :class="{'transform rotate-180': $i18n.locale == 'he'}"/>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    ...mapGetters([
      'settings'
    ])
  }
}
</script>

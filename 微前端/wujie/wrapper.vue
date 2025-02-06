<template>
  <keep-alive :exclude="exclude">
    <component :is="wrap(route.fullPath, com)" :key="route.fullPath" v-if="route.meta.keepAlive" />
  </keep-alive>
</template>

<script setup>
import { h } from "vue";

const props = defineProps({
  com: {
    type: Object,
  },
  route: {
    type: Object,
  },
  exclude: {
    type: Array,
  },
});

const wrapperMap = new Map();

const wrap = (fullPath, component) => {
  let wrapper;
  const wrapperName = fullPath;
  if (wrapperMap.has(wrapperName)) {
    wrapper = wrapperMap.get(wrapperName);
  } else {
    wrapper = {
      name: wrapperName,
      render() {
        return h("div", {}, component);
      },
    };
    wrapperMap.set(wrapperName, wrapper);
  }
  return h(wrapper);
};
</script>

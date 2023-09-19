<template>
  <div class="home">
    <Header />
    <Menu />
  </div>
</template>

<script>
import "@/assets/styles/base.styl";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components: {
    Header,
    Menu,
  },
};
</script>

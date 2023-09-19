<template>
  <div class="app-menu">
    <div v-if="sec != 'menu'" v-on:click="sec = 'menu'" class="menu-back">
      <em class="fas fa-arrow-left"></em>
      Geri dön
    </div>
    <MenuItems v-if="sec == 'menu'" v-bind:changeSec="changeSec" />
    <EditText v-if="sec == 'edit-text'" v-bind:changeSec="changeSec" />
    <Recipes v-if="sec == 'recipes'" v-bind:changeSec="changeSec" />
    <FoodIdeas v-if="sec == 'food-ideas'" v-bind:changeSec="changeSec" />
    <FindImage v-if="sec == 'find-image'" v-bind:changeSec="changeSec" />
    <FindBook v-if="sec == 'find-book'" v-bind:changeSec="FindBook" />
    <FindSeries v-if="sec == 'find-series'" v-bind:changeSec="FindSeries" />
    <FindMovies v-if="sec == 'find-movies'" v-bind:changeSec="FindMovies" />
    <CreativeIdeas
      v-if="sec == 'creative-ideas'"
      v-bind:changeSec="CreativeIdeas"
    />
    <FindQuestions
      v-if="sec == 'find-questions'"
      v-bind:changeSec="FindQuestions"
    />
  </div>
</template>

<script>
import MenuItems from "@/components/Other/MenuItems";
import EditText from "@/components/EditText";
import Recipes from "@/components/Recipes";
import FoodIdeas from "@/components/FoodIdeas";
import FindImage from "@/components/FindImage";
import FindBook from "@/components/FindBook";
import FindSeries from "@/components/FindSeries";
import FindMovies from "@/components/FindMovies";
import FindQuestions from "@/components/FindQuestions";
import CreativeIdeas from "@/components/CreativeIdeas";
export default {
  name: "Menu",
  data() {
    return {
      sec: "menu",
    };
  },
  methods: {
    changeSec(type) {
      this.sec = type;
    },
  },
  components: {
    MenuItems,
    EditText,
    Recipes,
    FoodIdeas,
    FindImage,
    FindBook,
    FindSeries,
    FindMovies,
    FindQuestions,
    CreativeIdeas,
  },
  mounted() {},
};
</script>

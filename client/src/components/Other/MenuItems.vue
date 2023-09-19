<template>
  <div class="items">
    <a v-on:click="changeSec('edit-text')">
      <span class="title-1">İmla hatalarını düzelt</span>
      <span class="title-2"
        >Elindeki yazıyı ( paragraf ) girerek imla düzeltmesi
        yapabilirsin.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('find-image')">
      <span class="title-1">Resim bul</span>
      <span class="title-2"
        >Anahtar kelimelerinizi girin ve bu kelimelerin içinde geçen
        fotoğrafları bulun</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('creative-ideas')">
      <span class="title-1">Yaratıcı fikirler bulun</span>
      <span class="title-2"
        >Yaratıcı fikirlere ulaşmak istediğiniz kelimeyi yazın ve fikir
        örnekleri elde edin</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('find-questions')">
      <span class="title-1">Röportajınız için soru oluşturun</span>
      <span class="title-2"
        >Röportajınızın konusu girin ve röportajınız hakkında en iyi soruları
        bulun.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('find-book')">
      <span class="title-1">En iyi kitapları bul</span>
      <span class="title-2"
        >Okumak istediğiniz kitabın kategorisini girin ve en iyi kitapları
        bulun.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('find-series')">
      <span class="title-1">En iyi dizileri bul</span>
      <span class="title-2"
        >İzlemek istediğiniz dizinin kategorisini girin ve en iyi dizileri
        bulun.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('find-movies')">
      <span class="title-1">En iyi filmleri bul</span>
      <span class="title-2"
        >İzlemek istediğiniz filmin kategorisini girin ve en iyi filmleri
        bulun.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('recipes')">
      <span class="title-1">Yemek tarifi al</span>
      <span class="title-2"
        >Yapmak istediğin yemeğin adını girerek, yemek tarifine
        ulaşabilirsin.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
    <a v-on:click="changeSec('food-ideas')">
      <span class="title-1">Yemek fikri al</span>
      <span class="title-2"
        >Elindeki malzemeleri girerek, kolayca yemek fikri alabilirsin.</span
      >
      <span class="title-3"
        >Devam et <em class="fas fa-arrow-right"></em>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: "MenuItems",
  props: ["changeSec"],
  mounted() {},
};
</script>

<style></style>

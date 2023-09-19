<template>
  <div id="popup">
    <div class="c">
      <div class="title">
        <span>Bilgilendirme</span>
        <span v-on:click="closePopup">
          <em class="fas fa-times"></em>
          kapat
        </span>
      </div>
      <div v-if="type == 'fix'" class="type-title">
        <em class="fas fa-check"></em> Metin içerisinde bulunan imla hataları
        düzeltildi.
      </div>
      <div v-if="type == 'recipes'" class="type-title">
        <em class="fas fa-check"></em> Yemek tarifi alındı.
      </div>
      <div v-if="type == 'food'" class="type-title">
        <em class="fas fa-check"></em> Yemek fikirleri alındı.
      </div>
      <div v-if="type == 'image'" class="type-title">
        <em class="fas fa-check"></em> Resimler bulundu.
      </div>
      <div v-if="type == 'book'" class="type-title">
        <em class="fas fa-check"></em> Kitaplar bulundu.
      </div>
      <div v-if="type == 'series'" class="type-title">
        <em class="fas fa-check"></em> Diziler bulundu.
      </div>
      <div v-if="type == 'movies'" class="type-title">
        <em class="fas fa-check"></em> Filmler bulundu.
      </div>
      <div v-if="type == 'questions'" class="type-title">
        <em class="fas fa-check"></em> Sorular Hazırlandı.
      </div>
      <div v-if="type == 'creative-ideas'" class="type-title">
        <em class="fas fa-check"></em> Yaratıcı fikirler bulundu.
      </div>
      <div class="content">
        <textarea
          v-if="type != 'image'"
          readonly
          ref="cElement"
          rows="7"
          v-model="message"
        ></textarea>
        <div v-if="type == 'image'" class="images">
          <div v-for="value in content" v-bind:key="value" class="item">
            <img v-bind:src="value.url" alt="" />
            <p>
              <a target="_blank" v-bind:href="value.url"
                >Görüntüle <em class="fas fa-arrow-right"></em>
              </a>
            </p>
          </div>
        </div>
        <div v-if="type != 'image'" class="copy-btn-w">
          <p v-if="copySec == true">Kopyaland!</p>
          <span v-if="copySec == false" v-on:click="copyResult" class="copy">
            <em class="fas fa-copy"></em>
            Kopyala
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      message: "",
      copySec: false,
    };
  },
  props: ["type", "content", "closePopup"],
  methods: {
    copyResult() {
      const element = this.$refs.cElement;
      element.select();
      element.setSelectionRange(0, 99999);
      document.execCommand("copy");
      this.copySec = true;
    },
  },
  mounted() {
    this.message = this.content;
  },
};
</script>

<style></style>

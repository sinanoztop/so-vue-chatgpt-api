<template>
  <div id="edit-text-w">
    <SystemNatC
      v-if="errorType != ''"
      v-bind:type="errorType"
      v-bind:content="errorContent"
    />
    <Popup
      v-if="postRes"
      v-bind:closePopup="closePopup"
      type="book"
      v-bind:content="postResC"
    />
    <div class="menu-option-title">
      <div class="left">
        <span><em class="fas fa-list"></em></span>
      </div>
      <div class="right">
        <span>En iyi kitapları bul</span>
        <p>
          Okumak istediğiniz kitabın kategorisini aşağıdaki alana yazın ve
          <b>devam et </b> butonuna tıklayın.
        </p>
      </div>
    </div>
    <div class="menu-option-content">
      <div class="form-item">
        <input
          type="text"
          ref="inputEl"
          v-on:focus="textFocus"
          v-model="text"
          placeholder="Örneğin; bilim kurgu"
        />
        <span class="example-form-text">Örnek: bilim kurgu</span>
      </div>
      <div class="form-item">
        <PostLoading v-if="loading == true" v-bind:content="loadingText" />
        <button v-if="loading == false" v-on:click="create" type="submit">
          Devam et <em class="fas fa-angle-right"></em>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SystemNatC from "@/components/Other/SystemNatC";
import SystemNat from "@/mixins/SystemNat";
import Popup from "@/components/Other/Popup";
import PostLoading from "@/components/Other/PostLoading";
export default {
  name: "FindImage",
  props: ["changeSec"],
  components: { SystemNatC, Popup, PostLoading },
  mixins: [SystemNat],
  data() {
    return {
      text: "",
      loading: false,
      loadingText:
        "ChatGPT sizin için işlemleri gerçekleştiriyor. Lütfen bekleyiniz...",
      postRes: false,
      postResC: "",
    };
  },
  methods: {
    async create() {
      let _length = this.text.length;
      if (_length == 0) {
        this.errorType = "error";
        this.errorContent = "Lütfen bir kelime giriniz.";
      } else {
        let _data = {
          text: this.text,
          type: "book",
        };
        this.loading = true;
        axios
          .post(process.env.VUE_APP_API_URL + "text/fix", _data)
          .then((res) => {
            let _res = res.data;
            setTimeout(() => {
              this.loading = false;
              if (_res.result == "success") {
                this.postRes = true;
                this.postResC = _res.message;
              }
              if (_res.result == "error") {
                this.errorType = "error";
                this.errorContent =
                  "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyiniz";
                this.postRes = false;
                this.loading = false;
              }
            }, 1200);
          })
          .catch(() => {
            this.errorType = "error";
            this.errorContent =
              "İşlem gerçekleştirilemedi. Lütfen daha sonra tekrar deneyiniz";
            this.postRes = false;
            this.loading = false;
          });
      }
    },
    textFocus() {
      this.errorType = "";
      this.errorContent = "";
    },
    closePopup() {
      this.postRes = false;
      this.text = "";
      this.$refs.inputEl.focus();
    },
  },
  mounted() {
    this.$refs.inputEl.focus();
  },
};
</script>

<template>
  <div id="app-header">
    <div class="sec-left">
      <a href="" class="logo">@yapayzeka <span>beta / v1.0</span> </a>
      <p>{ {{ model }} }</p>
    </div>
    <div class="sec-right">
      <div v-on:click="changeTheme" class="theme-mod">
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <g class="style-scope yt-icon">
            <path
              d="M280.485281,201.514719 L284,198 L287.514719,201.514719 L292.485281,201.514719 L292.485281,206.485281 L296,210 L292.485281,213.514719 L292.485281,218.485281 L287.514719,218.485281 L284,222 L280.485281,218.485281 L275.514719,218.485281 L275.514719,213.514719 L272,210 L275.514719,206.485281 L275.514719,201.514719 L280.485281,201.514719 Z M283.726536,215.86375 C287.116026,215.86375 289.86375,213.251451 289.86375,210.029016 C289.86375,206.806581 287.116026,204.194281 283.726536,204.194281 C283.073662,204.194281 282.164855,204.396254 281.000116,204.800201 C282.532112,206.378393 283.29811,208.121331 283.29811,210.029016 C283.29811,211.9367 282.444938,213.635948 280.738594,215.126758 C282.007413,215.618086 283.003393,215.86375 283.726536,215.86375 Z"
              transform="translate(-272, -198)"
            ></path>
          </g>
        </svg>
        <span> {{ theme == "dark" ? "Klasik Mod" : "Dark Mod" }} </span>
      </div>
      <div class="user">
        <a href="">
          <em class="far fa-user"></em>
          <span>Giriş yap</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      model: "",
      theme: "classic",
    };
  },
  methods: {
    changeTheme() {
      if (this.theme == "classic") {
        this.theme = "dark";
        document.body.classList.add("dark");
      } else {
        this.theme = "classic";
        document.body.classList.remove("dark");
      }
    },
  },
  mounted() {
    this.model = process.env.VUE_APP_GPT_MODEL;
  },
};
</script>

import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      reviews: [],
      sliderOptions: {
        slidesPerView: 2,
        loop: false
      },
      buttons: {
        prev: false,
        next: true
      }
    };
  },
  computed: {
    slider() {
      return this.$refs["slider"].$swiper
    }
  },
  methods: {
    requireImagesToArray(data) {
      return data.map((item) => {
        const requiredImage = require(`../images/content/${item.pic}`).default;
        item.pic = requiredImage;
        return item;
      });
    },
    slide(direction) {
      switch (direction) {
        case "next":
          this.slider.slideNext();
          break;
        case "prev":
          this.slider.slidePrev();
          break;
      }
    },
  },
  mounted() {
    this.slider.on("slideChange", (swiper) => {
      this.buttons.prev = !swiper.isBeginning;
      this.buttons.next = !swiper.isEnd;
    });

    console.log(this);
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.requireImagesToArray(data);
  },
});

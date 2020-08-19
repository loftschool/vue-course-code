<template>
  <div class="user-component">
    <avatar size="2.7" :src="userPic" />
    <div class="username">Владимир Астаханов</div>
  </div>
</template>

<script>
import avatar from "../avatar";

export default {
  components: {
    avatar,
  },
  computed: {
    userPic() {
      return require("../../../images/content/user.jpg").default;
    },
  },
};
</script>

<style lang="postcss">
.user-component {
  display: flex;
  font-size: 18px;
  font-weight: 600;
  align-items: center;
  color: #fff;
}

.username {
  margin-left: 10px;
}
</style>

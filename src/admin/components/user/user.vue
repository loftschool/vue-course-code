<template>
  <div class="user-component">
    <avatar size="2.7" :src="userPic" class="avatar" />
    <div class="username">Владимир Астаханов</div>
  </div>
</template>

<script>
import avatar from "../avatar";

export default {
  components: { avatar },
  computed: {
    userPic() {
      return require("../../../images/content/user.jpg").default;
    },
  },
};
</script>

<style lang="postcss">
.user-component {
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #fff;
}
.avatar {
  margin-right: 10px;
}

</style>

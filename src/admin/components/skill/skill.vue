<template>
  <div class="skill-component" v-if="editmode === false">
    <div class="title">{{skill.title}}</div>
    <div class="percent">{{skill.percent}} %</div>
    <div class="buttons">
      <icon symbol="pencil" class="btn" grayscale @click="editmode = true" />
      <icon symbol="trash" class="btn" @click="$emit('remove', skill)" grayscale />
    </div>
  </div>
  <div class="skill-component editmode" v-else>
    <div class="title">
      <app-input no-side-paddings v-model="currentSkill.title"/>
    </div>
    <div class="percent">
      <div class="percent-input">
        <app-input type="number" min="0" max="100" maxlength="3" v-model="currentSkill.percent" />
      </div>
    </div>
    <div class="buttons">
      <icon class="btn" symbol="tick"  @click="$emit('approve', skill)"/>
      <icon class="btn" symbol="cross" @click="editmode = false"/>
    </div>
  </div>
</template>

<script>
  import input from "../input";
  import icon from "../icon"
  export default {
    props: {
      skill: {
        type: Object,
        default: () => {},
        required: true
      }
    },
    components: {
      icon,
      appInput: input
    },
    data() {
      return {
        editmode: false,
        currentSkill: {
          id: this.skill.id,
          title: this.skill.title,
          percent: this.skill.percent
        }
      }
    }
  }
</script>

<style lang="postcss" src="./skill.pcss"></style>


<template>
  <div
    data-testid="base-checkbox"
    :class="
      [
        `${baseClassName}`,
        {[`${baseClassName}--disabled`] : disabled}
      ]"
    @click="toggleChecked"
  >
    <div :class="`${baseClassName}__control`">
      <v-icon v-if="!isChecked" :class="`${baseClassName}__control-icon`" size="16">
        mdi-minus
      </v-icon>
      <v-icon v-else :class="`${baseClassName}__control-icon--checked`" size="16">
        mdi-plus
      </v-icon>
    </div>
    <div :class="`${baseClassName}__label`">
      <span v-if="isRequired" :class="`${baseClassName}__required`">*</span>
      <span v-if="label" :class="`${baseClassName}__text`"> {{ label }} </span>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class BaseCheckbox extends Vue {
    @Prop() isRequired: boolean

    @Prop() checked: boolean

    @Prop() label: string

    @Prop() disabled:  boolean

    name: string = 'Basecheckbox'
    isChecked: boolean = false

    mounted() {
      this.isChecked = this.checked
    }

    get baseClassName() {
      return 'base-checkbox';
    }

    toggleChecked() {
      this.isChecked = !this.isChecked;
    }
}
</script>

<style scoped lang="scss">
  .base-checkbox {
    display: flex;
    padding: 3px;
    cursor: pointer;
    user-select: none;

    &__control {
      &-icon {
        margin-right: 5px;
        stroke: grey;
        fill: white;
      }

      &-icon--checked {
        margin-right: 5px;
        fill: black;
       }
    }

    &:hover {
      .base-checkbox__control {
        &-icon {
          stroke: black;
        }
      }
    }

    &--disabled {
      color: darkgray;
      pointer-events: none;

      .base-checkbox__control {
        &-icon--checked {
          fill: gray;
        }

        &-icon {
          stroke: gray;
        }
      }
    }

    &__label{
      padding-top:1px;
    }

    &__required{
        color: red;
      }

    &__text {
        display: inline-block;
        word-break: break-word;
    }
  }
</style>

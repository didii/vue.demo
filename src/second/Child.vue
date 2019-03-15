<template>
    <div id="itsme" data-component='child' class="child">
        <button @click='increment'>Increment</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component
export default class Child extends Vue {
    // The @Prop attribute defines a property. A parent can now provide this value
    // Note the BANG (!) operator. This is needed for the typescript compiler
    @Prop({}) public count!: number;

    // The @Emit attribute defines an emitter which will emit the returned value to
    // the parent. The parent can listen to this change by listening to the 'increment'
    // event. The attribute simply appends this.$emit('increment', returnedValue); to the
    // method.
    // Note that when using the Vue extension for chrome, you'll see this event in the event tab
    @Emit() public increment() {
        return this.count + 1;
    }
}
</script>
<template>
    <div id='childbutton'>
        <button @click='onClick'>Increment</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IData } from './Data';

@Component
export default class ChildButton extends Vue {
    // The @Prop attribute defines a property. A parent can now provide this value
    // Note the BANG (!) operator. This is needed for the typescript compiler
    @Prop({ type: Object, required: true }) public data!: IData;

    // Just a simple action that is fired on the click of the button
    // Note that we don't emit anything to our parent, since the data
    // object is shared between this component and its parent, Vue will
    // re-render the parent component too if it uses that value
    private onClick() {
        this.data.count++;
    }
}
</script>

<style scoped>
</style>
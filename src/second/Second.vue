<template>
    <div data-component="second">
        <p>Count: {{count}}</p>
        <child id="itsyou" class="blah" :count="count" @increment="onIncrement" />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Child from './Child.vue';

@Component({
    components: {
        Child,
    },
})
export default class Second extends Vue {
    // The count variable to be shown on the screen
    private count: number = 0;

    // Event that the child component fires when the value was changed
    private onIncrement(value: number) {
        this.count = value;
    }
}
</script>
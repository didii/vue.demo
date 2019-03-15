<template>
    <div>
        <p>Count: {{myData.count}} | other: {{myData.otherCount}} | value: {{myData.value}}</p>
        <child-button :data="myData" class="form-control" />
        <button @click="increment">Increment other</button>
        <input v-model="myData.value">
        <p>{{sum}}</p>
    </div>
</template>

<script lang="ts">
// Note the above lang="ts"
// We can change the language used for each component if you'd like
// Makes it easy to for example migrate from a JS project to TS gradually
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IData } from './Data';
import ChildButton from './ChildButton.vue';

@Component({
    components: {
        ChildButton,
    }
})
export default class First extends Vue {
    // Any data property, not fixed to a single object as this
    private myData: IData = { count: 0, otherCount: 5, value: '' };

    // A computed property, only if this.myData.count or this.myData.otherCount the sum will be computed again.
    private get sum(): number {
        const sum = this.myData.count + this.myData.otherCount;
        console.log('Computed! Value: ' + sum);
        return sum;
    }

    // Just a simple method, note that no call to any refresh state or such is used
    // Vue will automatically see the changes in the model and update its view accordingly
    private increment() {
        this.myData.otherCount++;
    }
}
</script>

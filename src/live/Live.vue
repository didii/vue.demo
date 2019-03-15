<template>
    <div data-component="live">
        Component Live works!
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Live extends Vue {
    
}
</script>
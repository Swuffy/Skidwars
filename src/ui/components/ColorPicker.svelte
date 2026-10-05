<script lang="ts">
    let { value = $bindable('#ffffff'), noMargin = false } = $props();
</script>

<input type="color" class:noMargin style="--value: {value}" bind:value>

<style>
    input {
        appearance: none;
        position: relative;
    	background: none;
    	width: 20px;
    	height: 12px;
    	border: 1px solid var(--value);
        margin-left: auto;

        background: var(--value);
    }

    input.noMargin {
        margin-left: 0;
    }

    input::-moz-color-swatch {
        display: none;
    }
</style>

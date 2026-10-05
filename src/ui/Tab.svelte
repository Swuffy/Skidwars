<script lang="ts">
    let { index = 0, active = $bindable(0), children = null } = $props();
</script>

<button class="tab {active === index ? 'active' : ''}" onclick={() => (active = index)}>
    {@render children?.()}
</button>

<style>
    .tab {
        color: #fff;
        font-size: 14px;

        margin: 0;
        padding: 10px;
        border: none;
        background: none;
        outline: none;
    }

    .active {
        color: var(--accent);
    }
</style>

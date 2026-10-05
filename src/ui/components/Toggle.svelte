<script lang="ts">
    let { checked = $bindable(false), labelOnly = false, children = null } = $props();
</script>

<label class="toggle">
    <input type="checkbox" class:labelOnly bind:checked>

    {@render children?.()}
</label>

<style>
    .toggle {
        display: flex;
        align-items: center;
        color: #fff;
        gap: 10px;
        height: 17px;
        font-size: 12px;
        margin-bottom: 5px;
        white-space: nowrap;
    }

    input {
        appearance: none;
        margin: 0;
        padding: 0;
        width: 12px;
        height: 12px;
        border: 1px solid var(--accent);
    }

    input.labelOnly {
        pointer-events: none;
        opacity: 0;
    }

    input:checked {
        background: var(--accent);
    }
</style>

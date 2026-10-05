<script lang="ts">
    let { selectValue = $bindable(''), showDropdown = $bindable(false), value = '', children = null } = $props();

    let selected = $derived(value && (Array.isArray(selectValue) && selectValue.includes(value) || selectValue === value));

    function toggle(event: MouseEvent) {
        if (!value) {
            showDropdown = !showDropdown;
            return;
        }

        if (!Array.isArray(selectValue)) {
            selectValue = value;
            showDropdown = false;
            return;
        }

        let index = selectValue.indexOf(value);

        if (index == -1) selectValue.push(value);
        else selectValue.splice(index, 1);

        selectValue = selectValue; // Svelte fix, trigger reactivity
    }
</script>

<button onclick={toggle} class:value class:selected>
    {@render children?.()}
</button>

<style>
    button {
    	outline: none;
    	background: none;
    	color: #fff;
        text-align: left;
        font-size: 12px;
    	border: 1px solid var(--accent);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    button.selected {
        color: var(--accent);
    }

    button.value {
        border: none;
    }
</style>

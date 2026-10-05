<script lang="ts">
    import OptionInternal from './OptionInternal.svelte';

    let { value = $bindable(''), noMargin = false, options = [] } = $props();

    let self: HTMLDivElement;

    let show = $state(false);
    let multiple = $derived(Array.isArray(value));

    let formattedValue = $derived.by(() => {
        if (Array.isArray(value)) return optionNames(value);
        return options.find(o => o.value === value).name;
    });

    function optionNames(value: string[]) {
        let names = [];

        for (let i = 0; i < options.length; i++) {
            if (value.includes(options[i].value)) {
                names.push(options[i].name);
            }
        }

        return names.length ? names.join(', ') : 'None';
    }
</script>

<svelte:document onclick={(event) => {
    if (self.isSameNode(event.target) || self.contains(event.target)) return;
    show = false;
}} />

<div bind:this={self} class="select" class:noMargin>
    <OptionInternal bind:showDropdown={show}>{formattedValue}</OptionInternal>
    <div class="dropdown" class:show>
        {#each options as option}
            <OptionInternal bind:showDropdown={show} bind:selectValue={value} value={option.value}>
                {option.name}
            </OptionInternal>
        {/each}
    </div>
</div>

<style>
    .select {
        width: 150px;
    }

    .select, .dropdown {
    	display: flex;
    	flex-direction: column;
    }

    .select {
    	margin-left: auto;
    	position: relative;
    }

    .select.noMargin {
        margin-left: 0;
    }

    .dropdown {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;

        background: #222;
        z-index: 10101010;

        width: calc(100% - 2px);
        border: 1px solid var(--accent);
    }

    .dropdown.show {
        display: flex;
    }
</style>

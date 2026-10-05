<script lang="ts">
    import Tab from './Tab.svelte';

    import Aim from './tabs/Aim.svelte';
    import Visual from './tabs/Visual.svelte';
    import World from './tabs/World.svelte';
    import Misc from './tabs/Misc.svelte';

    import config from '../config.svelte';
    import { onMount } from 'svelte';

    let tabIndex = $state(0);
    let tabs = [Aim, Visual, World, Misc];

    let ActiveTab = $derived(tabs[tabIndex]);
    let self: HTMLDivElement;

    let offsetX = $state(0);
    let offsetY = $state(0);

    function mousemove(event: MouseEvent) {
        let bounds = self.getBoundingClientRect();

        let maxX = window.innerWidth - (bounds.right - bounds.left);
        let maxY = window.innerHeight - (bounds.bottom - bounds.top);

        config.windowX = Math.max(0, Math.min(maxX, event ? event.clientX - offsetX : config.windowX));
        config.windowY = Math.max(0, Math.min(maxY, event ? event.clientY - offsetY : config.windowY));
    }

    function dragStart(event: MouseEvent) {
        event.preventDefault();

        let bounds = self.getBoundingClientRect();

        offsetX = event.clientX - bounds.left;
        offsetY = event.clientY - bounds.top;

        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', dragEnd);
    }

    function dragEnd() {
        document.removeEventListener('mousemove', mousemove);
    }

    onMount(() => mousemove());
</script>

<svelte:window onresize={() => mousemove()} />

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div bind:this={self} class="holder" oncontextmenu={dragStart} style="left: {config.windowX}px; top: {config.windowY}px">
    <div class="tabs">
        <!-- Button used here to keep text aligned with tabs -->
        <button class="name">0RGY v0.0.0</button>

        <Tab bind:active={tabIndex} index={0}>aim</Tab>
        <Tab bind:active={tabIndex} index={1}>visual</Tab>
        <Tab bind:active={tabIndex} index={2}>world</Tab>
        <Tab bind:active={tabIndex} index={3}>misc</Tab>
    </div>
    <div class="tab-content">
        <ActiveTab />
    </div>
</div>

<style>
    .holder {
        --accent: deeppink;

        z-index: 101010;
        user-select: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 400px;
        height: 300px;
        background: #222;
        font-family: monospace;
    }

    .name {
        color: var(--accent);

        padding: 10px;
        margin-right: 10px;
        font-size: 14px;

        pointer-events: none;
        background: none;
        outline: none;
        border: none;

        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .tabs {
        display: flex;
        border-bottom: 2px solid var(--accent);
    }

    .tab-content {
        padding: 10px;
    }
</style>

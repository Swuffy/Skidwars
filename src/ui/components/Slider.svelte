<script lang="ts">
    let { value = $bindable(50), noMargin = false, min = 0, max = 100 } = $props();
    let progress = $derived((value - min) / (max - min) * 100);

    let slider: HTMLDivElement;

    function mousemove(event: MouseEvent) {
        let bounds = slider.getBoundingClientRect();
        let progress = Math.max(0, Math.min(1, (event.clientX - bounds.left) / (bounds.right - bounds.left)));

        value = progress * (max - min) + min;
    }

    function slideStart() {
        document.addEventListener('mousemove', mousemove);
        document.addEventListener('mouseup', slideEnd);
    }

    function slideEnd() {
        document.removeEventListener('mousemove', mousemove);
    }
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div bind:this={slider} class="slider" class:noMargin style="--progress: {progress}%" onmousedown={slideStart}></div>

<style>
    .slider {
        position: relative;
    	background: none;
    	width: 150px;
    	height: 12px;
    	border: 1px solid var(--accent);
        margin-left: auto;
    }

    .slider.noMargin {
        margin-left: 0;
    }

    .slider::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: var(--accent);
        width: var(--progress);
        height: 100%;
    }
</style>

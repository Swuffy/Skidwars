<script lang="ts">
    import Toggle from '../components/Toggle.svelte';
    import Slider from '../components/Slider.svelte';
    import Select from '../components/Select.svelte';
    import ColorPicker from '../components/ColorPicker.svelte';

    import config from '../../config.svelte';
</script>

<Toggle labelOnly>
    Multi-element example
    <Slider bind:value={config.numberValue}></Slider>
    <ColorPicker noMargin bind:value={config.colorValue}></ColorPicker>
</Toggle>

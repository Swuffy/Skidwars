<script lang="ts">
    import Toggle from '../components/Toggle.svelte';
    import Slider from '../components/Slider.svelte';
    import Select from '../components/Select.svelte';
    import ColorPicker from '../components/ColorPicker.svelte';

    import config from '../../config.svelte';
</script>

<Toggle bind:checked={config.booleanValue}>
    Checkbox example
    <Slider bind:value={config.numberValue}></Slider>
</Toggle>

<Toggle labelOnly>
    Label-only example
    <Slider bind:value={config.numberValueB}></Slider>
</Toggle>

<Toggle labelOnly>
    Dropdown example
    <Select options={[
        { name: 'Head', value: 'head' },
        { name: 'Body', value: 'body' },
        { name: 'Feet', value: 'feet' },
    ]} bind:value={config.stringValue}></Select>
</Toggle>

<Toggle labelOnly>
    Multiselect example
    <Select options={[
        { name: 'Head', value: 'head' },
        { name: 'Body', value: 'body' },
        { name: 'Feet', value: 'feet' },
    ]} bind:value={config.arrayValue}></Select>
</Toggle>

<Toggle labelOnly>
    Color picker example
    <ColorPicker bind:value={config.colorValue}></ColorPicker>
</Toggle>

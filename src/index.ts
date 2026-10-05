import GUI from './ui/GUI.svelte';
import { mount } from 'svelte';

function hai() {
    let target = document.createElement('div');
    document.documentElement.append(target);

    mount(GUI, { target });
}

document.addEventListener('DOMContentLoaded', hai);
if (document.readyState === 'complete') hai();

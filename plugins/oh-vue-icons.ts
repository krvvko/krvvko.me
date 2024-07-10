import { defineNuxtPlugin } from '#app'
import { OhVueIcon, addIcons } from 'oh-vue-icons';

import {
    BiGithub, FaGlobeAmericas,
    HiArrowSmUp,
    HiDesktopComputer,
    MdWavinghandOutlined,
    MdWorkoutlineTwotone
} from 'oh-vue-icons/icons';

export default defineNuxtPlugin((nuxtApp) => {
    addIcons(
        HiDesktopComputer,
        MdWorkoutlineTwotone,
        MdWavinghandOutlined,
        HiArrowSmUp,
        BiGithub,
        FaGlobeAmericas
    );

    nuxtApp.vueApp.component('VIcon', OhVueIcon);
});
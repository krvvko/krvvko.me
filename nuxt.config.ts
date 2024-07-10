export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        "@nuxtjs/i18n",
        "@pinia/nuxt"
    ],
    components: true,
    plugins: [
        '~/plugins/oh-vue-icons.ts'
    ],
    i18n: {
        vueI18n: './i18n.config.ts'
    },
    ssr: false,
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        head: {
            meta: [
                { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
                { name: 'X-UA-Compatible', content: '"ie=edge' },
            ],
        }
    },
    runtimeConfig: {
        public: {
            BASE_URL: process.env.BASE_URL
        }
    },
    css: [
        '~/assets/css/variables.css',
        '~/assets/css/init.css',
        '~/assets/css/transition.css',
    ]
})
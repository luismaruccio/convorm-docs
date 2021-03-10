const withNextra = require('nextra')('nextra-theme-docs', './theme.config.js')
module.exports = withNextra({
    i18n : {
        locales : ['en-US', 'pt-BR'],
        defaultLocale : 'en-US'
    }
})

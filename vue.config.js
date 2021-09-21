module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    configureWebpack: {
        resolve: {
            alias: {
                'components': '@/components',
                'layout': '@/layout',
                'views': '@/views',
                'style': '@/style',
                'config': '@/config',
            }
        }
    }
}
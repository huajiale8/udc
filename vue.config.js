module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    indexPath: "index.html",
    devServer: {
        proxy: {
            '/api': {
                target: 'https://source.818qj.com',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '',
                },
            }
        },
        host: process.env.NODE_ENV === 'local' ? null : 'udc.818qj.lo',
        port: process.env.NODE_ENV === 'local' ? null : 80,
    }

}

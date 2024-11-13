const path = require('path')

module.export = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, "src")
        }
    }
}

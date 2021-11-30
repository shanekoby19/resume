const path = require('path');

module.exports = (env) => {
    const devMode = env.mode === 'development';
    console.log(path.join(__dirname, 'public'));
    return {
        mode: devMode ? 'development' : 'production',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                    use: [{ 
                        loader: 'babel-loader', 
                    }],
                    test: /\.js$/,
                    exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ],
            }]
        },
        devtool: devMode ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: devMode ? {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true,
        } : {},
    }
}
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.ts', // Основной файл TypeScript
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'], // Разрешаем расширения .ts и .js
    },
    output: {
        filename: 'bundle.min.js', // Выходной файл с минификацией
        path: path.resolve(__dirname, 'dist'), // Путь до папки dist
    },
    mode: 'production', // Режим продакшн для оптимизации
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false, // Удаление комментариев при минификации
                    },
                },
                extractComments: false,
            }),
        ],
    },
};

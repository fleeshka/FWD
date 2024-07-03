const path = require('path');
<<<<<<< Updated upstream
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
=======

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3001,
  },
  mode: 'development',
>>>>>>> Stashed changes
};

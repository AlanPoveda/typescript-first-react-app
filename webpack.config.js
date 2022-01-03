//Configuração das barras para qualquer sistema operacional
const path = require('path');

//Plugin do HTML webpack plugin para o bundle, ser injetado dinâmicamente
const HtmlWebpackPlugin = require('html-webpack-plugin');

//Fast refresh plugin
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

//Configurando variáveis de ambiente
const isDevelopment = process.env.NODE_ENV != 'production'; 

module.exports = {
    mode: isDevelopment ? 'development' : 'production', //Dessa forma esta especificando que esta no modo dev ou produção
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', //Para visualizar o codigo do app para saber sobre os erros!
    entry: path.resolve(__dirname, 'src', 'index.jsx'), //Arquivo de entrada
    output: {
        path: path.resolve(__dirname, 'dist'), //Arquivo de saída
        filename: 'bundle.js',
    },
    resolve: { //Informando tipos de arquivos que vão ser lidos
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        static: {
           directory: path.resolve(__dirname, 'public') //Configurando webserver para não precisar executar yarn webpack to da vez
        },
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html' ) //Aqui injetando o plugin do bundle ser dinâmico
        }),
        isDevelopment && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),//Aqui ele somente vai pegar valores que não sejam booleanos, por causa do plugin encima, pode retornar um booleano
    module: {//Definir propriedades de regras de como vamos receber os arquivos
        rules:[
            {
                test: /\.jsx$/, //Regex para pegar também aceitar arquivos JSX
                exclude: /node_modules/, //Aqui para ele ignorar os arquivos node_modules
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel')
                        ].filter(Boolean)
                    }
                }, //integração entre o babel e o webpack
            },
            {
                test: /\.scss$/, //Regex para pegar também aceitar arquivos css ou sass
                exclude: /node_modules/, //Aqui para ele ignorar os arquivos node_modules
                use: ['style-loader','css-loader', 'sass-loader'], //Para ler arquivos css, usando essas bibliotecas 
            }
        ],
    }
}
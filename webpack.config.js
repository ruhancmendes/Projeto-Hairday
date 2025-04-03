//definir as configurações do webpack
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"), // ponto de entrada do aplicativo
  output: {
    filename: "main.js", // nome do arquivo de saída
    path: path.resolve(__dirname, "dist"), // diretório de saída
  },

  // Configurações do servidor de desenvolvimento
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // diretório onde os arquivos estáticos estão localizados
    },
    port: 3000,
    open: true, // abre o navegador automaticamente
    liveReload: true, // ativa o recarregamento automático
  },

  // Acrescentando plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // arquivo HTML de entrada
      favicon: path.resolve("src", "assets", "scissors.svg"), // ícone do aplicativo
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"), // diretório de origem
          to: path.resolve(__dirname, "dist", "src", "assets"), // diretório de destino
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // carrega arquivos CSS
      },

      {
        test: /\.js$/,
        exclude: /node_modules/, // exclui a pasta node_modules
        use: {
          loader: "babel-loader", // carrega arquivos JavaScript
          options: {
            presets: ["@babel/preset-env"], // usa o preset-env do Babel
          },
        },
      },
    ],
  },
};

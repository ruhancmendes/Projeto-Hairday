//definir as configurações do webpack
const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"), // arquivo HTML de entrada
    }),
  ],
};

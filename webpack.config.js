"use strict";
const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node-modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlPlugin({
			template: "./public/index.html",
		}),
	],
	devServer: {
		static: "./dist",
		open: true,
		port: 3000,
	},
	mode: "development",
};

const webpack = require("webpack");
const path = require("path");

module.exports = {
  plugins: [
    {
      plugin: {
        overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
          const dfxJson = require(`${__dirname}/dfx.json`);

          const aliases = Object.entries(dfxJson.canisters).reduce(
            (acc, [name, value]) => {
              const networkName = process.env["DFX_NETWORK"] || "local";
              const outputRoot = path.join(
                __dirname,
                ".dfx",
                networkName,
                dfxJson.defaults.build.output,
                name
              );
              return {
                ...acc,
                ["ic:canisters/" + name]: path.join(outputRoot, name + ".js"),
                ["ic:idl/" + name]: path.join(outputRoot, name + ".did.js"),
              };
            },
            {}
          );

          return {
            ...webpackConfig,
            plugins: [
              ...webpackConfig.plugins,
              new webpack.ProvidePlugin({
                ic: [path.resolve(path.join(__dirname, "ic.js")), "ic"],
              }),
            ],
            resolve: {
              ...webpackConfig.resolve,
              alias: { ...webpackConfig.resolve.alias, ...aliases },
              extensions: [
                ...webpackConfig.resolve.extensions,
                ".tsx",
                ".ts",
                ".js",
              ],
              plugins: [
                ...webpackConfig.resolve.plugins.filter((t) => {
                  // Removes ModuleScopePlugin
                  return !Object.keys(t).includes("appSrcs");
                }),
              ],
            },
          };
        },
      },
      options: {},
    },
  ],
};

const nested = require("postcss-nested");
const postcss_preset_env = require("postcss-preset-env");
const custom_media = require("postcss-custom-media");

module.exports =
    {
        plugins: [nested, postcss_preset_env, custom_media({})]
    };

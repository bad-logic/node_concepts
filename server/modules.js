// exports.express = require("express");
// exports.favicon = require("static-favicon");

const mods = {};
mods.express = require("express");
mods.favicon = require("static-favicon");
mods.faviconserve = require("serve-favicon");

module.exports = Object.freeze(mods);

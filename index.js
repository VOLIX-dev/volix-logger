const colors = require("colors");


module.exports.info = function (string) {
    console.log("[" + new Date().toUTCString() + "] [" + "info".green + "] " + string);
}

module.exports.error = function (string) {
    console.log("[" + new Date().toUTCString() + "] [" + "error".red + "] " + `${string}`.red);
}

module.exports.fatal = function (string) {
    console.log("[" + new Date().toUTCString() + "] [" + "fatal".red.bold + "] " + `${string}`.red.bold);
}

module.exports.warning = function (string) {
    console.log("[" + new Date().toUTCString() + "] [" + "warning".yellow + "] " + string);
}
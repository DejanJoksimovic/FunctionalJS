module.exports = namespace => (...arguments) => console.log.apply(console, [namespace, ...Array.prototype.slice.call(arguments)])
function Config (file) {
  this.file = file
}

Config.prototype.getConfig = function (key) {
  var env
  switch (window.location.hostname) {
    case 'prod.shintech.ninja':
      env = 'production'
      break
    case 'shintech.ninja':
      env = 'development'
      break
    default:
      throw (new Error('Unknown environment: ' + window.location.hostname))
  }

  return this.file[env][key]
}

Config.prototype.constructor = Config

module.exports = Config

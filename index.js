export default class Config {
  constructor (file) {
    this.file = file
  }
  getConfig (key) {
    var env
    switch (window.location.hostname) {
      case 'shintech.ninja':
        env = 'production'
        break
      case 'dev.shintech.ninja':
        env = 'development'
        break
      default:
        throw (new Error('Unknown environment: ' + window.location.hostname))
    }
    console.log(env, key)

    return this.file[env][key]
  }
}

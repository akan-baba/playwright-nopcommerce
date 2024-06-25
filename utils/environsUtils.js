// environs.js
export class Environment {
  static getBaseUrl() {
    let envi = process.env.ENV; // Get the value of the environment variable 'ENV'
    let baseUrl;

    switch (envi) {
      case 'production':
        baseUrl = "http://192.168.1.201:8085/";
        break;
      case 'staging':
        baseUrl = "http://192.168.1.201:8085/";
        break;
      case 'qa':
        baseUrl = "http://192.168.1.201:8085/"; // or your QA URL
        break;
       // fallback URL
    }
    console.log('Base URL:', baseUrl);
    return baseUrl;
  }
}

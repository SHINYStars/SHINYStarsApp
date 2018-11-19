//Environment Config
const env = {
    production: {
      name: 'production',
      port: 4000
    },
    dev: {
      name: 'dev',
      port: 4000
    },
    test: {
      name: 'test',
      port: 4000
    },

    GMAIL_USERNAME :'shinystarsteam@gmail.com',
    ENCRYPTED_PASSWORD : 'dGVtcEAxMjM0',
    SITE : 'shinystars.org'

  };
  /* const env={
    GMAIL_USERNAME :'shinystarsteam@gmail.com',
    ENCRYPTED_PASSWORD : 'dGVtcEAxMjM0',
    SITE : 'shinystars.org'
  } */
  
  // gmail username (e.g. 'you@gmail.com')
  //env[process.env.NODE_ENV].GMAIL_USERNAME = 'shinystarsteam@gmail.com';
  
  //base64 encoded password (e.g. 'password' === 'cGFzc3dvcmQ=') See https://www.base64encode.org/
  //env[process.env.NODE_ENV].ENCRYPTED_PASSWORD = 'dGVtcEAxMjM0';
  
  // enter your website here: 
  //env[process.env.NODE_ENV].SITE = 'shinystars.org';
  
  
  module.exports= env;
  
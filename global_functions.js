pe = require('parse-error'); // parses error so you can read error message and handle them accordingly

to = function (promise) { // global function that will help us handle promise rejections
  return promise
    .then(data => {
      return [null, data];
    }).catch(err => [pe(err)])
};

TE = function(err_message, log) { // Throw error
  if (log === true){
    console.error(err_message);
  }

  throw new Error(err_message);
}

ReE = function(res, err, code) { // Web response error
  if (typeof err == 'object' && typeof err.message != 'undefined') {
    err = err.message;
  }

  if (typeof code !== 'undefinted') res.statusCode = code;
}
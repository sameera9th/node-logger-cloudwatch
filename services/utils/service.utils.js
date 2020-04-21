const {to} = require('await-to-js');
const pe = require('parse-error');

module.exports.ResponseCode = {
    SUCCESS_OK: 200,
    SUCCESS_CREATED: 201,
    SUCCESS_ACCEPTED: 202,
    SUCCESS_NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    PAYMENT_REQUIRED: 402,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405
};

module.exports.ResponseMessage = {
    DATABASE_ERROR: 'An error occurred while accessing the database',
    DATA_FOUND: 'Record(s) found',
    DATA_NOT_FOUND: 'Not found',
}

/**
 * Response Error
 * @param res
 * @param err
 * @param code
 * @returns {*}
 * @constructor
 */
module.exports.ReE = function (res, err, code)
{ // Error Web Response
    if(typeof err == 'object' && typeof err.message != 'undefined')
    {
        err = err.message;
    }

    if(typeof code !== 'undefined') res.statusCode = code;

    return res.json({success: false, message: err});
};

/**
 * Response Success
 * @param res
 * @param data
 * @param code
 * @returns {*}
 * @constructor
 */
module.exports.ReS = function (res, data, code)
{ // Success Web Response
    let send_data = {success: true};

    if(typeof data == 'object')
    {
        send_data = Object.assign(data, send_data);//merge the objects
    }

    if(typeof code !== 'undefined') res.statusCode = code;

    return res.json(send_data)
};

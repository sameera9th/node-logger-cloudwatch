const {ReE, ReS, ResponseCode, ResponseMessage} = require("../services/utils/service.utils");
const logger = require('../services/utils/service.logger');
// const logger = require('../services/utils/service.logger.cloud');



const all = async function (req, res)
{
    logger.log('info', "[STARTUP] Connecting to DB...", { tags: 'startup,mongo' });
    if(1 > 0)
    {
        return ReS(res, {data: [], code: ResponseCode.SUCCESS_OK, message: ResponseMessage.DATA_FOUND}, ResponseCode.SUCCESS_OK);

    } else
    {
        return ReS(res, {data: [], code: ResponseCode.SUCCESS_OK, message: ResponseMessage.DATA_NOT_FOUND}, ResponseCode.SUCCESS_OK);

    }
}

module.exports = {
    all
}
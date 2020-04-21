const winston = require('winston'), CloudWatchTransport = require('winston-aws-cloudwatch');
const CONFIG = require('../../config/config');

// let NODE_ENV = process.env.NODE_ENV || 'prod';

const logger = winston.createLogger({
    transports: [
      new CloudWatchTransport({
        logGroupName: 'my-log-group', // REQUIRED
        logStreamName: 'prod', // REQUIRED
        createLogGroup: true,
        createLogStream: true,
        submissionInterval: 2000,
        submissionRetryCount: 1,
        batchSize: 20,
        awsConfig: {
            region: CONFIG.aws_region
        },
        formatLog: item =>
          `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
      })
    ]
  })

// let config = {
//     logGroupName: 'my-log-group',
//     logStreamName: NODE_ENV,
//     createLogGroup: false,
//     createLogStream: true,
//     awsConfig: {
//         accessKeyId: CONFIG.aws_access_key,
//         secretAccessKey: CONFIG.aws_secret_key,
//         region: CONFIG.aws_region
//     },
//     formatLog: function (item)
//     {
//         return item.level + ': ' + item.message + ' ' + JSON.stringify(item.meta)
//     }
// }
// console.log('NODE_ENV ', NODE_ENV);
// if(NODE_ENV != 'development') {
//     console.log('config ', config);
//     logger.add(CloudWatchTransport, config);
// }

logger.level = process.env.LOG_LEVEL || "silly";

logger.stream = {
    write: function (message, encoding)
    {
        logger.log(message);
    }
};

module.exports = logger;
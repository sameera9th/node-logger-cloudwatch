var winston = require('winston'),
    WinstonCloudWatch = require('winston-cloudwatch');
const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-2',
});

winston.add(new WinstonCloudWatch({
    cloudWatchLogs: new AWS.CloudWatchLogs(),
    messageFormatter: item => {
        `${item.level}: ${item.message} ${JSON.stringify(item.meta)}`
    },
    logGroupName: 'my-log-group',
    logStreamName: 'prod'
}));


module.exports = winston;
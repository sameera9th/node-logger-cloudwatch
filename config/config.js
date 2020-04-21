const dotenv = require('dotenv');

const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env';
dotenv.config({path: envFile});

let CONFIG = {};
CONFIG.app = process.env.APP || 'dev';
CONFIG.port = process.env.PORT || '4006';
CONFIG.time_out = process.env.TIMEOUT || '200000';

CONFIG.aws_access_key = '';
CONFIG.aws_secret_key = '';
CONFIG.aws_region = 'us-east-2';


CONFIG.api_secret = process.env.LEAF_API_SECRET || '121%%!&&@';



module.exports = CONFIG;
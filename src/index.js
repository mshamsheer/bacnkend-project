import dotenv from 'dotenv';
dotenv.config({ path: './env' });

import dbConnection from './db/index.js';

dbConnection();

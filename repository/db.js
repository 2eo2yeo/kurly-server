import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'http://kurly-pj-front.s3-website.ap-northeast-2.amazonaws.com/',
    port: 3306,
    user: 'root',
    password: 'zjfflzmffhs1234**',
    database: 'kurlydb',
});

export const db = pool.promise();
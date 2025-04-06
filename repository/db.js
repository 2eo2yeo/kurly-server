import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'kurly-pj-db.cjw8casuq6rz.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'zjfflzmffhs1234**',
    database: 'kurlydb',
});

export const db = pool.promise();
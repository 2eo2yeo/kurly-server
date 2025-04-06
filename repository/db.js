import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'zjfflzmffhs1234**',
    database: 'kurlydb',
});

export const db = pool.promise();
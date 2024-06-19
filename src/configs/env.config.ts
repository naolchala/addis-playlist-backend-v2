import dotenv from 'dotenv';

dotenv.config();

export const JWT_SECRET =	process.env.AUTH_SECRET ?? 'zhqisLfTHBfdyibtRHAhv4Vzlp3hGe18';
export const { DB_URL } = process.env;

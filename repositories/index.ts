import connection from "../config/database.js";

export async function findUser(username: string){
    const result = await connection.query(`
        SELECT * FROM fighters
        WHERE username = $1
    `, [username]);
    return result.rows[0];
};

export async function createUser(username: string) {
     await connection.query(`
        INSERT INTO fighters (username, wins, losses, draws)
        VALUES ($1, 0, 0, 0)
    `, [username])
};

export async function queryWin(username:string) {
    await connection.query(`
        UPDATE fighters
        SET wins = wins + 1
        WHERE username = $1
    `, [username])
};

export async function QueryLose(username:string) {
    await connection.query(`
        UPDATE fighters
        SET losses = losses + 1
        WHERE username = $1
`, [username])
};

export async function QueryDraw(username:string) {
    await connection.query(`
        UPDATE fighters
        SET draws = draws + 1
        WHERE username = $1
`, [username])
};

export async function queryRanking(){
    const result = await connection.query(`
        SELECT *
        FROM fighters
        ORDER BY wins DESC, draws DESC, losses 
    `)
    return result.rows;
};
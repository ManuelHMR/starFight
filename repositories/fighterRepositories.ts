import connection from "../config/database.js";

export async function findByUsername(username: string){
    const result = await connection.query(`
        SELECT * FROM fighters
        WHERE username = $1
    `, [username]);
    return result.rows[0];
};

export async function createUser(username: string) {
    const result =  await connection.query(`
        INSERT INTO fighters (username, wins, losses, draws)
        VALUES ($1, 0, 0, 0)
    `, [username])
    return result.rows[0];
};


export async function updateStats(id: number, column: "wins" | "losses" | "draws") {
    connection.query(
      `
      UPDATE fighters 
       SET ${column}=${column}+1
      WHERE id=$1
    `,
      [id]
    );
};

export async function queryRanking(){
    const result = await connection.query(`
        SELECT *
        FROM fighters
        ORDER BY wins DESC, draws DESC, losses 
    `)
    return result.rows;
};
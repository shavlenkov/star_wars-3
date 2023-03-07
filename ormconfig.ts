import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '100.25.130.243',
    port: 6033,
    username: 'root',
    password: 'my_secret_password',
    database: 'app_db',
    entities: ['./dist/**/*.entity.js'],
    logging: true,
    synchronize: false,
    migrationsRun: false,
    migrations: ['./dist/**/database/migrations/*.js'],
    migrationsTableName: 'history'
})
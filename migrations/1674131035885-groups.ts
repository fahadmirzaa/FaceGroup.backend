import { MigrationInterface, QueryRunner } from 'typeorm';

export class groups1674131035885 implements MigrationInterface {
  name = 'groups1674131035885';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`groups\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`createdAt\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`groups\``);
  }
}

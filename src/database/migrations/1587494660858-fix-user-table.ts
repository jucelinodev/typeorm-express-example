import {MigrationInterface, QueryRunner} from "typeorm";

export class fixUserTable1587494660858 implements MigrationInterface {
    name = 'fixUserTable1587494660858'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "create_at" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "update_at" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "update_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "create_at"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`, undefined);
    }

}

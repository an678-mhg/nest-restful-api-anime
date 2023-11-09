/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `categories_on_animes` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `categories_on_animes` table. All the data in the column will be lost.
  - You are about to drop the column `assignedAt` on the `countries_on_animes` table. All the data in the column will be lost.
  - You are about to drop the column `assignedBy` on the `countries_on_animes` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "categories_on_animes" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";

-- AlterTable
ALTER TABLE "countries_on_animes" DROP COLUMN "assignedAt",
DROP COLUMN "assignedBy";

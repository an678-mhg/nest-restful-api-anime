/*
  Warnings:

  - You are about to drop the column `iframe_link` on the `episodes` table. All the data in the column will be lost.
  - You are about to drop the column `m3u8_link` on the `episodes` table. All the data in the column will be lost.
  - Added the required column `type` to the `episodes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `episodes` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `episodes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "episodes" DROP COLUMN "iframe_link",
DROP COLUMN "m3u8_link",
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

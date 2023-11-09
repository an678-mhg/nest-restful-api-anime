/*
  Warnings:

  - You are about to drop the `Episodes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Episodes" DROP CONSTRAINT "Episodes_animesId_fkey";

-- DropTable
DROP TABLE "Episodes";

-- CreateTable
CREATE TABLE "episodes" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "m3u8_link" TEXT,
    "iframe_link" TEXT,
    "animeId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "episodes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "episodes" ADD CONSTRAINT "episodes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "animes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the `CategoriesOnAnimes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updated_at` to the `animes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `categories` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoriesOnAnimes" DROP CONSTRAINT "CategoriesOnAnimes_animeId_fkey";

-- DropForeignKey
ALTER TABLE "CategoriesOnAnimes" DROP CONSTRAINT "CategoriesOnAnimes_categoryId_fkey";

-- AlterTable
ALTER TABLE "animes" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "categories" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "CategoriesOnAnimes";

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episodes" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "m3u8_link" TEXT,
    "iframe_link" TEXT,
    "animesId" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Episodes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories_on_animes" (
    "animeId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_on_animes_pkey" PRIMARY KEY ("animeId","categoryId")
);

-- CreateTable
CREATE TABLE "countries_on_animes" (
    "animeId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "countries_on_animes_pkey" PRIMARY KEY ("animeId","countryId")
);

-- AddForeignKey
ALTER TABLE "Episodes" ADD CONSTRAINT "Episodes_animesId_fkey" FOREIGN KEY ("animesId") REFERENCES "animes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_animes" ADD CONSTRAINT "categories_on_animes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "animes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories_on_animes" ADD CONSTRAINT "categories_on_animes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countries_on_animes" ADD CONSTRAINT "countries_on_animes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "animes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "countries_on_animes" ADD CONSTRAINT "countries_on_animes_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

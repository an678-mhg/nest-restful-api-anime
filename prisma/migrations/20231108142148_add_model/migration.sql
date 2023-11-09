/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `animes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[other_title]` on the table `animes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[slug]` on the table `animes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `categories` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `countries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image_url` to the `animes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animes" ADD COLUMN     "image_url" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "animes_title_key" ON "animes"("title");

-- CreateIndex
CREATE UNIQUE INDEX "animes_other_title_key" ON "animes"("other_title");

-- CreateIndex
CREATE UNIQUE INDEX "animes_slug_key" ON "animes"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_name_key" ON "countries"("name");

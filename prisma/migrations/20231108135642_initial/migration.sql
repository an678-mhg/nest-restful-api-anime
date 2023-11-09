-- CreateTable
CREATE TABLE "animes" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "other_title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "time" TEXT,
    "quality" TEXT,
    "language" TEXT,
    "director" TEXT,
    "actors" TEXT,
    "year" TEXT,
    "description" TEXT,

    CONSTRAINT "animes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoriesOnAnimes" (
    "animeId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "CategoriesOnAnimes_pkey" PRIMARY KEY ("animeId","categoryId")
);

-- AddForeignKey
ALTER TABLE "CategoriesOnAnimes" ADD CONSTRAINT "CategoriesOnAnimes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "animes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoriesOnAnimes" ADD CONSTRAINT "CategoriesOnAnimes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

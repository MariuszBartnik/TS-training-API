/*
  Warnings:

  - Made the column `email` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Post" ("authorId", "createdAt", "id", "isDeleted", "text", "title") SELECT "authorId", "createdAt", "id", "isDeleted", "text", "title" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" TEXT,
    "email" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_User" ("city", "createdAt", "email", "id", "isDeleted", "name", "phone", "street") SELECT "city", "createdAt", "email", "id", "isDeleted", "name", "phone", "street" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the `Device` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `deviceId` on the `Reading` table. All the data in the column will be lost.
  - Added the required column `patientId` to the `Reading` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Device_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Device";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "nationalId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reading" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "heartBeat" REAL NOT NULL,
    "temperature" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "patientId" INTEGER NOT NULL,
    CONSTRAINT "Reading_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reading" ("createdAt", "heartBeat", "id", "temperature", "timestamp", "updatedAt") SELECT "createdAt", "heartBeat", "id", "temperature", "timestamp", "updatedAt" FROM "Reading";
DROP TABLE "Reading";
ALTER TABLE "new_Reading" RENAME TO "Reading";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Patient_nationalId_key" ON "Patient"("nationalId");

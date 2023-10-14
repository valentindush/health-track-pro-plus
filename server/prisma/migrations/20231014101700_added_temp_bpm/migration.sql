/*
  Warnings:

  - You are about to drop the column `value` on the `Reading` table. All the data in the column will be lost.
  - Added the required column `heartBeat` to the `Reading` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperature` to the `Reading` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Reading" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "heartBeat" REAL NOT NULL,
    "temperature" REAL NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "deviceId" INTEGER NOT NULL,
    CONSTRAINT "Reading_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reading" ("createdAt", "deviceId", "id", "timestamp", "updatedAt") SELECT "createdAt", "deviceId", "id", "timestamp", "updatedAt" FROM "Reading";
DROP TABLE "Reading";
ALTER TABLE "new_Reading" RENAME TO "Reading";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - You are about to drop the column `planId` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Subscription` table. All the data in the column will be lost.
  - You are about to drop the `Plan` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_planId_fkey";

-- DropIndex
DROP INDEX "Subscription_planId_lemonSqueezyId_idx";

-- AlterTable
ALTER TABLE "Subscription" DROP COLUMN "planId",
DROP COLUMN "price";

-- DropTable
DROP TABLE "Plan";

-- CreateIndex
CREATE INDEX "Subscription_lemonSqueezyId_idx" ON "Subscription"("lemonSqueezyId");

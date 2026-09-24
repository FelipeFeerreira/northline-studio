CREATE TABLE "ContactSubmission" (
  "id" TEXT NOT NULL,
  "name" VARCHAR(100) NOT NULL,
  "email" VARCHAR(254) NOT NULL,
  "phone" VARCHAR(40),
  "message" VARCHAR(5000) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ContactSubmission_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "ContactSubmission_createdAt_idx" ON "ContactSubmission"("createdAt");

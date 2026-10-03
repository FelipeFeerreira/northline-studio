-- Additive migration: existing inquiries keep their data and receive a source.
ALTER TABLE "ContactSubmission"
  ADD COLUMN "company" VARCHAR(160),
  ADD COLUMN "projectType" VARCHAR(80),
  ADD COLUMN "budget" VARCHAR(40),
  ADD COLUMN "timeline" VARCHAR(40),
  ADD COLUMN "source" VARCHAR(20) NOT NULL DEFAULT 'inquiry';

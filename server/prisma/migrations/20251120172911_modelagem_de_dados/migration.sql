-- CreateEnum
CREATE TYPE "Species" AS ENUM ('SHEEP', 'CAT', 'PIG', 'COW', 'HORSE', 'DOG');

-- CreateEnum
CREATE TYPE "ConsultType" AS ENUM ('FIRST', 'VACINATION', 'RETURN', 'CHECKUP');

-- CreateTable
CREATE TABLE "Patient" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "tutor" TEXT NOT NULL,
    "age" INTEGER,
    "specie" "Species" NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consult" (
    "id" SERIAL NOT NULL,
    "type" "ConsultType" NOT NULL,
    "description" TEXT,
    "dateTime" TIMESTAMP(3) NOT NULL,
    "patientId" INTEGER NOT NULL,
    "doctorName" TEXT NOT NULL,

    CONSTRAINT "Consult_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consult" ADD CONSTRAINT "Consult_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

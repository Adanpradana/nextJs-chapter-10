-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "Username" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Total_score" INTEGER NOT NULL,
    "Biodata" TEXT NOT NULL,
    "City" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "thumbnail_url" TEXT NOT NULL,
    "Game_url" TEXT NOT NULL,
    "play_count" INTEGER NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_Username_key" ON "user"("Username");

-- CreateIndex
CREATE UNIQUE INDEX "game_Name_key" ON "game"("Name");

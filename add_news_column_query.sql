-- 1. Buat tabel baru dengan struktur yang diinginkan
CREATE TABLE "news_new" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "title" TEXT UNIQUE NOT NULL,
  "content_html" TEXT NOT NULL,
  "is_published" BOOLEAN NOT NULL DEFAULT false,
  "admin_id" INTEGER,
  "cabang_id" INTEGER,
  "approved_by" INTEGER,
  "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY ("admin_id") REFERENCES "admin" ("id"),
  FOREIGN KEY ("cabang_id") REFERENCES "cabang" ("id"),
  FOREIGN KEY ("approved_by") REFERENCES "admin" ("id")
);

-- 2. Salin data dari tabel lama ke tabel baru
INSERT INTO "news_new" ("id", "title", "content_html", "is_published", "admin_id", "approved_by", "created_at")
SELECT "id", "title", "content_html", "is_published", "admin_id", "approved_by", "created_at"
FROM "news";

-- 3. Hapus tabel lama
DROP TABLE "news";

-- 4. Ganti nama tabel baru menjadi nama tabel lama
ALTER TABLE "news_new" RENAME TO "news";
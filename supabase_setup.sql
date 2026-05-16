-- SCRIPT DE CREACIÓN PARA SUPABASE
-- Ve a tu dashboard de Supabase -> SQL Editor -> New query -> Pega esto y dale a Run.

CREATE TABLE leaderboard (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre TEXT NOT NULL,
  score INTEGER NOT NULL,
  pct INTEGER NOT NULL,
  tiempo_segundos INTEGER NOT NULL,
  avisos INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (Seguridad)
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Permitir a todo el mundo leer la tabla (para el ranking global)
CREATE POLICY "leaderboard_select" ON leaderboard FOR SELECT USING (true);

-- Permitir a los usuarios insertar su puntaje (debe ser mayor a 0)
CREATE POLICY "leaderboard_insert" ON leaderboard FOR INSERT WITH CHECK (score >= 0);

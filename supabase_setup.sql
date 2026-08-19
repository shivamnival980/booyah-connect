-- ==========================================================================
-- BOOYAHCONNECT SUPABASE DATABASE TABLE & STORAGE SETUP SCRIPT
-- ==========================================================================
-- Run this script in your Supabase SQL Editor (https://supabase.com/dashboard)
-- to create the `posts` table, `gameplay-videos` storage bucket, and RLS policies.

-- 1. CREATE POSTS TABLE
CREATE TABLE IF NOT EXISTS public.posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_ign TEXT NOT NULL,
  user_avatar TEXT,
  user_rank TEXT DEFAULT 'Grandmaster',
  title TEXT NOT NULL,
  description TEXT,
  media_path TEXT NOT NULL,
  media_url TEXT NOT NULL,
  media_type TEXT NOT NULL DEFAULT 'video',
  likes_count INT DEFAULT 0,
  views_count INT DEFAULT 1,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ENABLE ROW LEVEL SECURITY (RLS) ON POSTS TABLE
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 3. POSTS RLS POLICIES
DROP POLICY IF EXISTS "Public posts are viewable by everyone" ON public.posts;
CREATE POLICY "Public posts are viewable by everyone" 
  ON public.posts FOR SELECT 
  USING (true);

DROP POLICY IF EXISTS "Users can create posts for themselves" ON public.posts;
CREATE POLICY "Users can create posts for themselves" 
  ON public.posts FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own posts" ON public.posts;
CREATE POLICY "Users can update their own posts" 
  ON public.posts FOR UPDATE 
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own posts" ON public.posts;
CREATE POLICY "Users can delete their own posts" 
  ON public.posts FOR DELETE 
  USING (auth.uid() = user_id);


-- 4. CREATE STORAGE BUCKET FOR GAMEPLAY VIDEOS
INSERT INTO storage.buckets (id, name, public) 
VALUES ('gameplay-videos', 'gameplay-videos', true)
ON CONFLICT (id) DO NOTHING;

-- 5. STORAGE RLS POLICIES
DROP POLICY IF EXISTS "Public Read Access for Gameplay Videos" ON storage.objects;
CREATE POLICY "Public Read Access for Gameplay Videos"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'gameplay-videos');

DROP POLICY IF EXISTS "Authenticated Users Upload Gameplay Videos" ON storage.objects;
CREATE POLICY "Authenticated Users Upload Gameplay Videos"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'gameplay-videos' AND 
    (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "Users Update Own Gameplay Videos" ON storage.objects;
CREATE POLICY "Users Update Own Gameplay Videos"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (
    bucket_id = 'gameplay-videos' AND 
    (storage.foldername(name))[1] = auth.uid()::text
  );

DROP POLICY IF EXISTS "Users Delete Own Gameplay Videos" ON storage.objects;
CREATE POLICY "Users Delete Own Gameplay Videos"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'gameplay-videos' AND 
    (storage.foldername(name))[1] = auth.uid()::text
  );

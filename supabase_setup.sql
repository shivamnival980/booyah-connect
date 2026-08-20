-- ==========================================================================
-- BOOYAHCONNECT SUPABASE MIGRATION: COMPLETE ACADEMY & SOCIAL TABLES & RLS
-- ==========================================================================
-- Safe, non-destructive SQL script. Run this in your Supabase SQL Editor.

-- 1. CREATE PUBLIC.POSTS TABLE
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
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. CREATE PUBLIC.POST_LIKES TABLE
CREATE TABLE IF NOT EXISTS public.post_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_user_post_like UNIQUE (post_id, user_id)
);

-- 3. CREATE PUBLIC.POST_COMMENTS TABLE
CREATE TABLE IF NOT EXISTS public.post_comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  user_ign TEXT NOT NULL,
  user_avatar TEXT,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. CREATE PUBLIC.USER_CONNECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.user_connections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  follower_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_follower_following UNIQUE (follower_id, following_id),
  CONSTRAINT prevent_self_follow CHECK (follower_id <> following_id)
);

-- 5. CREATE PUBLIC.ACADEMY_PROGRESS TABLE (PHASE 4)
CREATE TABLE IF NOT EXISTS public.academy_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT true,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_user_lesson UNIQUE (user_id, lesson_id)
);

-- 6. ENABLE ROW LEVEL SECURITY (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academy_progress ENABLE ROW LEVEL SECURITY;

-- 7. CREATE SAFE CONDITIONAL RLS POLICIES
DO $$
BEGIN
  -- Posts RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Public posts are viewable by everyone') THEN
    CREATE POLICY "Public posts are viewable by everyone" ON public.posts FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Users can create posts for themselves') THEN
    CREATE POLICY "Users can create posts for themselves" ON public.posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Users can update their own posts') THEN
    CREATE POLICY "Users can update their own posts" ON public.posts FOR UPDATE TO authenticated USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Users can delete their own posts') THEN
    CREATE POLICY "Users can delete their own posts" ON public.posts FOR DELETE TO authenticated USING (auth.uid() = user_id);
  END IF;

  -- Post Likes RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'post_likes' AND policyname = 'Public likes viewable by everyone') THEN
    CREATE POLICY "Public likes viewable by everyone" ON public.post_likes FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'post_likes' AND policyname = 'Users can insert their own likes') THEN
    CREATE POLICY "Users can insert their own likes" ON public.post_likes FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'post_likes' AND policyname = 'Users can delete their own likes') THEN
    CREATE POLICY "Users can delete their own likes" ON public.post_likes FOR DELETE TO authenticated USING (auth.uid() = user_id);
  END IF;

  -- Post Comments RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'post_comments' AND policyname = 'Public comments viewable by everyone') THEN
    CREATE POLICY "Public comments viewable by everyone" ON public.post_comments FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'post_comments' AND policyname = 'Users can create their own comments') THEN
    CREATE POLICY "Users can create their own comments" ON public.post_comments FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'post_comments' AND policyname = 'Users can delete their own comments') THEN
    CREATE POLICY "Users can delete their own comments" ON public.post_comments FOR DELETE TO authenticated USING (auth.uid() = user_id);
  END IF;

  -- User Connections RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_connections' AND policyname = 'Connections viewable by everyone') THEN
    CREATE POLICY "Connections viewable by everyone" ON public.user_connections FOR SELECT USING (true);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_connections' AND policyname = 'Users can create connections for themselves') THEN
    CREATE POLICY "Users can create connections for themselves" ON public.user_connections FOR INSERT TO authenticated WITH CHECK (auth.uid() = follower_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'user_connections' AND policyname = 'Users can delete their own connections') THEN
    CREATE POLICY "Users can delete their own connections" ON public.user_connections FOR DELETE TO authenticated USING (auth.uid() = follower_id);
  END IF;

  -- Academy Progress RLS Policies (Phase 4)
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_progress' AND policyname = 'Users can view their own academy progress') THEN
    CREATE POLICY "Users can view their own academy progress" ON public.academy_progress FOR SELECT TO authenticated USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_progress' AND policyname = 'Users can insert their own academy progress') THEN
    CREATE POLICY "Users can insert their own academy progress" ON public.academy_progress FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_progress' AND policyname = 'Users can update their own academy progress') THEN
    CREATE POLICY "Users can update their own academy progress" ON public.academy_progress FOR UPDATE TO authenticated USING (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_progress' AND policyname = 'Users can delete their own academy progress') THEN
    CREATE POLICY "Users can delete their own academy progress" ON public.academy_progress FOR DELETE TO authenticated USING (auth.uid() = user_id);
  END IF;
END $$;

-- 8. GRANT PERMISSIONS TO ANON AND AUTHENTICATED ROLES
GRANT SELECT ON public.posts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.posts TO authenticated;

GRANT SELECT ON public.post_likes TO anon, authenticated;
GRANT INSERT, DELETE ON public.post_likes TO authenticated;

GRANT SELECT ON public.post_comments TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.post_comments TO authenticated;

GRANT SELECT ON public.user_connections TO anon, authenticated;
GRANT INSERT, DELETE ON public.user_connections TO authenticated;

GRANT SELECT, INSERT, UPDATE, DELETE ON public.academy_progress TO authenticated;

-- 9. RELOAD POSTGREST SCHEMA CACHE IMMEDIATELY
NOTIFY pgrst, 'reload schema';

-- ==========================================================================
-- BOOYAHCONNECT SUPABASE MIGRATION: ACADEMY CMS, SOCIAL & ADMIN SYSTEM
-- ==========================================================================
-- Safe, non-destructive SQL script. Run this in your Supabase SQL Editor.

-- 1. CREATE PUBLIC.POSTS TABLE (WITH FEATURED & HIDDEN COLUMNS)
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
  featured BOOLEAN DEFAULT false,
  hidden BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;
ALTER TABLE public.posts ADD COLUMN IF NOT EXISTS hidden BOOLEAN DEFAULT false;

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

-- 5. CREATE PUBLIC.ACADEMY_PROGRESS TABLE
CREATE TABLE IF NOT EXISTS public.academy_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id TEXT NOT NULL,
  completed BOOLEAN DEFAULT true,
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_user_lesson UNIQUE (user_id, lesson_id)
);

-- ==========================================================================
-- ACADEMY CMS TABLES
-- ==========================================================================

-- 6. CREATE PUBLIC.ACADEMY_COURSES TABLE
CREATE TABLE IF NOT EXISTS public.academy_courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'Aim',
  difficulty TEXT NOT NULL DEFAULT 'Beginner',
  icon TEXT DEFAULT '🎓',
  thumbnail TEXT,
  published BOOLEAN DEFAULT true,
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. CREATE PUBLIC.ACADEMY_LESSONS TABLE
CREATE TABLE IF NOT EXISTS public.academy_lessons (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL REFERENCES public.academy_courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  duration TEXT DEFAULT '10 mins',
  difficulty TEXT DEFAULT 'Beginner',
  video_url TEXT,
  video_path TEXT,
  thumbnail_url TEXT,
  thumbnail_path TEXT,
  tips JSONB DEFAULT '[]'::jsonb,
  practice_task TEXT,
  lesson_order INT DEFAULT 0,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ==========================================================================
-- ADMIN SYSTEM TABLES
-- ==========================================================================

-- 8. CREATE PUBLIC.ADMIN_USERS TABLE
CREATE TABLE IF NOT EXISTS public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. HELPER FUNCTION TO CHECK IF USER IS ADMIN (SECURITY DEFINER)
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.admin_users
    WHERE admin_users.user_id = $1 AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 10. CREATE PUBLIC.CONTENT_REPORTS TABLE
CREATE TABLE IF NOT EXISTS public.content_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reporter_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL,
  content_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  details TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  resolved_at TIMESTAMPTZ
);

-- 11. CREATE PUBLIC.NEWS TABLE
CREATE TABLE IF NOT EXISTS public.news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  content TEXT,
  thumbnail TEXT,
  category TEXT DEFAULT 'Esports',
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. CREATE PUBLIC.ADMIN_ACTIVITY_LOG TABLE
CREATE TABLE IF NOT EXISTS public.admin_activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  target_type TEXT,
  target_id TEXT,
  details TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 13. ENABLE ROW LEVEL SECURITY (RLS) ON ALL TABLES
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.post_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_connections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academy_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academy_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.academy_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_activity_log ENABLE ROW LEVEL SECURITY;

-- 14. CREATE SAFE CONDITIONAL RLS POLICIES
DO $$
BEGIN
  -- Posts RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Public posts viewable by everyone') THEN
    CREATE POLICY "Public posts viewable by everyone" ON public.posts FOR SELECT USING (hidden = false OR public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Users can create posts for themselves') THEN
    CREATE POLICY "Users can create posts for themselves" ON public.posts FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Users or admins can update posts') THEN
    CREATE POLICY "Users or admins can update posts" ON public.posts FOR UPDATE TO authenticated USING (auth.uid() = user_id OR public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'posts' AND policyname = 'Users or admins can delete posts') THEN
    CREATE POLICY "Users or admins can delete posts" ON public.posts FOR DELETE TO authenticated USING (auth.uid() = user_id OR public.is_admin(auth.uid()));
  END IF;

  -- Academy Courses RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_courses' AND policyname = 'Public courses viewable by everyone') THEN
    CREATE POLICY "Public courses viewable by everyone" ON public.academy_courses FOR SELECT USING (published = true OR public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_courses' AND policyname = 'Admins can manage courses') THEN
    CREATE POLICY "Admins can manage courses" ON public.academy_courses FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
  END IF;

  -- Academy Lessons RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_lessons' AND policyname = 'Public lessons viewable by everyone') THEN
    CREATE POLICY "Public lessons viewable by everyone" ON public.academy_lessons FOR SELECT USING (published = true OR public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'academy_lessons' AND policyname = 'Admins can manage lessons') THEN
    CREATE POLICY "Admins can manage lessons" ON public.academy_lessons FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
  END IF;

  -- Admin Users RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'admin_users' AND policyname = 'Allow authenticated users to read admin_users') THEN
    CREATE POLICY "Allow authenticated users to read admin_users" ON public.admin_users FOR SELECT TO authenticated USING (true);
  END IF;

  -- Content Reports RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'content_reports' AND policyname = 'Users can create reports') THEN
    CREATE POLICY "Users can create reports" ON public.content_reports FOR INSERT TO authenticated WITH CHECK (auth.uid() = reporter_id);
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'content_reports' AND policyname = 'Admins can view and update reports') THEN
    CREATE POLICY "Admins can view and update reports" ON public.content_reports FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
  END IF;

  -- News RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'news' AND policyname = 'Public news viewable by everyone') THEN
    CREATE POLICY "Public news viewable by everyone" ON public.news FOR SELECT USING (published = true OR public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'news' AND policyname = 'Admins can manage news') THEN
    CREATE POLICY "Admins can manage news" ON public.news FOR ALL TO authenticated USING (public.is_admin(auth.uid()));
  END IF;

  -- Admin Activity Log RLS Policies
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'admin_activity_log' AND policyname = 'Admins can view activity logs') THEN
    CREATE POLICY "Admins can view activity logs" ON public.admin_activity_log FOR SELECT TO authenticated USING (public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'admin_activity_log' AND policyname = 'Admins can insert activity logs') THEN
    CREATE POLICY "Admins can insert activity logs" ON public.admin_activity_log FOR INSERT TO authenticated WITH CHECK (public.is_admin(auth.uid()));
  END IF;
END $$;

-- 15. BOOTSTRAP UGAT AGENT AS ADMIN
INSERT INTO public.admin_users (user_id, role)
SELECT id, 'admin'
FROM auth.users
WHERE email ILIKE '%ugat%' OR raw_user_meta_data->>'ign' ILIKE '%UGAT%'
ON CONFLICT (user_id) DO UPDATE SET role = 'admin';

-- 16. GRANT TABLE PERMISSIONS TO ANON AND AUTHENTICATED ROLES
GRANT SELECT ON public.posts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.posts TO authenticated;

GRANT SELECT ON public.academy_courses TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.academy_courses TO authenticated;

GRANT SELECT ON public.academy_lessons TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.academy_lessons TO authenticated;

GRANT SELECT ON public.admin_users TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.content_reports TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.news TO anon, authenticated;
GRANT SELECT, INSERT ON public.admin_activity_log TO authenticated;

-- 17. RELOAD POSTGREST SCHEMA CACHE IMMEDIATELY
NOTIFY pgrst, 'reload schema';


-- ==========================================================================
-- 18. SUPABASE STORAGE BUCKET: ACADEMY-VIDEOS DDL & RLS POLICIES
-- ==========================================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'academy-videos',
  'academy-videos',
  true,
  104857600,
  ARRAY['video/mp4', 'video/webm', 'video/quicktime', 'video/x-m4v', 'image/jpeg', 'image/png', 'image/webp']
)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 104857600;

ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Public Read Access for academy-videos') THEN
    CREATE POLICY "Public Read Access for academy-videos" ON storage.objects
    FOR SELECT USING (bucket_id = 'academy-videos');
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Admin Insert Access for academy-videos') THEN
    CREATE POLICY "Admin Insert Access for academy-videos" ON storage.objects
    FOR INSERT TO authenticated
    WITH CHECK (bucket_id = 'academy-videos' AND public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Admin Update Access for academy-videos') THEN
    CREATE POLICY "Admin Update Access for academy-videos" ON storage.objects
    FOR UPDATE TO authenticated
    USING (bucket_id = 'academy-videos' AND public.is_admin(auth.uid()))
    WITH CHECK (bucket_id = 'academy-videos' AND public.is_admin(auth.uid()));
  END IF;

  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename = 'objects' AND policyname = 'Admin Delete Access for academy-videos') THEN
    CREATE POLICY "Admin Delete Access for academy-videos" ON storage.objects
    FOR DELETE TO authenticated
    USING (bucket_id = 'academy-videos' AND public.is_admin(auth.uid()));
  END IF;
END $$;

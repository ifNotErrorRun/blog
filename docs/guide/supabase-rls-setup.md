# Supabase RLS(Row Level Security) 설정 가이드

## 1. 테이블 정책 설정

```sql
-- posts 테이블에 RLS 활성화
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 공개 조회 정책 (published 상태 글만 조회 가능)
CREATE POLICY "Enable read access for published posts" 
ON posts FOR SELECT
USING (status = 'published');

-- 관리자 권한 정책
CREATE POLICY "Enable all access for admin"
ON posts FOR ALL
TO authenticated
USING (auth.role() = 'admin');
```

## 2. 사용자 역할 설정

```sql
-- 관리자 역할 생성
CREATE ROLE admin;

-- 역할 권한 부여
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO admin;
```

## 3. JWT 클레임 설정

```javascript
// Netlify Function에서 사용자 역할 주입 예시
const { data: { user }, error } = await supabase.auth.getUser(token);
if (user?.email === 'admin@example.com') {
  // JWT에 역할 추가
  await supabase.auth.api.updateUserById(user.id, {
    user_metadata: { role: 'admin' }
  });
}
```

## 4. 테스트 쿼리 예시

```sql
-- 일반 사용자로 테스트
SET ROLE anon;
SELECT * FROM posts; -- published 글만 보임

-- 관리자로 테스트
SET ROLE admin;
SELECT * FROM posts; -- 모든 글 보임
```

## 5. 권장 설정

1. 모든 테이블에 RLS 활성화
2. 기본적으로 anon 역할에 대한 접근 제한
3. admin 역할은 명시적으로 권한 부여
4. production 환경에서는 항상 RLS 테스트 수행

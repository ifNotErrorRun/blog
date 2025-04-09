# Netlify Functions 구현 가이드

## 1. 기본 구조

```
netlify/
  functions/
    public/
      get-posts.ts
    auth/
      login.ts
      logout.ts
      check-session.ts
    protected/
      create-post.ts
      update-post.ts
```

## 2. 공개 API 예시 (get-posts.ts)

```typescript
import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

export const handler: Handler = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('status', 'published');

  if (error) {
    return { statusCode: 500, body: JSON.stringify({ error }) };
  }
  return { statusCode: 200, body: JSON.stringify(data) };
};
```

## 3. 인증 API 예시 (login.ts)

```typescript
import { Handler } from '@netlify/functions';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

export const handler: Handler = async (event) => {
  const { email, password } = JSON.parse(event.body || '{}');

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { statusCode: 401, body: JSON.stringify({ error }) };
  }

  return {
    statusCode: 200,
    headers: {
      'Set-Cookie': `sb-token=${data.session.access_token}; HttpOnly; Secure; Path=/; SameSite=Strict; Max-Age=${data.session.expires_in}`,
    },
    body: JSON.stringify({ user: data.user }),
  };
};
```

## 4. 환경 변수 설정

1. Netlify 대시보드에서 설정
2. `SUPABASE_URL`, `SUPABASE_ANON_KEY` 등 추가

## 5. 로컬 테스트

```bash
# 의존성 설치
npm install @netlify/functions @supabase/supabase-js

# 로컬 실행
netlify dev
```

## 6. 배포 주의사항

1. 함수 시간 제한: 10초 (기본값)
2. 메모리 제한: 128MB (기본값)
3. 파일 크기 제한: 50MB (업로드 시)

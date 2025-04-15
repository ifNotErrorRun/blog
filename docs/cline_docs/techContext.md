# 기술 컨텍스트

## 기술 스택
- 프레임워크
  - React19 : frontend
- 배포, 서버리스
  - Netlify : deployment and serverless functions
- 데이터베이스
  - Supabase : database and authentication
    - 로컬 개발: 도커 self-hosted Supabase
    - 배포 환경: 웹 Supabase
  - 인증 시스템:
    - JWT 기반 인증
    - Netlify 함수를 통한 서버 사이드 인증 처리
- 상태 관리 (전역, 서버)
  - Zustand : state management
  - React Query : server state management
- 스타일
  - Tailwind CSS : styling
- 타입스크립트
  - TypeScript : type safety
- 버전 관리
  - GitHub : version control
- UI 구성 요소
  - Shadcn/UI : UI components
- 테스트 (추후 추가 예정)
  - Vitest : unit testing
  - React Testing Library : component testing
  - Playwright : end-to-end testing
- 문서화
  - Storybook : UI 구성 요소 문서화
  - OpenAPI : API 문서화
  - Markdown : 기타 문서화
- CI/CD
  - GitHub Actions : CI/CD
- 코드 품질
  - Biome : linter and formatter

## 개발 환경
- **패키지 관리자**: pnpm
- **빌드 도구**: Vite
- **배포 플랫폼**: Netlify
- **라우팅**: TanStack Router
- **폼 관리**: React Hook Form + Zod

## 주요 의존성
- **@supabase/supabase-js**: Supabase 클라이언트
- **@tanstack/react-query**: 서버 상태 관리
- **@tanstack/react-router**: 클라이언트 라우팅
- **tailwindcss**: 스타일링
- **zod**: 스키마 검증
- **zustand**: 클라이언트 상태 관리
- **lucide-react**: 아이콘 라이브러리

## 기술적 제약 사항
- Netlify Serverless 함수의 실행 시간 및 메모리 제한
- Supabase의 무료 티어 제한 사항

## 개발 워크플로우
- Cline이 코드 변경 작성 및 검토 지원
- Netlify에 main 브랜치에서 자동 배포

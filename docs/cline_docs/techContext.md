# 기술 컨텍스트

## 기술 스택
- **프레임워크**: Astro.js, React 19
- **데이터베이스**: Supabase
- **인증**: Supabase Auth (로컬: 도커 self-hosted, 배포: 웹 Supabase)
- **상태 관리**: Zustand, React Query
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: Shadcn/UI
- **배포**: Netlify
- **에디터**: TipTap Editor (마크다운 에디터)
- **타입 안전성**: TypeScript
- **폼 관리**: React Hook Form, Zod

## 개발 환경
- **패키지 관리자**: pnpm
- **빌드 도구**: Astro 기본 빌드 시스템
- **배포 플랫폼**: Netlify

## 주요 의존성
- **@astrojs/mdx**: 마크다운 확장 지원
- **@astrojs/netlify**: Netlify 통합
- **@astrojs/react**: React 컴포넌트 지원
- **@supabase/supabase-js**: Supabase 클라이언트
- **@tanstack/react-query**: 서버 상태 관리
- **@tiptap/react**: 마크다운 에디터
- **tailwindcss**: 스타일링
- **zod**: 스키마 검증
- **zustand**: 클라이언트 상태 관리

## 기술적 제약 사항
- Astro.js의 하이드레이션 모델에 따른 클라이언트/서버 컴포넌트 구분
- Netlify Serverless 함수의 실행 시간 및 메모리 제한
- Supabase의 무료 티어 제한 사항

## 개발 워크플로우
- Cline이 코드 변경 작성 및 검토 지원
- Netlify에 main 브랜치에서 자동 배포

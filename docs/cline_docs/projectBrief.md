# 프로젝트 브리프

## 개요

[개인 개발자 블로그]을 구축합니다.

## 핵심 기능

- 관리자
  - 로그인 (Supabase 자체 인증 사용)
  - 로컬 개발: 도커에 설치된 self-hosted Supabase 연결
  - 배포 환경: 웹 Supabase 연결
  - 마크다운 에디터 (tictap editor)
  - 글 공개 / 비공개 설정
  - 글 조회수 및 사용자 접근 경로 조회
- 방문자
  - 글 조회 / 열람
  - 댓글
  - 마크다운 기반 아티클 (코드블록 포함)
  - 아티클 검색
  - 언어 선택 (한국어 / 日本語)
  - 스타일 모드 (라이트 / 다크 / 시스템)

## 대상 사용자

- 개발

## 기술적 선호도 (선택 사항)

- 프론트엔트 위주 기술스택으로 Astro를 사용
- 백엔드 기능에 대해서는 Netlify Serverless 함수를 활용
  - 추후 Vercel로 옮겨갈때도 호환되는 구조를 고려
- API에 대해서는 openapi 문서를 작성
- 전체 구조는 FSD 아키텍처를 따르나 세부 구조에서 아래 내용을 지킬 것
  1. blocks/ : 실제로 pages/나 widgets/에서 사용될 컴포넌트 파일을 모아두는 곳. containers/와 interactions/ 또는 apis/를 조합한다.
  2. containers/ : astro를 활용해서 어떠한 기능도 하지 않지만 스타일링 컴포넌트로서의 역할만 한다.
  3. interactions/ : react(tsx)를 활용해서 기능 컴포넌트로서의 역할만 한다.
  4. apis/ : axios, supabase + react-query를 활용해서 백엔드(서버리스 함수)와 통신하는 함수를 구성한다.

# 시스템 패턴

## 아키텍처 개요
이 프로젝트는 FSD(Feature-Sliced Design) 아키텍처를 기반으로 구성되어 있습니다. 이 아키텍처는 기능별로 코드를 구성하여 유지보수성과 확장성을 높이는 것을 목표로 합니다.

## 프로젝트 구조
```
/docs - 문서화
/src
  /features - 기능별 구성 요소 
    /[feature_name] - 각 기능별 폴더
      /blocks - 기능별 구성 요소
      /containers - 기능별 컨테이너
      /interactions - 기능별 상호작용
      /apis - 기능별 API 호출
      /styles - 기능별 스타일
  /pages - 페이지 구성 요소 (파일 기반 라우팅)
  /shared - 공유 구성 요소
    /apis - API 호출
    /assets - 이미지 및 기타 정적 자산
    /components - 재사용 가능한 구성 요소
      /containers - 재사용 가능한 컨테이너
      /interactions - 재사용 가능한 상호작용
      /ui - Shadcn/UI 구성 요소
    /constants - 상수 및 설정
    /layouts - 레이아웃 구성 요소
    /lib - 라이브러리 및 헬퍼 함수
    /schemas - 데이터베이스 스키마
    /stores - 상태 관리 (Zustand)
    /styles - Tailwind CSS 스타일
    /types - TypeScript 타입 정의
    /utils - 유틸리티 함수 및 상수
  /widgets - 재사용 가능한 구성 요소
  middleware.ts - 미들웨어 (인증, 권한 부여)
```

## 주요 디자인 패턴

### 컴포넌트 구조화
1. **blocks/**: 실제로 pages/나 widgets/에서 사용될 컴포넌트 파일을 모아두는 곳. containers/와 interactions/ 또는 apis/를 조합합니다.
2. **containers/**: Astro를 활용해서 어떠한 기능도 하지 않지만 스타일링 컴포넌트로서의 역할만 합니다.
3. **interactions/**: React(tsx)를 활용해서 기능 컴포넌트로서의 역할만 합니다.
4. **apis/**: Axios, Supabase + React Query를 활용해서 백엔드(서버리스 함수)와 통신하는 함수를 구성합니다.

### 상태 관리
- **클라이언트 상태**: Zustand를 사용하여 전역 상태 관리 (예: 인증 상태)
- **서버 상태**: React Query를 사용하여 서버 데이터 관리 및 캐싱

### 인증 및 권한 부여
- Supabase Auth를 사용한 인증 시스템 구현
  - 로컬 개발: 도커에 설치된 self-hosted Supabase 연결
  - 배포 환경: 웹 Supabase 연결
- JWT 기반 인증 토큰 관리
- Netlify 함수를 통한 서버 사이드 인증 처리
- 미들웨어를 통한 보호된 라우트 관리

### 데이터 검증
- Zod 스키마를 사용하여 폼 데이터 및 API 응답 검증
- React Hook Form과 통합하여 폼 상태 관리 및 검증

### UI 컴포넌트
- Shadcn/UI를 기반으로 한 재사용 가능한 UI 컴포넌트
- Tailwind CSS를 사용한 스타일링

## 주요 컴포넌트 관계

### 페이지 구성
- Astro 페이지 (.astro 파일)가 레이아웃과 React 컴포넌트를 조합
- 클라이언트 하이드레이션을 위한 `client:load` 지시어 사용

### 데이터 흐름
1. React Query를 통한 데이터 요청
2. Supabase 클라이언트를 통한 데이터베이스 접근
3. 컴포넌트에 데이터 전달 및 렌더링

### 테마 및 언어 관리
- 상수 파일에서 테마 및 언어 옵션 정의
- 드롭다운 컴포넌트를 통한 사용자 선택 UI 제공

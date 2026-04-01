# 4. 토큰 작성 및 빌드 파이프라인 구축

## 목표
- 토큰을 단일 소스에서 관리하고 CSS/TS 산출물을 자동 생성한다.

## 실행 항목
1. 토큰 소스 파일을 계층별로 분리한다.
   - core/primitives
   - semantic
   - component-level alias
2. 빌드 파이프라인을 구성한다.
   - JSON/TS 입력 → CSS variables/TS types 출력
3. 라이트/다크/브랜드 변형 빌드를 지원한다.
4. 토큰 스냅샷 테스트를 추가한다.

## 산출물
- 토큰 빌드 스크립트
- 생성된 `tokens.css`, `tokens.ts`
- 스냅샷 테스트

## 참고
- https://github.com/design-tokens/community-group
- https://github.com/daangn/seed-design

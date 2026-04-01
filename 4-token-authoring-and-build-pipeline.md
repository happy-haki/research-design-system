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

## 사전조건
- 3단계 토큰 스키마/네이밍 고정

## 완료 조건(Definition of Done)
- 단일 소스에서 `tokens.css`, `tokens.ts` 재현 가능하게 생성
- 라이트/다크/브랜드 빌드가 동일 파이프라인에서 성공

## 검증 지표
- Leading: 빌드 성공률, 생성물 deterministic 비율
- Lagging: 수동 핫픽스 발생 건수, 토큰 드리프트 이슈 수

## 산출물
- 토큰 빌드 스크립트
- 생성된 `tokens.css`, `tokens.ts`
- 스냅샷 테스트

## 참고
- https://github.com/design-tokens/community-group
- https://github.com/daangn/seed-design
- https://github.com/adobe/spectrum-design-data
- https://github.com/primer/primitives

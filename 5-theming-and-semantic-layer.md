# 5. 테마 시스템과 시맨틱 레이어 설계

## 목표
- 다크모드/브랜드 확장에서도 컴포넌트 API를 안정적으로 유지한다.

## 실행 항목
1. surface/text/border/focus 등 시맨틱 슬롯을 먼저 설계한다.
2. 컴포넌트는 primitive token이 아니라 semantic token만 사용하게 강제한다.
3. 테마 전환 전략을 정의한다.
   - class 기반 또는 data-attribute 기반
4. 테마 회귀 테스트(시각 + 접근성)를 설정한다.

## 사전조건
- 4단계 토큰 빌드 파이프라인 안정화

## 완료 조건(Definition of Done)
- 신규 테마 추가 시 컴포넌트 API 변경 없이 적용 가능
- semantic token-only 규칙이 lint/리뷰에서 강제

## 검증 지표
- Leading: semantic-only 준수율, 테마 회귀 테스트 통과율
- Lagging: 테마 도입 시 컴포넌트 수정 파일 수

## 산출물
- semantic token 맵
- theme switching 가이드
- 테마 검증 체크리스트

## 참고
- https://github.com/cloudflare/kumo
- https://github.com/daangn/seed-design
- https://carbondesignsystem.com/
- https://polaris.shopify.com/

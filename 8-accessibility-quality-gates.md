# 8. 접근성 및 품질 게이트 자동화

## 목표
- 접근성/품질 회귀를 CI에서 차단한다.

## 실행 항목
1. 테스트 피라미드를 정의한다.
   - unit
   - interaction
   - a11y(axe 등)
   - visual regression
2. 필수 게이트를 CI에 연결한다.
   - lint/typecheck/test
   - 접근성 임계치
3. 실패 시 차단 정책을 강제한다.

## 사전조건
- 7단계 컴포넌트 계약/variant matrix 적용

## 완료 조건(Definition of Done)
- a11y/interaction/visual gate가 CI에서 기본 차단으로 동작
- 예외 승인(waiver) 정책과 책임자 지정

## 검증 지표
- Leading: CI gate 통과율, false-positive 비율
- Lagging: 릴리즈 후 접근성 회귀 건수

## 산출물
- CI 품질 게이트 설정
- 접근성 기준표(WCAG 매핑)
- 회귀 리포트 포맷

## 참고
- https://github.com/mui/base-ui
- https://github.com/cloudflare/kumo
- https://www.radix-ui.com/primitives
- https://atlassian.design/

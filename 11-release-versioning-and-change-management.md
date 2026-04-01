# 11. 릴리즈/버저닝/변경관리 체계

## 목표
- 브레이킹 변경을 예측 가능하게 관리하고 안정적인 배포 주기를 유지한다.

## 실행 항목
1. SemVer 정책을 토큰/컴포넌트 각각에 정의한다.
2. changeset 기반 릴리즈 노트를 자동화한다.
3. 브레이킹 변경 시 마이그레이션 가이드를 필수화한다.

## 사전조건
- 10단계 파일럿 마이그레이션 검증 완료

## 완료 조건(Definition of Done)
- 토큰/컴포넌트 각각의 SemVer 정책 확정
- 브레이킹 변경은 changelog + migration guide 없이는 릴리즈 불가

## 검증 지표
- Leading: changelog 완성도, 릴리즈 체크리스트 통과율
- Lagging: 업그레이드 실패율, 버전 영향도 예측 오차

## 산출물
- versioning policy
- release checklist
- changelog 템플릿

## 참고
- https://github.com/cloudflare/kumo
- https://github.com/mui/base-ui
- https://atlassian.design/release-phases
- https://github.com/microsoft/fluentui

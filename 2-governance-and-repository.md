# 2. 거버넌스와 저장소 구조 수립

## 목표
- 누가 무엇을 승인/소유하는지 명확히 하여 변경 품질을 안정화한다.

## 실행 항목
1. CODEOWNERS/리뷰 정책을 설계한다.
2. 변경 등급(토큰/컴포넌트/문서/브레이킹)별 승인 규칙을 정의한다.
3. 모노레포 구조를 고정한다.
   - `tokens/`, `primitives/`, `components/`, `docs/`, `apps/`
4. 변경 이력 표준(changeset 또는 동등 체계)을 도입한다.

## 사전조건
- 1단계 헌장 승인
- 핵심 리뷰어(Design/Frontend/Accessibility/Performance) 지정

## 완료 조건(Definition of Done)
- 변경 등급별 승인 규칙, 예외 처리 규칙, 에스컬레이션 경로 문서화
- 저장소 구조와 CODEOWNERS가 실제 PR에서 동작 확인

## 검증 지표
- Leading: 리뷰 재할당률, 승인 리드타임
- Lagging: 정책 위반 PR 비율, 긴급 우회(override) 빈도

## 산출물
- 거버넌스 문서
- 저장소 디렉터리 표준
- PR 템플릿/릴리즈 규칙

## 참고
- https://github.com/cloudflare/kumo
- https://github.com/daangn/seed-design
- https://github.com/carbon-design-system/carbon
- https://github.com/microsoft/fluentui

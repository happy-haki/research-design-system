# 7. 컴포넌트 계약(Contract)과 Variant 체계 정의

## 목표
- 컴포넌트 API를 설계 자산으로 관리하고 브레이킹 변경을 통제한다.

## 실행 항목
1. 컴포넌트 계약 템플릿을 만든다.
   - props API
   - variants/sizes/states
   - token dependency
   - accessibility 요구사항
   - 성능 기대치
2. Variant 조합 규칙을 문서화한다.
3. 각 컴포넌트의 Do/Don’t 예시를 추가한다.

## 사전조건
- 6단계 primitives API 안정화

## 완료 조건(Definition of Done)
- 각 컴포넌트에 API/variants/states/token/a11y/perf 계약서 존재
- variant matrix 기준 위반 조합이 자동 검출

## 검증 지표
- Leading: 계약서 작성률, 미정의 props 탐지 건수
- Lagging: 브레이킹 변경 사고 건수

## 산출물
- component contract catalog
- variant matrix
- 브레이킹 변경 기준서

## 참고
- https://github.com/daangn/seed-design
- https://github.com/mui/base-ui
- https://github.com/chakra-ui/chakra-ui
- https://ant.design/

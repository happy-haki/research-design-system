# 0. Deep Research 기반 순서 검증 및 보강 기준

## 검증 결론
- 현재 1→12 순서는 **큰 틀에서 타당**하다.
- 단, 기존 문서는 실행 항목 중심이라서 실제 운영 시 실패하기 쉬운 구간(소유권, 측정 정의, 게이트 예외 정책, 마이그레이션 완료 기준)이 있었다.
- 따라서 본 보강안은 순서를 유지하면서 각 단계에 다음 3가지를 강제한다.
  1. 사전조건(Prerequisites)
  2. 완료 조건(Definition of Done)
  3. 검증 지표(Leading/Lagging)

## 병렬 검증 요약
- 비평가 관점: “체크리스트는 있지만 실행 스파인(의존성/완료 기준/책임)이 약함”
- 과학자 관점: “각 단계를 실험 카드로 운영해야 가설 검증이 가능함”
- 리뷰어 관점: “문서 출판 가능성은 있으나 운영 세부(지표 공식/소유자/리뷰 주기)가 필요함”

## 외부 벤치마크에서 반영한 핵심
1. **토큰/시맨틱 우선**: DTCG, Primer, Carbon
2. **접근성 내장 프리미티브**: Radix, Base UI, Spectrum
3. **릴리즈 단계와 변경관리**: Atlassian release phases, Kumo/changesets
4. **도입/마이그레이션 제품화**: Polaris, Seed Design, Reshaped

## 비교 대상(추가)
- Reshaped: https://github.com/reshaped-ui/reshaped
- Primer: https://github.com/primer/primitives
- Carbon: https://carbondesignsystem.com/
- Spectrum: https://github.com/adobe/spectrum-design-data
- Radix: https://www.radix-ui.com/primitives
- Atlassian Design: https://atlassian.design/
- Polaris: https://polaris.shopify.com/
- Chakra UI: https://github.com/chakra-ui/chakra-ui
- Ant Design: https://ant.design/

## 운영 원칙(강제)
- 문서 작성 완료 ≠ 단계 완료
- 단계 완료는 반드시 지표/테스트/실사용 증거를 포함해야 함
- 지표는 최소 4요소를 포함해야 함
  - 소유자
  - 계산 방식
  - 측정 주기
  - 목표/허용 범위

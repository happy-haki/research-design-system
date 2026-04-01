# 6. 파운데이션 프리미티브 구축

## 목표
- 접근성과 상호작용이 보장된 저수준 UI primitives를 만든다.

## 실행 항목
1. Headless/unstyled primitive 전략을 채택한다.
2. 필수 primitives를 우선 구현한다.
   - Button
   - Input
   - Checkbox/Radio
   - Dialog/Popover
3. 각 primitive에 상태 모델을 정의한다.
   - hover/focus/active/disabled/loading
4. ARIA 및 키보드 내비게이션 기준을 테스트로 고정한다.

## 사전조건
- 5단계 시맨틱 테마 레이어 적용 가능 상태

## 완료 조건(Definition of Done)
- P0 primitives(Button/Input/Checkbox/Radio/Dialog/Popover) 구현 및 문서화
- 키보드/스크린리더 시나리오 테스트 통과

## 검증 지표
- Leading: primitive 테스트 통과율, 접근성 시나리오 커버리지
- Lagging: 제품팀의 primitive 재구현 비율

## 산출물
- primitives 패키지
- interaction/accessibility 테스트
- 사용 가이드 문서

## 참고
- https://github.com/mui/base-ui
- https://github.com/cloudflare/kumo
- https://www.radix-ui.com/primitives
- https://github.com/reshaped-ui/reshaped

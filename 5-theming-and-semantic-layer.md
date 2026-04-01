# 5. 테마 시스템과 시맨틱 레이어 설계

## 목표
- 다크모드/브랜드 확장에서도 컴포넌트 API를 안정적으로 유지한다.

## 실행 항목
1. surface/text/border/focus 등 시맨틱 슬롯을 먼저 설계한다.
2. 컴포넌트는 primitive token이 아니라 semantic token만 사용하게 강제한다.
3. 테마 전환 전략을 정의한다.
   - class 기반 또는 data-attribute 기반
4. 테마 회귀 테스트(시각 + 접근성)를 설정한다.

## 산출물
- semantic token 맵
- theme switching 가이드
- 테마 검증 체크리스트

## 참고
- https://github.com/cloudflare/kumo
- https://github.com/daangn/seed-design

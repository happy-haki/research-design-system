# 1. 비전과 범위 정의

## 목표
- 디자인 시스템의 목적을 **제품 속도, 일관성, 접근성, 성능**으로 명확히 고정한다.
- 팀이 “무엇을 만들지”보다 “어떤 계약(Contract)을 지킬지”부터 합의한다.

## 실행 항목
1. 시스템 원칙 5개를 고정한다.
   - Token-first
   - Accessibility by default
   - Performance budget first
   - Contract-driven components
   - 문서 우선 운영
2. 지원 범위를 명시한다.
   - 플랫폼(웹 우선, 확장 계획 포함)
   - 우선 컴포넌트군(Button/Input/Dialog 등)
   - 라이트/다크 테마 지원 원칙
3. 성공 지표를 수치로 적는다.
   - 도입 팀 수, 컴포넌트 재사용률, 릴리즈 주기, 성능 예산 준수율

## 사전조건
- 디자인 시스템 오너(PO/Tech Lead) 1명 이상 지정
- 1차 소비 팀(파일럿 팀) 후보 확정

## 완료 조건(Definition of Done)
- 헌장(원칙/범위/비범위) 승인 완료
- P0 컴포넌트 목록과 KPI 기준선(baseline) 문서화 완료

## 검증 지표
- Leading: 헌장 승인 리드타임, 범위 변경 요청 건수
- Lagging: 분기별 재작업률, 팀별 도입률

## 산출물
- 디자인 시스템 헌장(1페이지)
- 우선순위 컴포넌트 목록
- KPI/운영 지표 표

## 참고
- https://github.com/cloudflare/kumo
- https://github.com/Dammyjay93/interface-design
- https://github.com/primer/primitives
- https://atlassian.design/

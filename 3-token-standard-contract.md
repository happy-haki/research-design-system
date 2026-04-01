# 3. 토큰 표준 계약 정의

## 목표
- 토큰 포맷을 표준화해 도구/플랫폼 간 호환성을 확보한다.

## 실행 항목
1. Design Tokens Community Group(DTCG) 포맷을 기준으로 채택한다.
2. 토큰 스키마를 정의한다.
   - `$value`, `$type`, `$description`, `$extensions`
3. 네이밍 규칙을 분리한다.
   - primitive token
   - semantic token
   - component token
4. 금지 규칙을 명시한다.
   - 하드코딩 색상/간격
   - 의미 없는 축약 이름

## 사전조건
- 2단계 거버넌스 규칙 적용
- 토큰 도메인(색상/타이포/간격/모션/반경) 합의

## 완료 조건(Definition of Done)
- DTCG 기반 스키마 검증 통과
- primitive/semantic/component 토큰 네이밍 규칙 린트 정의

## 검증 지표
- Leading: 스키마 유효 토큰 비율, 네이밍 위반 건수
- Lagging: 테마/컴포넌트 간 토큰 재정의 충돌 건수

## 산출물
- token schema 문서
- token naming 규칙서
- 토큰 린트 규칙 초안

## 참고
- https://github.com/design-tokens/community-group
- https://github.com/primer/primitives
- https://github.com/adobe/spectrum-design-data

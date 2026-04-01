# 2. 거버넌스와 저장소 구조 수립

## 목표
- 누가 무엇을 승인/소유하는지 명확히 하여 변경 품질을 안정화한다.

## 실행 항목
1. CODEOWNERS/리뷰 정책을 설계한다.
2. 변경 등급(토큰/컴포넌트/문서/브레이킹)별 승인 규칙을 정의한다.
3. 모노레포 구조를 고정한다.
   - `tokens/`, `primitives/`, `components/`, `docs/`, `apps/`
4. 변경 이력 표준(changeset 또는 동등 체계)을 도입한다.

## 산출물
- 거버넌스 문서
- 저장소 디렉터리 표준
- PR 템플릿/릴리즈 규칙

## 참고
- https://github.com/cloudflare/kumo
- https://github.com/daangn/seed-design

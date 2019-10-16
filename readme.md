# RXJS Study Start
RXJS 스터디입니다. RXJS 5버전 기준으로 작성되었습니다.


## RXJS란
시퀀스를 사용하여 비동기 및 이벤트 기반 프로그램을 작성하기위한 라이브러리이다. RxJS를 이벤트의 Lodash로 생각하면 편하다.

## RXJS 용어

- Observable : 지속적으로 생기는 array
- Subscription : 지속적으로 생기는 for 루프 
- Emit : Observable이 무언가를 구독하여 값을 내뱉을 때
- Operator : Observable이 값을 방출하는 방식을 변경하는 함수

## Cold Observables vs Hot Observables
- Cold Observables : 일반적인 YouTube 비디오와 같이 구독이 시작될 때만 값을 내보내 거나 생성하기 시작, 각 subscriber 는 처음부터 끝까지 동일한 이벤트 순서 (또는 패턴)를 보게됩니다
- Hot Observables : 항상 YouTube의 실시간 스트림과 같은 새로운 값으로 업데이트됩니다. 구독하면 가장 최근 값으로 시작하여 향후 변경 사항 만 볼 수 있습니다.

## Reference
https://rxjs-dev.firebaseapp.com/guide/overview
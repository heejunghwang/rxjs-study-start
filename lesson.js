// helper function
function print(val) {
    let el = document.createElement('p');
    el.innerText = val
    document.body.appendChild(el)
}

print("3");

// 1. [create] 콘솔 로그 찍어보기
const observable = Rx.Observable.create(observer => {
    observer.next('hello'); //구독자에게 데이터를 전달한다.
    observer.next('world');
});

observable.subscribe(val => console.log(val));

// 2. [fromEvent] document 객체를 클릭했을때 클릭이벤트를 콘솔로그를 찍어보기
const clicks = Rx.Observable.fromEvent(document, 'click'); //TODO : fromEvent 함수 설명

clicks.subscribe(clickEvent => console.log(clickEvent));

// 3. [fromPromise] Promise가 실행이 완료된 후 'resolved' 라는 단어를 콘솔 로그로 찍어보기
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('resolved!')
    }, 1000)
});

const obsvPromise = Rx.Observable.fromPromise(promise); //TODO : fromPromise 함수 설명

obsvPromise.subscribe(result => console.log(result));


// 4. [timer] timer를 사용하여 1초후에 한번씩 'ding!!!' 라는 단어를 콘솔 로그로 찍어보기
const timer = Rx.Observable.timer(1000);

timer.subscribe(done => console.log('ding!!!'));

// 5. [interval] 1초에 한번씩 콘솔로그 찍기
const interval = Rx.Observable.interval(1000);
//
// interval.subscribe(i => console.log( i ));

// 6. [of] 등록된 객체들 콘솔로그 찍기
const mashup = Rx.Observable.of('anything', ['you', 'want'], 23, true, {cool: 'stuff'})

mashup.subscribe(val => console.log(val));

//7. timer가 끝났을때 콘솔로그 찍기
timer
    .finally(() => console.log('All done!'))
    .subscribe();


// 참고 : 아래의 경우에는 finally가 절대 동작하지 않음. unsubscribe를 해야한다.
// const interval = Rx.Observable.interval(1000);
// interval
//     .finally(()  => console.log('All done!'))
//     .subscribe(x => console.log(x))

//8. unsubscribe
const subscription = interval.subscribe();
subscription.unsubscribe();

//9. Cold Observable Example
const cold = Rx.Observable.create((observer) => {
    observer.next(Math.random())
});

cold.subscribe(a => console.log(`Subscriber A: ${a}`));
cold.subscribe(b => console.log(`Subscriber B: ${b}`));

// 10. Hot Observable Example
const x = Math.random();

const hot = Rx.Observable.create(observer => {
    observer.next(x)
});

hot.subscribe(a => console.log(`Subscriber A: ${a}`));
hot.subscribe(b => console.log(`Subscriber B: ${b}`));

데이터 제거

예) 기존의 배열 데이터를 건드리지 않고 데이터 제거하기
````javascript
    const arr = [1, 2, 3, 4, 5]
````
기존의 배열은 그대로 유지하고 새배열에서 3을제외
방법1 : slice와 concat을 이용 (3의 왼쪽배열과 우측 배열을 서로 합쳐줌)
````javascript
array.slice(0,2).concat(array.slice(3,5)) // [1, 2, 4, 5]
````

방법2 : 배열 전개 연산자를 사용
````javascript
[ ...array.slice(0,2).concat(array.slice(3,5)) ]; // [1, 2, 4, 5]
````

방법2 : 배열에 filter라는 내장함수. 이 함수는 특정 조건에 부합하는 원소들만 뽑아내서 새 배열을 만들어준다. 
````javascript
array.filter(num => num !== 3); // [1, 2, 4, 5]
````




데이터 수정
- 기존의 배열, 내부에 있는 객체를 절대 직접 수정하면 안됨.

예제 )
````javascript
const array = [
    { id: 0, text: 'hello', tag: 'a'},
    { id: 1, text: 'world', tag: 'b'},
    { id: 2, text: 'bye', tag: 'c'}
];
````
기존의 값을 건드리지 않고 id가 1인 객체의 text 값을 'Korea'라는 값으로 바꾼 새로운 배열 만들어보기
````javascript
const modifiedArray = array.map(item => item.id === 1
  ? ({ ...item,. text: 'Korea' }) // id 가 일치하면 새 객체를 만들고, 기존의 내용을 집어넣고 원하는 값 덮어쓰기
  : item // 바꿀 필요 없는것들은 그냥 기존 값 사용
````

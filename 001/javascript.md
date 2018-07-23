# javascript



**기본 타입**

1. Number - 실수, 부동소수점 64비트(double)
2. String - 문자열
3. Boolean - True, False
4. undefined - 변수에 값이 할당되지 않을 때 인터프리터가 undefined 로 할당. 값이자 타입
5. null - 개발자가 의도적으로 할당하는 값. typeof 값이 Object 로 반환. 따라서 === 로 확인



var nullCheck = null;
console.log(typeof nullCheck === null); // false
console.log(nullCheck === null); // true
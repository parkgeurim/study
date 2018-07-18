https://calyfactory.github.io/%EC%A0%9C%EC%9D%B4%EC%8A%A8%ED%8C%8C%EC%8B%B1/

http://zeddios.tistory.com/153



# json

 json이란 무엇일까?

json은 JavaScript Object Notation으로 데이터를 주고받을때 사용되는 포맷 중 하나이다. 본래는 자바스크립트 언어로부터 파생되어 자바스크립트의 구문 형식을 따르지만 언어 독립형 데이터 포맷이다. 즉 프로그래밍 언어나 플랫폼에 독립적이므로, C, C++, C#, JAVA, PYTHON 등 여러 프로그래밍 언어에서 사용 할 수 있다.

JSON 포맷은 [RFC 7159](https://tools.ietf.org/html/rfc7159)에 기술되어있다.

json은 key:value 타입으로 데이터를 표현하며, Object와 Array가 있다.



\###Object

object는 key/value로 표현되고 {}중괄호로 시작과 끝을 나타낸다. 

{ 

​	"key1": "value1", "key2": "value2" 

} 



###Array 

array는 []대괄호로 구분되고 각 요소는 기본 자료형이나 배열, 객체가 될 수 있다. 



[

​	"value1",

​	 "value2", 

​	"value3" 

] 



Object와 Array를 함께 섞어 다양한 데이터를 표현 할 수 있다. 



{ 

​	"name": "hello!", 

​	"data": {

​		 "name": "jspiner",

​		 "age": 28, 

​		"birth": 1991

​	 }, 

​	"friends": [ 

​		"john", 

​		"smith", 

​		"sam"

​	 ], 							

​	"books": [ 

​		{ 

​			"name": "book1", 

​			"price": 10000 

​		}, 

​		{

​			 "name": "book2", 

​			"price": 15000 

​		}, 

​		{ 

​			"name": "book3",

​			 "price": 7000 

​		} 

​	] 

} 



이렇게 데이터를 표현하면 프로그래밍 언어와 플랫폼에 독립적이기 때문에 서로 다른 시스템 간에 통신을 하기에 용의합니다. 




json :

https://calyfactory.github.io/%EC%A0%9C%EC%9D%B4%EC%8A%A8%ED%8C%8C%EC%8B%B1/

http://zeddios.tistory.com/153

ajax :

 http://tcpschool.com/ajax/ajax_intro_basic



# ajax

Ajax (Asynchronous JavaScript and XML)

Ajax는 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법의 하나이다.

Ajax는 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있다.

즉, Ajax를 이용하면 백그라운드 영역에서 서버와 통신하여, 그 결과를 웹 페이지의 일부분에만 표시할 수 있다.

 

이때 서버와는 다음과 같은 다양한 형태의 데이터를 주고받을 수 있습니다.

 

 - JSON

 - XML

 - HTML

텍스트 파일 등





#### Ajax의 장점

- 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있습니다.
- 웹 페이지가 로드된 후에 서버로 데이터 요청을 보낼 수 있습니다.
- 웹 페이지가 로드된 후에 서버로부터 데이터를 받을 수 있습니다.
- 백그라운드 영역에서 서버로 데이터를 보낼 수 있습니다.





#### **Ajax의 단점**

- Ajax를 쓸 수 없는 브라우저에 대한 문제가 있다.

  **ajax를 지원하지 않는 웹 브라우저** 		

  - [오페라](https://ko.wikipedia.org/wiki/%EC%98%A4%ED%8E%98%EB%9D%BC_(%EC%9B%B9_%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80)) 7 이하

  - [마이크로소프트](https://ko.wikipedia.org/wiki/%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%86%8C%ED%94%84%ED%8A%B8) [인터넷 익스플로러](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%EC%9D%B5%EC%8A%A4%ED%94%8C%EB%A1%9C%EB%9F%AC) 4.0이하.

  - 텍스트 기반의 브라우저 [링크스](https://ko.wikipedia.org/wiki/%EB%A7%81%ED%81%AC%EC%8A%A4_(%EC%9B%B9_%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80)), [w3m](https://ko.wikipedia.org/wiki/W3m)

  - 시각장애인을 위한 브라우저

  - 1997년 이전 브라우저

    

- 페이지 이동없는 통신으로 인한 보안상의 문제

- 지원하는 Charset이 한정되어 있다.

  ajax 자체가 utf-8로 인코딩하여 보내기 때문에 euc-kr 페이지 내에서 한글이 깨지는 문제가 발생할 수 있다

  -> **해결** : 

  1. 넘길때는 **encodeURIComponent** 함수를 사용한다. 

     예)

  		$.post(                  
		
  			"testProc.jsp",                 
		
  			 {                      	
		
  				'mode' : $("#mode").val(),                      
		
  				'contents' 	: **encodeURIComponent(**"한글테스트"**)**                      
		
  			}                
		
  		  ); 

  

  2. 받을때에는 **java.net.URLDecoder** 를 사용한다.

   예)

  ​        String contents = **java.net.URLDecoder.decode(**request.getParameter("contents")**,"UTF-8");**

  

- 스크립트로 작성되므로 디버깅이 용이하지 않다.

- 요청을 남발하면 역으로 서버 부하가 늘 수 있음.

- [동일-출처 정책](https://ko.wikipedia.org/wiki/%EB%8F%99%EC%9D%BC-%EC%B6%9C%EC%B2%98_%EC%A0%95%EC%B1%85)으로 인해 다른 도메인과는 통신이 불가능하다.





#### **기본문법**		



```html

   
$(function(){

	$("#button1").click(function(){
		$.ajax({ 
    		url:"data/a.text.txt", <span class="blue">//파일을 연결하는 주소</span>
    		type:"get", <span class="blue">// post 또는 get</span>
   		 dataType:"text", <span class="blue">// 파일의 종류</span>
			success:function( text ){
				$("#result").html( text );
			}, error:function(){
   				 alert("에러, 다시 확인하고 연결하기");	<span class="blue">// 데이터를 가져오기 실패했을때의 기능</span>
			} 
			
		});
	});

});

```
```javascript
<script>
$(function(){

		$("#button1").click(function(){
			$.ajax({ 
				url:"data/a.text.txt", //파일을 연결하는 주소
				type:"get", // post 또는 get
				dataType:"text", // 파일의 종류
				success:function( text ){
					$("#result").html( text );
				}, error:function(){
					alert("에러, 다시 확인하고 연결하기");	// 데이터를 가져오기 실패했을때의 기능
				} 
				
			});
		});

	});
</script>
```



```html
<p>
    <input type="button" value="html 파일 출력" id="button2"/>
</p>

```



#### 주의사항



##### ※경로를 연결할때 공백처리 주의!

​		나쁜예)  data / a.text.txt

​		좋은예)  data/a.text.txt  공백없이 연결하기!






# json

 #### json이란 무엇일까?

json은 JavaScript Object Notation으로 데이터를 주고받을때 사용되는 포맷 중 하나이다. 본래는 자바스크립트 언어로부터 파생되어 자바스크립트의 구문 형식을 따르지만 언어 독립형 데이터 포맷이다. 즉 프로그래밍 언어나 플랫폼에 독립적이므로, C, C++, C#, JAVA, PYTHON 등 여러 프로그래밍 언어에서 사용 할 수 있다.



json은 key:value 타입으로 데이터를 표현하며, Object와 Array가 있다.



### Object

object는 key/value로 표현되고 {}중괄호로 시작과 끝을 나타낸다. 

{ 

​	"key1": "value1", 

​	"key2": "value2" 

} 



### Array 

array는 []대괄호로 구분되고 각 요소는 기본 자료형이나 배열, 객체가 될 수 있다. 



[

​	"value1",

​	"value2", 

​	"value3" 

] 



Object와 Array를 함께 섞어 다양한 데이터를 표현 할 수 있다. 



{ 

​	"name": "hello!", 

​	"data": [

​		 "name": "jspiner",

​		 "age": 28, 

​		"birth": 1991

​	 ], 

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









예제) 버튼을 클릭했을때 json에 담겨있는 컨텐츠 가져오기



date/test.json

```json
{
	"smartphone":
		{
			"apple":
				{
					"model":"iPhoneX",
					"os":"ios",
					"display":"5.5inch"
				}
		}
}
```





```javascript
<script>
    $(function(){
		$("#jsonBtn").click(function(){
			$.ajax({
				url:"data/test.json",
				type:"get",
				dataType:"json",
				success:function( json ){
					//		json 방식은 연관배열처럼 호출
					//			연관배열 = box.a, box.b
					var model = json.smartphone.apple.model;
					var os = json.smartphone.apple.os;
					var display = json.smartphone.apple.display;

					// 가져온 데이터 태그에 담아주기 
					var ul = $("<ul>");
					var li1 = $("<li>").html( model );
					var li2 = $("<li>").html( os );
					var li3 = $("<li>").html( display );

					// ul태그에 li태그들 연결하기
					ul.append(li1).append(li2).append(li3);

					// 나열된 값들 결과창에 출력하기
						$("#result").append( ul );

				},error:function(){
						alert("에러!");
				}
			});
		});
	});

    
</script>
```



```html
<p>
	<input type="button" value="json파일 요청하기" id="jsonBtn"/>
</p>
<div id="result">
</div>
```








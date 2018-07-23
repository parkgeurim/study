

# Ajax

**Ajax (Asynchronous JavaScript and XML)**

1. Ajax는 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법의 하나이다.
2. Ajax는 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있다.
3. 즉, Ajax를 이용하면 백그라운드 영역에서 서버와 통신하여, 그 결과를 웹 페이지의 일부분에만 표시할 수 있다.
4. 이때 서버와는 다음과 같은 다양한 형태의 데이터를 주고받을 수 있습니다.

 

 - JSON
 - XML
 - HTML
 - txt 파일 등









#### Ajax의 장점

- 웹 페이지 전체를 다시 로딩하지 않고도, 웹 페이지의 일부분만을 갱신할 수 있습니다.
- 웹 페이지가 로드된 후에 서버로 데이터 요청을 보낼 수 있습니다.
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

  ->  **해결** : 

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
					alert("에러");	// 데이터를 가져오기 실패했을때의 기능
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



```json
{ 

	"key1": "value1", 

	"key2": "value2" 

} 
```



### Array 

array는 []대괄호로 구분되고 각 요소는 기본 자료형이나 배열, 객체가 될 수 있다. 



```json
[

	"value1",

	"value2", 

	"value3" 

] 

```





Object와 Array를 함께 섞어 다양한 데이터를 표현 할 수 있다. 

```json
{ 

	"name": "hello!", 

	"data": [

		 "name": "jspiner",

		 "age": 28, 

		"birth": 1991

	 ], 

	"friends": [ 

		"john", 

		"smith", 

		"sam"

	 ], 							

	"books": [ 

		{ 

			"name": "book1", 

			"price": 10000 

		}, 

		{

			 "name": "book2", 

			"price": 15000 

		}, 

		{ 

			"name": "book3",

			 "price": 7000 

		} 

	] 

} 

```



이렇게 데이터를 표현하면 프로그래밍 언어와 플랫폼에 독립적이기 때문에 서로 다른 시스템 간에 통신을 하기에 용의합니다. 



### 파싱

json에서는 html에서 사용하는 태그를 사용하지 않기때문에 브라우저가 인식하기어렵다.

그래서 데이터를 분해하고 다시 재설정하는 파싱이라는 작업이 필요하다.





### Ajax를 활용하여 json파일 불러오기!



data/test.json

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



![](C:\Users\Administrator\Downloads\study-master\study-master\001\img\01.png)







![](C:\Users\Administrator\Downloads\study-master\study-master\001\img\02.png)





# xml

- HTML과 같이 XML은 *태그*(''<' ,'>',꺽쇠괄호)와 *속성*(`이름="값"`형태)을 이용한다. HTML이 각 태그와 속성의 의미가 무엇이고, 태그들 가운데의 텍스트가 어떻게 브라우저에 보일것인지를 기술하는 반면에, XML은 태그를 데이타들의 분리자로 사용할 뿐만 아니라 데이타에 대한 해석을 완전히 그것을 읽는 응용 프로그램에 맡긴다.  

- xml문서는 html에서 사용하는 태그를 하나도 사용하지 않기 때문에 브라우저에서 인식하기가 매우 어렵다.

- xml문서에서 태그를 분해하고 다시 재설정 하는 "파싱" 이라는 작업이 필요하다.



```xml
<?xml version="1.0" encoding="utf-8" ?>
<smartphone>
	<apple>
		<model>iPhoneX</model>
		<os>ios</os>
		<display>5.5inch</display>
		<color>red</color>
	</apple>
</smartphone>
```



```javascript
  <script>
	$(function(){
		$("#xmlBtn").click(function(){
			$.ajax({
				url:"data/test02.xml",
				type:"get",
				dataType:"xml",
				success:function( xml ){
					/*
					 xml이 가지고 있는 태그들은 제외하고, 글자( 내용 )만 추출하기
						내용물 분해	, 분해된 내용 변수에 담기
					*/
					var model = $( xml ).find("model").text();
					var os = $( xml ).find("os").text();		
					var display = $( xml ).find("display").text();

					// html 에서 인식할 수 있도록 태그에 담기!

					var ol = $("<ol>");
					var li1 = $("<li>").html("model : "+model);
					var li2 = $("<li>").html("os : "+os);
					var li3 = $("<li>").html("display : "+display);

					// 만들어진 ol태그와 li태그들 연결하기
					ol.append(li1).append(li2).append(li3);

					//  result 결과창에 출력
					$("#result").append( ol );
					
				
				},error:function(){
					alert("에러");
				}
			});
		});
	});
  </script>
```



```html
<p>
    <input type="button" value="xml파일 요청하기" id="xmlBtn"/>
</p>
<div id="result">
</div>
```







![03](C:\Users\Administrator\Downloads\study-master\study-master\001\img\03.png)







![04](C:\Users\Administrator\Downloads\study-master\study-master\001\img\04.png)







## json / xml  비교





#### JSON의 장점

- 내용이 함축적으로 최소한의 정보만을 가지고있다. 
- XML과 비교하여 용량이 줄어들고 속도는 그만큼 빨라지게된다. 
- 객체구조와 {} 배열구조의 [] 조합으로 효율적인 데이터 구성이 가능하다. 
- 파싱이 매우 간편하고,  일반적인 변수처럼 사용도 가능하다. 



#### JSON의 단점

- 내용이 함축적이다 보니 내용의 의미파악은 힘들수 있다. 
- 아무래도 적은규격의 데이터 전송에 적합한 방식이기떄문에 XML보다는 빠르지만 대용량급의 데이터 송수신엔 부적합 모습도 있다. 



#### XML의 장점

- 작성하기가 간편하다(tag구조) 
- 정보들을 한눈에 보기 쉽다.

  

#### XML의 단점

- 태그를 사용하기 때문에 문서의 양이 필요이상으로 많다.
- 배열형식이나 반복구조의 경우 불필요한 데이터가 계속 해서 나타난다. 
- 위의 이유로 이로인해 파싱이 힘들어지고 속도는 느려진다. 









출처

json :

https://calyfactory.github.io/%EC%A0%9C%EC%9D%B4%EC%8A%A8%ED%8C%8C%EC%8B%B1/

http://zeddios.tistory.com/153

ajax :

 http://tcpschool.com/ajax/ajax_intro_basic

xml : 

http://usbs.tistory.com/entry/XML-JSON-%EA%B0%84%EB%8B%A8%ED%95%9C-%EB%B9%84%EA%B5%90-%EB%B6%84%EC%84%9D




























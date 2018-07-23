### $(dom).remove() 

$(dom)과 그 하위 요소를 전부 제거한다. 

제거된 요소가 jQuery 데이터 형태로 유지되나,  제거된 요소 및 하위 요소들의 데이터, 이벤트는 전부 제거된다. 



### $(dom).detach() 

$(dom)과 그 하위 요소를 전부 제거한다. 

제거된 요소가 jQuery 데이터 형태로 유지되고,  제거된 요소의 데이터, 이벤트도 제거되지 않고 유지된다. 

화면에서 제거했다 추후 재삽입할 경우 사용된다. 



```javascript
<script>
	var div = $("div").detach(); // 화면에서 div를 제거
	$("#diffDiv").append(div); // "diffDiv"라는 요소에 제거한 div를 추가
    
</script>
```



### $(dom).empty() 

$(dom)의 하위요소들(텍스트 포함)을 제거한다. 

자식 요소들의 데이터, 이벤트도 함께 제거된다.  detach와 달리, 제거된 요소가 데이터로 유지되지 않는다. 



```javascript
<script>
	var child = $("div").empty(); // 화면에서 div내에 존재하는 하위 요소들을 제거
	$("#diffDiv").append(child)// 제거한 하위요소들을 append해도 아무것도 부착되지 않는다
    
</script>
```


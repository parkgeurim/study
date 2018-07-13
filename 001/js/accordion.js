$(document).ready(function(){

			// 클릭전에 dd 숨겨주기
			$("dd").hide();


			// dt를 클릭하면 dd가 보이도록 만들기
			$("dt").click(function(){
				$("dd").slideUp(500);
				$(this).next().slideDown(500,"linear");
				/*
					dd가 부드럽게 slideDown 되게 해주세요.
					대상: dd
					이벤트: slideDown
					이벤트 핸들러: dd
				*/
			});

			/*
				문제점 : dt를 클릭하면 dd가 한꺼번에 보임
					해결:
						1)class 또는 id를 사용하여 해결할 수 있음

					해결:
						dt를 클릭하면 해당하는 값의 내용만 보여지도록 만들기
							애플이면 애플만 보이도록 만들기!

						2) this (지금 선택한 대상) 선택자를 사용하는 방법
							+ 순서가 중요함!
								이벤트가 발생하고, 위에서부터 순서대로 읽어줌
									1) dd들 숨겨주고
									2) 지금 선택한 대상의 다음요소 보여주기			
			*/
		});
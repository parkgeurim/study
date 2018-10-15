sass 컴파일



순서

1. SASS 파일 준비. (https://getbootstrap.com/docs/3.3/getting-started/ 다운)
2. Rudy 설치. (https://rubyinstaller.org/downloads/ Rudy 2.3.3)
3. 명령 프롬포트를 이용한 SASS 설치 및 컴파일.





Rudy설치순서

1. rudy다운 설치  

2. cmd창에서  gem install sass  

3. 명령 프롬포트에서 아까전 준비했던 .sass파일이 있는곳으로 이동합니다.

   `cd /sass/assets/stylesheets/`   (실제경로 : c/sass/assets/stylesheets/)

   4. css 폴더에 `style.css`로 `_bootstrap.sass`파일을 컴파일합니다. 

      ```
      sass _bootstrap.scss:../css/style.css
      ```

      






# haezoom.github.io
 해줌 Github io
 해줌 스타일 가이드가 적용된 `Bootstrap 3.x` 의 커스텀 버전 입니다.

## 시작하기
Build 및 실행 방법은 Bootstrap 과 동일합니다.

##### 설치 되어있어야 하는 프로그램들
- npm
- grunt
- phantomjs (mac os 에선 정상동작안함)

##### 개발환경 설정 (OS X 기준)
1. Terminal 실행 후 아래 명령어를 실행합니다.
2. `xcode-select --install` Native 확장기능을 컴파일할 수 있게 해주는 명령줄 도구를 설치
3. `ruby -v` 루비 버전확인(맥OS High Sierra 이후 버전에선 기본적으로 루비가 설치되어있음)
4. `gem install bundler jekyll` Jekyll 설치 [Jekyll 바로가기](https://jekyllrb-ko.github.io)
5.  npm 사용을 위한 node.js 설치(8.x 버젼) [Node 바로가기](https://nodejs.org/ko/download/)
6. `npm install` js 패키지 설치
7. `bundle install` 루비 젬 설치
8. `bundle exec jekyll serve` 로컬서버 실행 

##### 프로젝트 빌드방법
1. turminal 에서 프로젝트 폴더로 이동 후 `npm install` 실행
2. `grunt` 실행 (Bootstrap build)
3. `grunt docs` 실행 (문서 build)
4. `npm install -g grunt-cli.` grunt가 제대로 설치안되었을 경우 실행

##### 로컬서버 실행
1. terminal 에서 프로젝트 폴더로 이동 후 `bundle exec jekyll serve` 실행. (기본주소 `localhost:9001`)

#### 프로젝트 구조
```
project/
├── less/
├── js/
├── fonts/
├── dist/
│   ├── css/
│   ├── js/
│   └── fonts/
└── docs/
    └── examples/
```

#### 작업방법
1. 프로젝트 설정 후 로컬서버를 실행한다.
2. docs 디렉토리 내용을 수정한다. (실제 작업 소스)
3. docs 내용이 변경되면 _gh_pages 디렉토리에 내용이 수정된다. (실제 화면에 출력되는 페이지 소스, _config.yml 파일에 destination 옵션이 해당 디렉토리로 설정되어있음)
// Movie data
const movies = [
    {
        title: "종이의 집",
        description: "스페인에서 강도 행각을 벌이다 파트너 겸 연인이었던 공범자를 잃은 올리베이라. 어떻게 돈은 건졌지만 전국에 자신의 얼굴이 공개되어 현상수배까지 걸린 그녀는 어머니한테 전화를 걸어 같이 도망가자고 권유하고, 긍정적인 대답이 돌아오자 변장을 하고 어머니의 집을 찾으려 한다.",
        image: "images/small-movie8.jpg"
    },
    {
        title: "루이스 미겔: 더 시리즈",
        description: "멕시코의 상징적인 가수 루이스 미겔의 일생을 다룬 전기 드라마로, 그의 명성에 오르는 과정, 개인적인 고난, 그리고 그의 어머니의 실종에 대한 미스터리를 탐구합니다.",
        image: "images/large-movie1.jpg"
    },
    {
        title: "루시퍼",
        description: "지긋지긋한 지옥 생활을 청산하고 은퇴를 선언한 악마. LA로 와 나이트클럽을 열고 인생을 즐기던 어느 날 강력계 형사를 만나면서 새로운 삶을 살기 시작한다.",
        image: "images/large-movie2.jpg"
    },
    {
        title: "초자연 현상의 목격자들: 라틴아메리카",
        description: "과학적으로 설명하기 어려운, 기이한 초자연적 현상을 겪은 사람들. 예기치 못한 공포에 압도당한 사람들의 충격 실화가 공개된다. 이들이 본 것은 과연 무엇이었을까. 실제 인물이 겪은 실제 사건을 재구성한 리얼리티 시리즈.",
        image: "images/large-movie3.jpg"
    },
    {
        title: "누가 사라를 죽였을까",
        description: "반드시 복수해야 한다. 그리고 누명을 벗어야 한다. 여동생을 살해한 혐의로 억울한 감옥살이를 한 사나이. 그가 진짜 범인을 세상에 드러내려 치밀한 계획을 차근차근 실행에 옮긴다. 그 뒤에 숨은 거대한 비밀을 알지 못한 채.",
        image: "images/large-movie4.jpg"
    },
    {
        title: "코브라 카이",
        description: "지독한 숙적, 치열하게 싸우는 도장, 그리고 새로운 세대. 과거 라이벌이었던 다니엘과 조니가 웨스트 밸리를 배경으로 다시 한번 충돌한다. 영화 《베스트 키드》 시리즈의 반가운 속편.",
        image: "images/large-movie5.jpg"
    },
    {
        title: "엘리트들",
        description: "애초부터 어울리지 않는 옷이었을까. 스페인 최고의 명문 사립 학교에 전학 오게 된 세 명의 평범한 아이들. 행운을 붙잡은 줄 알았던 이들은 살인 사건에 깊이 연루된다.",
        image: "images/large-movie6.jpg"
    },
    {
        title: "트랜스포머: 워 포 사이버트론: 포위 작전",
        description: "사이버트론을 폐허로 만든 오토봇과 디셉티콘의 전쟁. 마침내 두 리더가 움직인다. 이겨라, 종족의 운명이 걸려있다. 《트랜스포머》의 세계, 그 기원을 보여주는 시리즈.",
        image: "images/large-movie7.jpg"
    },
    {
        title: "엄브렐러 아카데미",
        description: "초능력을 지닌 남매들이 아버지의 죽음을 계기로 다시 모인다. 소원했던 이들 앞에 가족의 충격적인 비밀이 드러나는데. 게다가 인류에 대한 위협이 서서히 다가오고 있음이 감지된다.",
        image: "images/large-movie8.jpg"
    },
    {
        title: "모탈 컴뱃",
        description: "R등급 액션의 신화, 피니시! 어스렐름과 아웃월드의 최강 챔피언들이 지구의 운명을 걸고 벌이는 서바이벌 대혈전 모탈 컴뱃. MMA 격투 선수 콜 영은 대전을 앞두고 선택 받은 전사들을 사전에 제거하려는 서브제로의 공격을 받는다. 지구와 가족을 보호하고 자기 혈통의 비밀을 알아내기 위해 모탈 컴뱃 토너먼트에 참가해 죽음의 전투를 치러야 한다!",
        image: "images/small-movie1.jpg"
    },
    {
        title: "위다웃 리모스",
        description: "네이비 실 대원 존 클락은 아내의 죽음이 거대한 음모와 얽혀있다는 것을 알고 직접 국제적인 테러 조직을 상대로 복수에 나선다.",
        image: "images/small-movie2.jpg"
    },
    {
        title: "고질라 VS. 콩",
        description: "인간에게 등을 돌린 고질라가 난동을 부려 도시를 파괴시키기 시작하자, 사람들은 인류의 안전을 지킬 수 있는 지구 안의 또 다른 지구인 할로우 어스의 에너지원을 찾아 나선다. 몬스터들의 습격 이후, 스컬 아일랜드를 떠나 인간과 함께 지내던 콩은 인간들과 함께 할로우 어스로 위험한 여정을 떠난다.",
        image: "images/small-movie3.jpg"
    },
    {
        title: "미첼 가족과 기계 전쟁",
        description: "살짝 이상하고 특출난 가족인 미첼 가족은 어느 날 로봇들이 지구의 모든 인간을 잡아들여 세계를 정복하려는 로봇 대재앙을 맞닥뜨린다. 어쩌다 보니 유일하게 살아남은 미첼 가족은 인류를 구해야 할 운명에 놓이고, 생애 처음으로 가족끼리 힘을 합친다.",
        image: "images/small-movie4.jpg"
    },
    {
        title: "팔콘과 윈터 솔져",
        description: "샘 윌슨(팔콘 역)과 버키 반즈(윈터 솔져 역)가 팀을 이루어 세계를 무대로 모험을 펼친다.",
        image: "images/small-movie5.jpg"
    },
    {
        title: "노매드랜드",
        description: "지속되는 경제침체로 인해 황폐해진 도시에 홀로 남겨진 펀은 새로운 경험을 찾아 도시를 떠나 낯선 이 여정에 오른다. 여행을 하며 각자 자신만의 사연을 가지고 노매드 생활을 하는 사람들을 만난 펀은 그들의 자유로운 삶으로부터 새로운 교훈을 얻게 된다.",
        image: "images/small-movie6.jpg"
    },
    {
        title: "노바디",
        description: "정말이지 착하게 살고 싶었다. 참으려고 했다. 이제 나 건드리면 X된다! 비범한 과거를 숨긴 채 남들과 다를 바 없는 평범한 일상을 사는 한 가정의 가장 ‘허치’ 매일 출근을 하고, 분리수거를 하고 일과 가정 모두 나름 최선을 다하지만 아들한테는 무시당하고 아내와의 관계도 소원하다. 그러던 어느 날, 집안에 강도가 들고 허치는 한 번의 반항도 하지 못하고 당한다. 더 큰 위험으로부터 가족을 지키기 위한 선택이었는데 모두 무능력하다고 ‘허치’를 비난하고, 결국 그동안 참고 억눌렀던 분노가 폭발하고 만다.",
        image: "images/small-movie7.jpg"
    },
    
];

// 현재 배너 상태를 위한 인덱스
let currentIndex = 0;

// 배너와 모달의 공통 업데이트 함수
function updateBannerContent(index) {
    const { title, description, image } = movies[index];
    document.querySelector('.banner_title').textContent = title;
    document.querySelector('.banner_description').textContent = description;
    document.querySelector('.banner').style.backgroundImage = `url(${image})`;
    
    // 버튼 클릭 시 동작할 이벤트 핸들러 설정
    setButtonActions(image, title, description);
}

// 버튼 클릭 시 동작 설정 함수
function setButtonActions(image, title, description) {
    // 재생 버튼 클릭 시
    document.querySelector('.play-btn').onclick = () => {
        window.location.href = image; // 이미지로 이동
    };

    // 상세 정보 버튼 클릭 시 모달 창 열기
    document.querySelector('.info-btn').onclick = () => {
        openModal(image, title, description);
    };
}

// 모달 창 열기 함수
function openModal(image, title, description) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-banner-img').src = image;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;

    modal.style.display = "flex"; // 모달 표시
}

// 모달 닫기 기능
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// 클릭 이벤트 리스너 초기화
function initPosterListeners() {
    const posterImages = document.querySelectorAll('.row_poster');
    posterImages.forEach((poster, index) => {
        poster.addEventListener('click', () => {
            changeBanner(index + 1); // 포스터 클릭 시 배너 변경
        });
    });
}

// 배너 변경 함수 (애니메이션 추가)
function changeBanner(index) {
    const bannerElement = document.querySelector('.banner');
    
    // 먼저 페이드 아웃 애니메이션 적용
    bannerElement.classList.add('fade-out');
    bannerElement.classList.remove('fade-in'); // 이전 fade-in 클래스 제거

    // 1초 후 페이드 아웃이 완료된 후 배너 내용 변경
    setTimeout(() => {
        currentIndex = index % movies.length; // 인덱스 순환
        updateBannerContent(currentIndex); // 영화 정보 업데이트

        // 페이드 인 애니메이션 적용
        bannerElement.classList.remove('fade-out');
        bannerElement.classList.add('fade-in');

        // 1초 후 애니메이션 클래스 제거 (다음 애니메이션을 위해)
        setTimeout(() => {
            bannerElement.classList.remove('fade-in');
        }, 1000);
    }, 1000); // 페이드 아웃에 맞춰 1초 지연
}

// 5초마다 자동 배너 전환
function autoSlideBanner() {
    currentIndex = (currentIndex + 1) % movies.length;
    changeBanner(currentIndex);
}

// 초기화 함수
function init() {
    // 초기 배너 설정
    updateBannerContent(0);
    
    // 포스터 클릭 리스너 설정
    initPosterListeners();

    // 모달 닫기 리스너 설정
    document.querySelector('.close').onclick = closeModal;

    // 자동 슬라이드 설정
    setInterval(autoSlideBanner, 5000); // 5초마다 자동 배너 전환
}

// DOM이 로드된 후 초기화 실행
document.addEventListener('DOMContentLoaded', init);

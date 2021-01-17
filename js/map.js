
// var mapContainer = document.getElementById('Jmap'), // 지도를 표시할 div 
//     mapOption = {
//         center: new kakao.maps.LatLng(33.454484, 126.562123), // 지도의 중심좌표
//         level: 4 // 지도의 확대 레벨
//     };

// // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
// var map = new kakao.maps.Map(mapContainer, mapOption);

// // 마커가 표시될 위치입니다 
// var markerPosition = new kakao.maps.LatLng(33.454702, 126.565005);

// // 마커를 생성합니다
// var marker = new kakao.maps.Marker({
//     position: markerPosition
// });

// // 마커가 지도 위에 표시되도록 설정합니다
// marker.setMap(map);


// var iwContent = '<div class="overlaybox">' +
//     '    <div class="boxtitle">금주 영화순위</div>' +
//     '    <div class="first">' +
//     '        <div class="triangle text">1</div>' +
//     '        <div class="movietitle text">드래곤 길들이기2</div>' +
//     '    </div>' +
//     '    <ul>' +
//     '        <li class="up">' +
//     '            <span class="number">2</span>' +
//     '            <span class="title">명량</span>' +
//     '            <span class="arrow up"></span>' +
//     '            <span class="count">2</span>' +
//     '        </li>' +
//     '        <li>' +
//     '            <span class="number">3</span>' +
//     '            <span class="title">해적(바다로 간 산적)</span>' +
//     '            <span class="arrow up"></span>' +
//     '            <span class="count">6</span>' +
//     '        </li>' +
//     '        <li>' +
//     '            <span class="number">4</span>' +
//     '            <span class="title">해무</span>' +
//     '            <span class="arrow up"></span>' +
//     '            <span class="count">3</span>' +
//     '        </li>' +
//     '        <li>' +
//     '            <span class="number">5</span>' +
//     '            <span class="title">안녕, 헤이즐</span>' +
//     '            <span class="arrow down"></span>' +
//     '            <span class="count">1</span>' +
//     '        </li>' +
//     '    </ul>' +
//     '</div>';
// iwPosition = new kakao.maps.LatLng(1, 1); //인포윈도우 표시 위치입니다

// // 인포윈도우를 생성합니다
// var infowindow = new kakao.maps.InfoWindow({
//     content: iwContent,
//     borderWidth: 0
// });

// // 마커에 마우스오버 이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'mouseover', function () {
//     // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
//     infowindow.open(map, marker);
// });

// // 마커에 마우스아웃 이벤트를 등록합니다
// kakao.maps.event.addListener(marker, 'mouseout', function () {
//     // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
//     infowindow.close();
// });

var infowindow = new kakao.maps.CustomOverlay({zIndex:1,clickable:true});
var mapOption = {
    center: new kakao.maps.LatLng(33.4547007634407, 126.565112951543), // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(document.getElementById('Jmap'), mapOption);

var facilities = [// 건물정보
    ['세븐일레븐제주대글로벌점', '126.559646996263', '33.4567876094483'], ['세이슌제주대학교점', '126.559634344304', '33.4567370749012'], ['제주대학교해양과학대학1호관', '126.563771894297', '33.4570221817413'], 
    ['제주대학교통역번역대학원', '126.56388032304694', '33.456419392531316'], ['제주대학교해양과학대학3호관', '126.564368883346', '33.4572334520611'], ['제주대학교박물관', '126.561852808619', '33.4587681253365'], ['제주대학교감귤화훼과학기술센터', '126.562562666092', '33.4587814511531'], ['제주농업마이스터대학', '126.562562521205', '33.4588103018429'], ['지이오라이프', '126.562575609803', '33.4587742840213'], 
    ['제주대학교농업창업보육센터', '126.563416530702', '33.4583913632521'], ['제주대학교주변전실', '126.563828552672', '33.4577364485121'], ['제주대학교자연과학대학1호관', '126.564653594959', '33.4579449131488'], 
    ['세븐일레븐제주대자연대점', '126.56426261263', '33.4578353476146'], ['어린이급식관리지원센터', '126.565118008213', '33.4579970326269'], ['제주대학교아열대원예산업연구소', '126.564667380353', '33.4586301777089'], ['제주대학교생명과학기술혁신센터', '126.564011523098', '33.4564243619656'], 
    ['제주대학교생명과학기술혁신센터GMP시설', '126.565386346128', '33.4585425401144'], ['바이오텍제주', '126.563847834005', '33.4564634566667'], ['제주친환경연합사업단', '126.562882200189', '33.4576961499986'], ['제주대학교친환경농업연구소', '126.562959151112', '33.4577946956993'], ['제주대학교자연과학대학2호관', '126.560434495781', '33.4584637736966'], ['제주대학교수학과', '126.564391722225', '33.457828588505'], 
    ['제주대학교줄기세포연구센터', '126.561794107224', '33.4558972228149'], ['제주대학교약학대학', '126.56017330043971', '33.45736199371404'], ['제주대학교간호대학', '126.564422106623', '33.4560543456943'], 
    ['제주대학교미래융합대학', '126.563596796283', '33.4567619046422'], ['제주대학교공과대학4호관', '126.565112951543', '33.4547007634407'], ['제주대학교교양강의동', '126.564363911422', '33.4556466177868'], ['제주대학교공과대학1호관', '126.565449564742', '33.4570821692096'], ['제주대학교해양과학대학1호관', '126.563771894297', '33.4570221817413'], ['제주양채류웰빙식품RIS사업단', '126.565471274696', '33.4570425748809'], 
    ['제주대학교공과대학3호관', '126.565306683891', '33.4564000583953'], ['제주대학교공과대학부설공장', '126.566273164405', '33.4558516635801'], ['제주대학교본관', '126.561944780277', '33.4558797232448'], 
    ['제주대학교인권센터', '126.561896419614', '33.4558714379673'], ['하나은행365한국폴리텍대학교제주캠퍼스본관(후문)', '126.561331333294', '33.4474043080684'], ['제주대학교해양과학대학4호관', '126.566347082474', '33.4548313101356'], ['제주대학교해양의생명과학부해양생명과학전공', '126.566338280396', '33.4548709497838'], 
    ['제주대학교공과대학2호관', '126.566023932307', '33.4575169491876'], ['제주대학교해양과학대학1호관', '126.563771894297', '33.4570221817413'], ['제주대학교야외음악당', '126.562777132541', '33.4571989977913'], ['제주대학교사회과학대학', '126.561691937353', '33.4548257602916'], 
    ['제주대학교사회과학대학중강당', '126.562186991936', '33.4547698069372'], ['제주대학교사범대학1호관', '126.56322414852846', '33.454927638624554'], ['제주대학교정보화본부', '126.563470432242', '33.4545038520643'], ['제주대학교사범대학2호관', '126.563582456866', '33.455330112611'], ['제주대학교체육관', '126.560511387375', '33.4560153002574'], ['제대학생회관스낵코너', '126.561817741329', '33.4554753573351'], ['제주대학교학생회관', '126.560563861509', '33.4549948745846'], ['한라카페테리아', '126.560607448458', '33.454883230597'], 
    ['봅써예기프트', '126.560605301854', '33.4548823213892'], ['레드애플스튜디오제주대점', '126.560559486436', '33.4550092846861'], ['제주대학교소비자생활협동조합', '126.560581016172', '33.4550057545891'], ['제주대학교운동장본부석', '126.558741976018', '33.4553851082058'], ['제주대학교교직원복지관E동', '126.55745033468189', '33.45556623426963'], ['제주대학교경상대학1호관', '126.561657063484', '33.4540610796798'], 
    ['제주대학교경상대학2호관', '126.562879847202', '33.4538778636639'], ['제주대학교법학전문대학원', '126.560347403128', '33.4535551526949'], ['제주대학교수의과대학부설동물병원', '126.558852466949', '33.4514076393825'], 
    ['제주동물메디컬센터', '126.557956782092', '33.4592014889887'], ['제주대학교수의과대학부설말전문동물병원', '126.562699378254', '33.4469745681299'], ['제주대학교평생교육원', '126.56018544161', '33.4524005293192'], ['제주대학교교수회관', '126.559942260862', '33.452846860483'], ['제주대학교중앙도서관', '126.560820909973', '33.4526516236174'], ['제주대학교중앙디지털도서관', '126.56084890443', '33.4522189543535'], 
    ['CU제주대학교중앙도서관점', '126.560885242929', '33.4526915219062'], ['제주대학교예술디자인대학미술관', '126.561774509439', '33.4529507227015'], ['제주대학교의학전문대학원1호관', '126.563908928575', '33.4528536623933'], ['제주대학교의학전문대학원', '126.5639520498925', '33.45283397882775'], 
    ['제주감염병관리지원단', '126.563908784166', '33.4528825131159'], ['제주대학교골프아카데미', '126.563064217892', '33.4514297653582'], ['크린바이오제주지점', '126.566582517873', '33.4524771516408'], ['제주대학교제주테크노파크바이오융합센터2호관', '126.566582966376', '33.4523869930943'], ['제주대학교경상대학2호관', '126.562879847202', '33.4538778636639'], ['제주대학교사범대학2호관', '126.563582456866', '33.455330112611'], 
    ['제주대학교자연과학대학2호관', '126.560434495781', '33.4584637736966'], ['제주대학교공과대학2호관', '126.566023932307', '33.4575169491876'], ['제주대학교학생생활관2호관', '126.556921735271', '33.4503729300997'], ['오존에이드', '126.56429572414882', '33.45723680138561'], ['제주대학교해양과학대학1호관', '126.563771894297', '33.4570221817413'], ['성환예가비본사', '126.566575688721', '33.4523364779903'], 
    ['제주파나텍', '126.56658090947045', '33.45236805228018'], ['제주자연초', '126.56667416804785', '33.45243149031561'], ['씨엠비오텍', '126.566566224103', '33.4522931680499'], ['본황칠', '126.56658407331699', '33.45238068575562'], ['농업회사법인비케이수', '126.5665951202918', '33.45232212029505'], 
    ['제주대학교실험동물센터', '126.561817886444', '33.4554465066327'], ['제주대학교인문대학1호관', '126.558347265378', '33.4534687034476'], ['제주대학교산학협력선도대학육성사업단', '126.558451048986', '33.4533644874118'], 
    ['제주대학교소리어울림음악멘토링센터', '126.558330038169', '33.4534722484853'], ['제주대학교중앙디지털도서관', '126.56084890443', '33.4522189543535'], ['제주대학교인재양성관', '126.5563402145996', '33.452628459136626'], ['제주대학교학생생활관3호관', '126.556376832927', '33.4517738727037'], ['제주대학교인문대학2호관', '126.558462486334', '33.4528055357312'], ['제주대학교학생생활관2호관', '126.556921735271', '33.4503729300997'], ['제주대학교학생생활관1호관', '126.556751018904', '33.4509493445487'], 
    ['GS25제대생활관점', '126.556781702336', '33.4508376557193'], ['제주대학교수의과대학', '126.558629715126', '33.4520668185022'], ['제주대학교수의과대학부설동물병원', '126.558852466949', '33.4514076393825'], 
    ['제주대학교수의과대학부설말전문동물병원', '126.562699378254', '33.4469745681299'], ['제주대학교학생생활관4호관B동', '126.557965969436', '33.4506074669747'], ['제주대학교학생생활관4호관A동', '126.558151585522', '33.4513330157121'], ['제주대학교학생생활관5호관', '126.556572143756', '33.4522830741446'], ['제주대학교학생생활관6호관', '126.556690576081', '33.4535277064656'], ['CU제주대생활관점', '126.55658455466525', '33.45343716730209']
];
var colleges = [ // 제주대학교 시설 목록
    [[101, '정문 및 수위실'], [102, '박물관'], [103, '감귤화훼과학기술센터'], [104, '농업창업보육센터'], [105, '주변전실'], [106, '자연과학대학1호관'], [107, '아열대원예산업연구소'], [108, '생명과학기술센터(증축)'], [109, '생명 과학혁신기술센터'], [110, '원자력과학기술연구소'], [111, '친환경농업연구소'], [112, '생명자원과학대학 본관동']],
    [[201, '자연과학대학2호관'],[202, '공동실험실습관'], [203, '약학대학'], [204, '글로벌하우스']], 
    [[301, '해양과학대학1호관'],[302, '미래융합대학'], [303, '통역번역대학원'], [304, '해양과학대학3호관'], [305, '간호대학'], [306, '교양강의동'], [307, '공과대학4호관'], [308, '공과대학1호관'], [309, '공과대학3호관'], [310, '중소기업종합지원센터'], [311, '공과대학부설공장'], [312, '공과대학2호관'], [313, '해양과학대학4호관']], 
    [[401, '대학본관'],[402, '사회과학대학'], [403, '야외음악당'], [404, '사범대학1호관'], [405, '사범대학2호관'], [406, '정보화본부']], 
    [[501, '체육관'],[502, '학생회관'], [503, '운동장본부석'], [505, '교직원복지관A동'], [506, '교직원복지관B동'], [507, '교직원복지관C동'], [508, '교직원복지관D동'], [509, '교직원복지관E동'], [510, '교직원복지관F동']], 
    [[601, '국제언어·문화교육센터 , 아라뮤즈홀'],[602, '언어교육원(구 외국어교육원)'], [603, '법학전문대학원'], [604, '경상대학1호관'], [605, '경상대학2호관']], 
    [[701, '동물병원'],[702, '아라컨벤션홀(구 국제교류회관)'], [703, '평생교육원'], [704, '교수회관'], [705, '중앙도서관'], [706, '의료융합기술센터'], [707, '예술디자인대학 미술관'], [708, '골프아카데미'], [709, '의학전문대학원'], [710, '바이오융합센터2호관'], [713, '통합교양강의동/학생군사교육단'], [714, '예술디자인대학 음악관'], [783, '실험동물센터'], [785, '실험동물관리사'], [788, '중앙디지털도서관']], 
    [[801,	'인문대학1호관'],[802, '인문대학2호관'], [804, '인재양성관'], [805, '학생생활관3호관'], [806, '학생생활관1호관'], [807, '학생생활관2호관'], [808, '학생생활관4호관A동'],[808, '학생생활관4호관B동'], [809, '수의과대학'], [810, '학생생활관5호관'], [811, '학생생활관6호관']]
];
var colors=['#e96423','#aed033','#59b864','#6bc8ea','#3e6ac1','#7f4fb5','#dd6bb0','#f35f6f']
function findArea(placeName) {
// 건물이 어떤 area에 속해있는지 (제주대학교 캠퍼스맵 기준) http://www.jejunu.ac.kr/popups/58fc5e8bd9dd2
    for (let i = 0; i < colleges.length; i++) {
        for (let building of colleges[i]) 
            if (('제주대학교'+building[1]).indexOf(placeName)!=-1) 
                return i;
    }
    return -1;
}

function refineData(raw) {// 데이터를 객체로 저장
    let data = []
    for (let i of raw) {
        dataObj = {
            place_name:i[0],
            x:parseFloat(i[1]),
            y:parseFloat(i[2]),
        };
        let area = findArea(i[0]);
        if (area!=-1){
            dataObj.area = area;
        }
        data.push(dataObj);
    }
    return data;
}

function drawMap(mapOption){
    // 지도를 생성합니다    
    let data = refineData(facilities);
    let area = new Array(8);
    let rectangles = [];
    let markers = new Array(8);
    for (let i=0;i<area.length;i++) {
        area[i] = [];
        markers[i] = [];
    }

    for (let obj of data) {// 모든 건물들에 대해
        // displayMarker(obj,map);//마커 표시
        if (obj.area!=undefined) { //건물이 속한 area가 있으면 건물을 따로 저장
            area[obj.area].push(obj);
        }
    }
    
    for (let i = 0; i < area.length; i++) {// area에 속한 건물들 사각형으로 묶음
        let minX=127,minY=34,maxX=126,maxY=33; // 꼭짓점 초기화
        for (let building of area[i]) {
            //// 사각형 꼭짓점 구하기
            if(maxX-parseFloat(building.x) < 0) {
                maxX=parseFloat(building.x);
            }
            if(maxY-parseFloat(building.y) < 0) {
                maxY=parseFloat(building.y);
            }
            if(minX-parseFloat(building.x) > 0) {
                minX=parseFloat(building.x);
            }
            if(minY-parseFloat(building.y) > 0) {
                minY=parseFloat(building.y);
            }
            ////
            markers[i].push(displayMarker(building));// area에 속한 건물 표시
        }
        rectangles.push(displayRect(minX,minY,maxX,maxY,colors[i]));
    }

    for (let i = 0; i<area.length; i++) {
        // 작은 다각형이 가려지는 현상이 발생하여 zIndex를 설정함 임시
        rectangles[i].setZIndex(-i);
        rectangles[i].setMap(map);
        // 다각형에 클릭이벤트 등록
        kakao.maps.event.addListener(rectangles[i],'mousedown',function() {
            console.log(i);
            if (prevMarker!=undefined) {// 이전에 선택된 영역의 마커 다 지움
                for (let marker of markers[prevMarker]) {
                    marker.setMap(null);
                }
            }
            for (let marker of markers[i]) {
                marker.setMap(map);
            }
            prevMarker=i;
        });
    }
}
var prevMarker;

function displayMarker(place) {
    // 마커를 생성
    var marker = new kakao.maps.Marker({
        zIndex:1,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 커스텀 오버레이
        // document.getElementById('Jmap').style.width = '50%';// 지도 크기 변경
        map.relayout();

        let contents = '<div class="info-container">\
                            <div class="title">' + place.place_name.slice(5) + '\
                                <div class="close" onclick="overlayClose()" title="닫기">X</div>\
                            </div>';

        //// 오버레이 내용
        for (let i in place) {  
            contents +=     '<div class="content">' + i +'</div>';
        }
        ////
        contents+=      '</div>';
        infowindow.setContent(contents);
        infowindow.setPosition(marker.getPosition());
        infowindow.setMap(map);
        map.panTo(marker.getPosition());// 마커를 중심으로 부드럽게 이동
    });
    return marker;

}
function overlayClose() {
    infowindow.setMap(null);
}
function displayRect(minX,minY,maxX,maxY,color) {
    // 사각형을 구성하는 영역정보를 생성합니다
    let padding=0.0002;
    let path = [ 
        new kakao.maps.LatLng(maxY+padding,maxX+padding),
        new kakao.maps.LatLng(minY-padding,maxX+padding),
        new kakao.maps.LatLng(minY-padding,minX-padding),
        new kakao.maps.LatLng(maxY+padding,minX-padding)
    ]

    // 지도에 표시할 사각형을 생성합니다
    var rectangle = new kakao.maps.Polygon({
            path:path,
            strokeWeight: 4, // 선의 두께입니다
            strokeColor: color, // 선의 색깔입니다, 인수로 받음
            strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
            strokeStyle: 'shortdashdot', // 선의 스타일입니다
            fillColor: color, // 채우기 색깔입니다
            fillOpacity: 0.2 // 채우기 불투명도 입니다
        });
    return rectangle;
}

drawMap(mapOption);// 실행
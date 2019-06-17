import React, { useEffect } from "react";
import styled from "styled-components";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export const daumMap = ({ apiKey, name = " ", lng, lat }) => {
  if (
    !apiKey ||
    typeof apiKey !== "string" ||
    !lng ||
    typeof lng !== "number" ||
    !lat ||
    typeof lat !== "number"
  ) {
    return;
  }

  useEffect(() => {
    let script = document.createElement("script");

    script.id = "kakao-sdk";
    script.type = "text/javascript";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appKey=${apiKey}&libraries=services,clusterer,drawing&autoload=false`;

    document.head.append(script);

    script.onload = () => {
      const daum = window.daum;
      daum.maps.load(function() {
        /* 지도 생성 */
        const map = new daum.maps.Map(document.getElementById("kakao-map"), {
          center: new daum.maps.LatLng(lng, lat),
          level: 3
        });

        /* 마커 생성 */
        const marker = new daum.maps.Marker({
          position: new daum.maps.LatLng(lng, lat)
        });

        marker.setMap(map);

        /* 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤 생성 */
        const mapTypeControl = new daum.maps.MapTypeControl();
        map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);

        /* 지도 확대 축소를 제어할 수 있는 줌 컨트롤 생성 */
        const zoomControl = new daum.maps.ZoomControl();
        map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);

        /* 새탭에서 길찾기할 수 있는 클릭 이벤트 등록 */
        daum.maps.event.addListener(marker, "click", function() {
          window.open(`http://map.daum.net/link/to/${name},${lng},${lat}`);
        });
      });
    };

    let kakaoMapRoot = document.getElementById("kakao-map");

    if (!kakaoMapRoot) {
      kakaoMapRoot = document.createElement("div");
      kakaoMapRoot.id = "kakao-map";
      document.body.appendChild(kakaoMapRoot);
    }
  }, []);

  return <Map id="kakao-map" />;
};

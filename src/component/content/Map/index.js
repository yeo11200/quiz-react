/*global kakao*/
import React, { useEffect, useRef, useState } from 'react';

const MapTes = (props) => {
  const markerdata = [
    {
      title: "콜드스퀘어",
      lat: 37.62197524055062,
      lng: 127.16017523675508,
    },
    {
      title: "하남돼지집",
      lat: 37.620842424005616,
      lng: 127.1583774403176,
    },
    {
      title: "수유리우동",
      lat: 37.624915253753194,
      lng: 127.15122688059974,
    },
    {
      title: "맛닭꼬",
      lat: 37.62456273069659,
      lng: 127.15211256646381,
    },
  ];
  
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=06cbf36cb0b25ef2af618a4d87fb333f&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        let container = document.getElementById("Mymap");
        let options = {
          center: new kakao.maps.LatLng(37.506502, 127.053617),
          level: 7
        };

        const map = new window.kakao.maps.Map(container, options);
        //마커가 표시 될 위치
        markerdata.forEach((el) => {
          // 마커를 생성합니다
          new kakao.maps.Marker({
            //마커가 표시 될 지도
            map: map,
            //마커가 표시 될 위치
            position: new kakao.maps.LatLng(el.lat, el.lng),
            //마커에 hover시 나타날 title
            title: el.title,
          });
        });
      });
    };
  }, [])

  return (
    <div id="Mymap" style ={ { width : '100%' , height : '1000px' }}></div>
  )
}


export default MapTes;
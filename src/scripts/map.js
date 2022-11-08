const contentString = `
     <div class="map__content">
        <p class="map__title">Vodoo</p>
        <p class="map__text">137 Glasgow St., Unit 115</p>
        <p class="map__text">Kitchener, ON N2G 4X8</p>
        <p class="map__text">Ukraine</p>
        <a class="map__link" href="tel:1-800-480-9597">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.375 9.16497V10.79C11.3762 11.095 11.2488 11.3864 11.024 11.5926C10.7993 11.7989 10.498 11.9008 10.1942 11.8733C8.52737 11.6922 6.92629 11.1226 5.51958 10.2104C4.21082 9.37875 3.10122 8.26915 2.26958 6.96039C1.35415 5.54729 0.784463 3.93843 0.606665 2.26414C0.579296 1.96128 0.680479 1.66086 0.885496 1.43627C1.09051 1.21167 1.38049 1.08359 1.68458 1.08331H3.30958C3.85334 1.07795 4.31681 1.47654 4.39291 2.01497C4.4615 2.53501 4.5887 3.04562 4.77208 3.53706C4.9209 3.93295 4.82571 4.37924 4.52833 4.67997L3.84041 5.36789C4.61151 6.72398 5.73433 7.8468 7.09041 8.61789L7.77833 7.92997C8.07906 7.63259 8.52536 7.53741 8.92125 7.68622C9.41269 7.8696 9.9233 7.9968 10.4433 8.06539C10.988 8.14223 11.3886 8.61507 11.375 9.16497Z"
              stroke="#52514F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          1-800-480-9597
        </a>

        <br/>

        <a class="map__link" href="mailto:info@voodoo.com">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 2H10C10.55 2 11 2.45 11 3V9C11 9.55 10.55 10 10 10H2C1.45 10 1 9.55 1 9V3C1 2.45 1.45 2 2 2Z"
              stroke="#52514F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 3L6 6.5L1 3"
              stroke="#52514F"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          info@voodoo.com
        </a>
      </div>
  `;

function initMap() {
  const location = { lat: 55.85127667818608, lng: -4.230263126296956 };
  const markerLocation = { lat: 55.85124706307147, lng: -4.229718292019359 };

  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 17,
    center: location,
    mapId: '530b2c4e6bd8957b',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
    zoomControl: false,
  });

  const marker = new google.maps.Marker({
    position: markerLocation,
    map,
    title: 'Our office',
    icon: {
      url: '../../src/images/marker.svg',
    },
    animation: google.maps.Animation.DROP,
  });

  const infoWindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: 'Our office',
  });

  marker.addListener('click', () => {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });

  window.addEventListener('load', () => {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;

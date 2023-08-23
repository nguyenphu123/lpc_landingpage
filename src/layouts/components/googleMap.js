import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindow,
} from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";
import { loadContact } from "@/lib/loadData";
export default function MapWithAMarker() {
  const libraries = useMemo(() => ["drawing", "places"], []);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAP_APIKEY,
    libraries: libraries,
  });
  const [companyLinks, setCompanyLinks] = useState({});
  const [markers, setMarkers] = useState({});
  const mapCenter = useMemo(
    () => ({ lat: 10.76795319886361, lng: 106.70024358650747 }),
    [],
  );
  useEffect(() => {
    // declare the data fetching function
    async function fetchNew() {
      if (Object.keys(companyLinks).length == 0) {
        const companyCheck = await loadContact();
        setCompanyLinks(companyCheck.contact[0]);
      }
    }

    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [companyLinks]);
  const onMapLoad = async () => {
    const lat = parseFloat("10.76795319886361");
    const lng = parseFloat("106.70024358650747");
    setMarkers({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    });

    var geocoder = new google.maps.Geocoder();

    await geocoder.geocode(
      {
        location: {
          lat: lat,
          lng: lng,
        },
      },
      function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          if (results[1]) {
            console.log(results[1]);
          } else {
            window.alert("No results found");
          }
        } else {
          window.alert("Geocoder failed due to: " + status);
        }
      },
    );
  };

  return Object.keys(companyLinks).length == 0 ? (
    <></>
  ) : (
    <div className="static ">
      <GoogleMap
        options={{
          disableDefaultUI: true,
          clickableIcons: false,
          scrollwheel: true,
        }}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "95%", height: "100%" }}
        onLoad={(map) => onMapLoad()}
        // onClick={(e) => onMapClick(e)}
      >
        <MarkerF
          label={{ text: "Lien Phat Technology Corporation", color: "blue" }}
          position={{ lat: markers.lat, lng: markers.lng }}
        />
        <div className="absolute top-0 left-0 bg-white w-fit h-fit ml-2 mt-2 shadow-lg text-xs">
          Lien Phat Technology Corporation
          <br />
          <p className="line-clamp-3">{companyLinks.address}</p>
        </div>
      </GoogleMap>
    </div>
  );
}

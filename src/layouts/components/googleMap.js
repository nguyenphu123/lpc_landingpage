import { GoogleMap, Marker } from "@react-google-maps/api";
import { Loader } from "@googlemaps/js-api-loader";
import { useMemo, useState, useEffect } from "react";
import { loadContact } from "@/lib/loadData";
import Link from "next/link";

export default function MapWithAMarker() {
  let map;
  const libraries = useMemo(() => ["drawing", "places"], []);
  const [selectedElement, setSelectedElement] = useState(null);

  const [mapCenter, setMapCenter] = useState({
    lat: 10.767964178711825,
    lng: 106.70014735582092,
  });
  const loadScript = async () => {
    const loader = new Loader({
      googleMapsApiKey: process.env.GOOGLE_MAP_APIKEY,
      libraries: libraries,
      // version: 'beta',
      id: "__googleMapsScriptId",
    });

    await loader.load();
  };
  const [companyLinks, setCompanyLinks] = useState({});
  const [markers, setMarkers] = useState({});

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
    const lat = parseFloat("10.767964178711825");
    const lng = parseFloat("106.70014735582092");
    setMarkers({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    });
    await loadScript();
    map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
    });
    var service = new google.maps.places.PlacesService(map);
    var request = {
      query:
        "Lien Phat Technology Corporation (Công Ty Cổ Phần Công Nghệ Liên Phát)",
      fields: ["name", "geometry", "formatted_address"],
    };
    await service.findPlaceFromQuery(request, function (results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setSelectedElement(results[0]);

        setMapCenter(results[0].geometry.location);
      }
    });
  };

  return Object.keys(companyLinks).length == 0 ? (
    <></>
  ) : (
    <div className="static ">
      <div id="map"></div>

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
        onLoad={(map) => {
          onMapLoad(), setSelectedElement(map);
        }}
        // onClick={(e) => onMapClick(e)}
      >
        {selectedElement ? (
          <Marker
            label={{
              text: selectedElement.name,
              color: "#C70E20",
              fontWeight: "bold",
            }}
            position={{ lat: markers.lat, lng: markers.lng }}
            icon={{
              url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
              labelOrigin: new google.maps.Point(75, 32),
              size: new google.maps.Size(32, 32),
              anchor: new google.maps.Point(16, 32),
            }}
          >
            <div className="absolute top-0 left-0 bg-white w-2/5 h-fit ml-4 mt-4 shadow-lg text-xs">
              <div className="mx-2 my-2">
                <p className="line-clamp-1 font-semibold">
                  {selectedElement.name}
                </p>
                <p className="line-clamp-3">
                  {selectedElement.formatted_address}
                </p>
                <Link
                  href={companyLinks.addressLink}
                  className=" hover:underline text-cyan-600"
                  target="_blank"
                >
                  View larger map
                </Link>
              </div>
            </div>
          </Marker>
        ) : (
          <></>
        )}
      </GoogleMap>
    </div>
  );
}

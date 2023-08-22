"use client";
import config from "@/config/config.json";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import SeoMeta from "@/partials/SeoMeta";
import PageHeader from "@/partials/PageHeader";
import {
  useLoadScript,
  GoogleMap,
  LoadScript,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useMemo } from "react";
const Contact = () => {
  const curlanguage = useSelector((rootState) => language(rootState));
  const { contact_form_action } = config.params;
  const data = {
    title: "DỊCH VỤ IT",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };
  const libraries = useMemo(() => ["drawing", "places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 10.76795319886361, lng: 106.70024358650747 }),
    [],
  );

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    [],
  );
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAP_APIKEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SeoMeta
        title={data.title}
        meta_title={data.meta_title}
        description={data.description}
        image={data.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? DataEn["contact"].name
            : Data["contact"].name
        }
      />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-10 grid grid-cols-2 gap-1">
              <div>
              
                <GoogleMap
                  
                  options={mapOptions}
                  zoom={14}
                  center={mapCenter}
                  mapTypeId={google.maps.MapTypeId.ROADMAP}
                  mapContainerStyle={{ width: "95%", height: "100%" }}
                  onLoad={(map) => console.log("Map Loaded")}
                >
                  <MarkerF
                    position={mapCenter}
                    onLoad={() => console.log("Marker Loaded")}
                  />
                </GoogleMap>
                
              </div>
              <div>
                <form action={contact_form_action} method="POST">
                  <div className="mb-6">
                    <label htmlFor="name" className="form-label">
                      {curlanguage.changeLanguage.value == "en"
                        ? DataEn["name"].name
                        : Data["name"].name}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      className="form-input"
                      placeholder="Nguyễn Văn A"
                      type="text"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="mail" className="form-label">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="mail"
                      className="form-input"
                      placeholder="john.doe@email.com"
                      type="email"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      {curlanguage.changeLanguage.value == "en"
                        ? DataEn["note"].name
                        : Data["note"].name}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="form-input"
                      placeholder="Message goes here..."
                      id="message"
                      rows={8}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    {curlanguage.changeLanguage.value == "en"
                      ? DataEn["send"].name
                      : Data["send"].name}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

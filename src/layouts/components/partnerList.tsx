import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useEffect, useState } from "react";
import { loadPartner } from "@/lib/loadData";
import "../../styles/slider.scss";
import { companyPartner, partner } from "@/feature/data/partnerSlice";
import { useUrl } from "nextjs-current-url";

// posts will be populated at build time by getStaticProps()
export default function PartnerList() {
  const { pathname, href } = useUrl() ?? {};
  // const newsCheck = await loadNews();
  const partnerInfo = useSelector((rootState) => partner(rootState));
  let partnerList = partnerInfo.partnerData.value.partnerList;
  const [partners, setPartners] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (partners.length == 0) {
        const partnerCheck = await loadPartner(href);
        dispatch(companyPartner(partnerCheck));
        setPartners(partnerCheck.partner);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [partners]);
  return partners.length == 0 ? (
    <></>
  ) : (
    <div className="h-48 grid  content-center">
      <div className="slider">
        <div className="slide-track">
          {partners.map((img: { _id: string; src: string; type: string }) => {
            return (
              <div key={img._id} className="slide flex items-center mx-3">
                <Image
                  key={img.src}
                  className="flex items-center col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                  src={img.src + ""}
                  alt={img.type + ""}
                  width={158}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.

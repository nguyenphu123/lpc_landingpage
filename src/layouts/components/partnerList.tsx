"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { memo, useEffect, useState } from "react";
import { loadPartner } from "@/lib/loadData";
import "../../styles/slider2.scss";

import { useUrl } from "nextjs-current-url";

// posts will be populated at build time by getStaticProps()
function PartnerList() {
  const { pathname, href } = useUrl() ?? {};
  // const newsCheck = await loadNews();

  const [partners, setPartners] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (partners.length == 0) {
        const partnerCheck = await loadPartner(href);
        setPartners(
          partnerCheck.partners.filter((item) => item.status == "Active"),
        );
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
      <div className="slider2">
        <div className="slide-track2">
          {partners.map(
            (img: {
              status: string;
              _id: string;
              src: string;
              type: string;
            }) => (
              <div key={img._id} className="slide2 flex items-center mx-3">
                <Image
                  className="flex items-center col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                  src={img.src}
                  alt={img.type}
                  width={158}
                  height={100}
                />
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(PartnerList);

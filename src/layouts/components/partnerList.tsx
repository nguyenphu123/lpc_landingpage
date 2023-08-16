import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { useEffect } from "react";
import { loadPartner } from "@/lib/loadData";
import "../../styles/slider.scss"
import { companyPartner, partner } from "@/feature/data/partnerSlice";
// posts will be populated at build time by getStaticProps()
export default function PartnerList() {
  // const newsCheck = await loadNews();
  const partnerInfo = useSelector((rootState) => partner(rootState));
  let partnerList = partnerInfo.partnerData.value.partnerList;

  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (partnerList.length == 0) {
        if (
          JSON.parse(localStorage.getItem("partnerList") || "[]").length == 1
        ) {
          const partnerCheck = await loadPartner();
          dispatch(companyPartner(partnerCheck));
        } else {
          partnerList = JSON.parse(localStorage.getItem("partnerList") || "[]");
        }
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <div className="h-48 grid  content-center">
      <div className="slider">
        <div className="slide-track">
          {partnerList.map((img: { src: string; type: string }) => {
            return (
              <div className="slide">
                <Image
                  key={img.src}
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src={img.src + ""}
                  alt={img.type + ""}
                  width={158}
                  height={60}
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

"use client";

import { language } from "@/feature/changeLanguage/changeLanguageSlice";

import { useSelector } from "react-redux";

import Data from "@/config/data.json";

import DataEn from "@/config/dataEn.json";

import PageHeader from "@/partials/PageHeader";

import { useState } from "react";
import dynamic from "next/dynamic";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
const MapWithAMarker = dynamic(
  () => import("../../layouts/components/googleMap"),
);

const Contact = () => {
  const curlanguage = useSelector((rootState) => language(rootState));

  const data = {
    title: "DỊCH VỤ IT",

    meta_title: "",

    description: "this is meta description",

    image: "",
  };

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function onsubmit(e: any) {
    e.preventDefault();

    let data = {
      name: e.target.name.value,

      email: e.target.email.value,

      message: e.target.message.value,
    };

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",

        body: JSON.stringify(data),

        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        // Đặt successMessage khi gửi thành công

        setSuccessMessage("Gửi tin nhắn thành công!");

        // Reset form

        e.target.reset();

        // Đặt timeout để ẩn thông báo sau 5 giây

        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      }
    } catch (err: any) {
      console.error("Err", err);
    }
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
              <script
                src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCLgzxMVWNCYs0IjGBx2LGjaCTT2i9zxPo&libraries=places`}
                defer
                async
              ></script>
              <MapWithAMarker />

              <div>
                <form onSubmit={(e) => onsubmit(e)}>
                  <div className="mb-6">
                    <label htmlFor="name" className="form-label">
                      {curlanguage.changeLanguage.value == "en"
                        ? DataEn["name"].name
                        : Data["name"].name}{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      name="name"
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
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="nguyenvana@email.com"
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
                      name="message"
                      rows={8}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    {curlanguage.changeLanguage.value == "en"
                      ? DataEn["send"].name
                      : Data["send"].name}
                  </button>

                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}
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

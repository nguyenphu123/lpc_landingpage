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
    title: "Liên Hệ",

    meta_title: "",

    description: "this is meta description",

    image: "",
  };

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function onsubmit(e: any) {
    e.preventDefault();

    if (e.target.email.value == "" && e.target.phoneNumber.value == "") {
      setSuccessMessage(
        curlanguage.changeLanguage.value == "en"
          ? "Please input your email or phone number"
          : "Vui lòng để lại email hoặc số điện thoại",
      );
    } else {
      let phoneNumberRegex =
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

      if (
        e.target.phoneNumber.value.match(phoneNumberRegex) &&
        e.target.email.value == ""
      ) {
        let data = {
          name: e.target.name.value,

          email: e.target.email.value,

          message: e.target.message.value,

          phoneNumber: e.target.phoneNumber.value,
        };

        try {
          const res = await fetch("/api/message", {
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
      } else if (e.target.email.value != "") {
        let data = {
          name: e.target.name.value,

          email: e.target.email.value,

          message: e.target.message.value,

          phoneNumber: e.target.phoneNumber.value,
        };

        try {
          const res = await fetch("/api/message", {
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
      } else {
        setSuccessMessage(
          curlanguage.changeLanguage.value == "en"
            ? "Please input your email or phone number"
            : "Vui lòng để lại email hoặc số điện thoại",
        );
      }
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
            <div className="mx-auto sm:col-10 md:col-10 lg:col-10 grid grid-cols-1 lg:grid-cols-2 gap-1">
              {/* <MapWithAMarker /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7839.140298694166!2d106.70068435239256!3d10.767573902897034!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f40068b5a77%3A0xf80e4fdadaba9c43!2zTGllbiBQaGF0IFRlY2hub2xvZ3kgQ29ycG9yYXRpb24gKEPDtG5nIFR5IEPhu5UgUGjhuqduIEPDtG5nIE5naOG7hyBMacOqbiBQaMOhdCk!5e0!3m2!1svi!2s!4v1694760510427!5m2!1svi!2s"
               
                style={{ border: 0, width:"90%", height:"90%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="order-1 lg:order-2">
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
                      placeholder="Nguyen Van A"
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
                    <label htmlFor="phoneNumber" className="form-label">
                      Phone number <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      className="form-input"
                      placeholder="Enter your phone number"
                      type="text"
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

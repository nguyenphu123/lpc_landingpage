"use client"
import config from "@/config/config.json";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import SeoMeta from "@/partials/SeoMeta";
import PageHeader from "@/partials/PageHeader";
const Contact = () => {
  const curlanguage = useSelector(language);
  
  const { contact_form_action } = config.params;
  const data = {
    title:"DỊCH VỤ IT",
    meta_title:"",
    description:"this is meta description",
    image:"",
} 
  return (
    <>
       <SeoMeta
        title={data.title}
        meta_title={data.meta_title}
        description={data.description}
        image={data.image}
      />
      <PageHeader title={curlanguage.changeLanguage.value == "en" ? DataEn['contact'].name : Data['contact'].name} />
      <section className="section-sm">
        <div className="container">
          <div className="row">
            <div className="mx-auto md:col-10 lg:col-6">
              <form action={contact_form_action} method="POST">
                <div className="mb-6">
                  <label htmlFor="name" className="form-label">
                  {curlanguage.changeLanguage.value == "en" ? DataEn['name'].name : Data['name'].name} <span className="text-red-500">*</span>
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
                  {curlanguage.changeLanguage.value == "en" ? DataEn['note'].name : Data['note'].name} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="form-input"
                    placeholder="Message goes here..."
                    id="message"
                    rows={8}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                {curlanguage.changeLanguage.value == "en" ? DataEn['send'].name : Data['send'].name}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

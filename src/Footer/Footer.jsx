import React from "react";
import footer_logo from "../assets/images/logo_footer.png";
import email from "../assets/images/email.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import likedin from "../assets/images/linkedin.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#323232] text-white py-[20px]  ">
      <div className="max-w-[890px] mx-auto h-[150px] flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="flex">
          <div className=" border-r-[2px] text-right pr-[15px]">
            <img className="w-[170px]" src={footer_logo} alt="" />
            <p className="text-[16px] ">
              {t("logo")}

              <span className="text-[13px] text-[#808290]">
                {t("footer.company")}
              </span>
            </p>
            <p className="text-[13px] text-[#808290]">
              {t("footer.copy_right")}
            </p>
          </div>
          <div className="pl-[15px]">
            <h2 className="text-[27px] font-bold">{t("footer.contactUs")}</h2>
            <p className="text-[13px]">{t("footer.terms")}</p>
            <p className="text-[13px]">{t("footer.privacy")}</p>
          </div>
        </div>
        <div className="flex gap-[20px] mt-[20px] lg:mt-[0px]">
          <img className="w-[25px] h-[25px]" src={email} alt="" />
          <img className="w-[25px] h-[25px]" src={facebook} alt="" />
          <img className="w-[25px] h-[25px]" src={twitter} alt="" />
          <img className="w-[25px] h-[25px]" src={likedin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

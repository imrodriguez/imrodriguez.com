import { t } from "i18next";
import { getLanguageUrl } from "../helpers/getLanguageUrl";

export default function() {
  return [
    {
      "title": t("nav.home"),
      "url": getLanguageUrl("/")
    },
    {
      "title": t("nav.services"),
      "url": getLanguageUrl("/"),
      "childrens": [
        {
          "title": t("nav.website"),
          "url": getLanguageUrl("/service/website"),
          "icon": "website"
        },
        {
          "title": t("nav.webapp"),
          "url": getLanguageUrl("/service/webapp"),
          "icon": "webapp"
        },
        {
          "title": t("nav.ecommerce"),
          "url": getLanguageUrl("/service/ecommerce"),
          "icon": "ecommerce"
        }
      ]
    },
    {
      "title": t("nav.about"),
      "url": getLanguageUrl("/about-me")
    }
  ]
} 

import React, { useContext } from "react"
import CookieConsent from "react-cookie-consent"
import Typography from "@material-ui/core/Typography"
import { LanguageContext } from "../components/layout"

export default function CookiesBar() {
  const { actLanguage } = useContext(LanguageContext)

  return (
    <CookieConsent
      cookieName="gatsby-gdpr-google-analytics"
      location="bottom"
      style={{ background: "rgba(0,0,0, .8)" }}
      buttonText={
        actLanguage === "DEU"
          ? "Akzeptiere alle Cookies"
          : actLanguage === "RUS"
          ? "Принять все cookies"
          : actLanguage === "ENG"
          ? "Accept all cookies"
          : "Accept all cookies"
      }
      buttonStyle={{
        backgroundColor: "white",
        color: "black",
        fontSize: "15px",
      }}
      expires={150}
      enableDeclineButton
      declineButtonText={
        actLanguage === "DEU"
          ? "Nur essenzielle"
          : actLanguage === "RUS"
          ? "Только необходимые"
          : actLanguage === "ENG"
          ? "Only essentials"
          : "Only essentials"
      }
      declineButtonStyle={{
        backgroundColor: "black",
        color: "white",
        fontSize: "15px",
      }}
    >
      <Typography variant="body1" id="cookiesTitle">
        {actLanguage === "DEU"
          ? "DATENSCHUTZEINSTELLUNGEN"
          : actLanguage === "RUS"
          ? "  НАСТРОЙКИ КОНФИДЕНЦИАЛЬНОСТИ"
          : actLanguage === "ENG"
          ? "PRIVACY SETTINGS"
          : "PRIVACY SETTINGS"}
      </Typography>
      <Typography variant="caption">
        {actLanguage === "DEU"
          ? `  Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
      essenziell, während andere uns helfen, diese Website und Ihre Erfahrung
      zu verbessern.`
          : actLanguage === "RUS"
          ? `На нашем веб-сайте мы используем файлы cookie. Некоторые из них
      необходимы, а другие помогают нам улучшить этот веб-сайт и улучшить ваш
      опыт.
      `
          : actLanguage === "ENG"
          ? `We use cookies on our website. Some of them are essential, while others
      help us to improve this website and your experience.`
          : `We use cookies on our website. Some of them are essential, while others
          help us to improve this website and your experience.`}
      </Typography>
    </CookieConsent>
  )
}

import React from "react"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
const window = require("global/window")

const selectMenuWidth = window.innerWidth <= 599 ? 288 : 348

const useStyles = makeStyles(theme => ({
  selectRoot: {},
  select: {},
  selectMenu: {
    width: selectMenuWidth,
    padding: "2.109% 0 2.109% 3%",
    margin: 0,
    marginBottom: "-0.25%",
    fontSize: 16,
  },
  selectX: {
    "& li": {
      fontSize: 16,
    },
  },
}))

export function AllCountriesRus(props) {
  const classes = useStyles()

  return (
    <Select
      classes={{
        root: classes.selectRoot,
        select: classes.select,
        selectMenu: classes.selectMenu,
      }}
      MenuProps={{ classes: { paper: classes.selectX } }}
      size="small"
      id="country"
      name="country"
      // control={control}
      defaultValue={props.country}
      value={props.country}
      onChange={props.changeHandler}
      // inputRef={register({
      //   required: "ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОЛНЕНИЯ",
      // })}
    >
      <MenuItem value={"AU"} key={"AU"}>
        Австралия
      </MenuItem>
      <MenuItem value={"AT"} key={"AT"}>
        Австрия
      </MenuItem>
      <MenuItem value={"AZ"} key={"AZ"}>
        Азербайджан
      </MenuItem>
      <MenuItem value={"AX"} key={"AX"}>
        Аландские о-ва
      </MenuItem>
      <MenuItem value={"AL"} key={"AL"}>
        Албания
      </MenuItem>
      <MenuItem value={"DZ"} key={"DZ"}>
        Алжир
      </MenuItem>
      <MenuItem value={"AI"} key={"AI"}>
        Ангилья
      </MenuItem>
      <MenuItem value={"AO"} key={"AO"}>
        Ангола
      </MenuItem>
      <MenuItem value={"AD"} key={"AD"}>
        Андорра
      </MenuItem>
      <MenuItem value={"AQ"} key={"AQ"}>
        Антарктида
      </MenuItem>
      <MenuItem value={"AG"} key={"AG"}>
        Антигуа и Барбуда
      </MenuItem>
      <MenuItem value={"AR"} key={"AR"}>
        Аргентина
      </MenuItem>
      <MenuItem value={"AM"} key={"AM"}>
        Армения
      </MenuItem>
      <MenuItem value={"AW"} key={"AW"}>
        Аруба
      </MenuItem>
      <MenuItem value={"AF"} key={"AF"}>
        Афганистан
      </MenuItem>
      <MenuItem value={"BS"} key={"BS"}>
        Багамы
      </MenuItem>
      <MenuItem value={"BD"} key={"BD"}>
        Бангладеш
      </MenuItem>
      <MenuItem value={"BB"} key={"BB"}>
        Барбадос
      </MenuItem>
      <MenuItem value={"BH"} key={"BH"}>
        Бахрейн
      </MenuItem>
      <MenuItem value={"BY"} key={"BY"}>
        Беларусь
      </MenuItem>
      <MenuItem value={"BZ"} key={"BZ"}>
        Белиз
      </MenuItem>
      <MenuItem value={"BE"} key={"BE"}>
        Бельгия
      </MenuItem>
      <MenuItem value={"BJ"} key={"BJ"}>
        Бенин
      </MenuItem>
      <MenuItem value={"BM"} key={"BM"}>
        Бермудские о-ва
      </MenuItem>
      <MenuItem value={"BG"} key={"BG"}>
        Болгария
      </MenuItem>
      <MenuItem value={"BO"} key={"BO"}>
        Боливия
      </MenuItem>
      <MenuItem value={"BQ"} key={"BQ"}>
        Бонэйр, Синт-Эстатиус и Саба
      </MenuItem>
      <MenuItem value={"BA"} key={"BA"}>
        Босния и Герцеговина
      </MenuItem>
      <MenuItem value={"BW"} key={"BW"}>
        Ботсвана
      </MenuItem>
      <MenuItem value={"BR"} key={"BR"}>
        Бразилия
      </MenuItem>
      <MenuItem value={"IO"} key={"IO"}>
        Британская территория в индийском океане
      </MenuItem>
      <MenuItem value={"BN"} key={"BN"}>
        Бруней-Даруссалам
      </MenuItem>
      <MenuItem value={"BF"} key={"BF"}>
        Буркина-Фасо
      </MenuItem>
      <MenuItem value={"BI"} key={"BI"}>
        Бурунди
      </MenuItem>
      <MenuItem value={"BT"} key={"BT"}>
        Бутан
      </MenuItem>
      <MenuItem value={"VU"} key={"VU"}>
        Вануату
      </MenuItem>
      <MenuItem value={"VA"} key={"VA"}>
        Ватикан
      </MenuItem>
      <MenuItem value={"GB"} key={"GB"}>
        Великобритания
      </MenuItem>
      <MenuItem value={"HU"} key={"HU"}>
        Венгрия
      </MenuItem>
      <MenuItem value={"VE"} key={"VE"}>
        Венесуэла
      </MenuItem>
      <MenuItem value={"VG"} key={"VG"}>
        Виргинские о-ва (Великобритания)
      </MenuItem>
      <MenuItem value={"TP"} key={"TP"}>
        Восточный Тимор
      </MenuItem>
      <MenuItem value={"VN"} key={"VN"}>
        Вьетнам
      </MenuItem>
      <MenuItem value={"GA"} key={"GA"}>
        Габон
      </MenuItem>
      <MenuItem value={"HT"} key={"HT"}>
        Гаити
      </MenuItem>
      <MenuItem value={"GY"} key={"GY"}>
        Гайана
      </MenuItem>
      <MenuItem value={"GM"} key={"GM"}>
        Гамбия
      </MenuItem>
      <MenuItem value={"GH"} key={"GH"}>
        Гана
      </MenuItem>
      <MenuItem value={"GP"} key={"GP"}>
        Гваделупа
      </MenuItem>
      <MenuItem value={"GT"} key={"GT"}>
        Гватемала
      </MenuItem>
      <MenuItem value={"GN"} key={"GN"}>
        Гвинея
      </MenuItem>
      <MenuItem value={"GW"} key={"GW"}>
        Гвинея-Бисау
      </MenuItem>
      <MenuItem value={"DE"} key={"DE"}>
        Германия
      </MenuItem>
      <MenuItem value={"GG"} key={"GG"}>
        Гернси
      </MenuItem>
      <MenuItem value={"GI"} key={"GI"}>
        Гибралтар
      </MenuItem>
      <MenuItem value={"HN"} key={"HN"}>
        Гондурас
      </MenuItem>
      <MenuItem value={"HK"} key={"HK"}>
        Гонконг (САР)
      </MenuItem>
      <MenuItem value={"GD"} key={"GD"}>
        Гренада
      </MenuItem>
      <MenuItem value={"GL"} key={"GL"}>
        Гренландия
      </MenuItem>
      <MenuItem value={"GR"} key={"GR"}>
        Греция
      </MenuItem>
      <MenuItem value={"GE"} key={"GE"}>
        Грузия
      </MenuItem>
      <MenuItem value={"GU"} key={"GU"}>
        Гуам
      </MenuItem>
      <MenuItem value={"DK"} key={"DK"}>
        Дания
      </MenuItem>
      <MenuItem value={"JE"} key={"JE"}>
        Джерси
      </MenuItem>
      <MenuItem value={"DJ"} key={"DJ"}>
        Джибути
      </MenuItem>
      <MenuItem value={"DM"} key={"DM"}>
        Доминика
      </MenuItem>
      <MenuItem value={"DO"} key={"DO"}>
        Доминиканская республика
      </MenuItem>
      <MenuItem value={"EG"} key={"EG"}>
        Египет
      </MenuItem>
      <MenuItem value={"ZM"} key={"ZM"}>
        Замбия
      </MenuItem>
      <MenuItem value={"EH"} key={"EH"}>
        Западная Сахара
      </MenuItem>
      <MenuItem value={"ZW"} key={"ZW"}>
        Зимбабве
      </MenuItem>
      <MenuItem value={"IL"} key={"IL"}>
        Израиль
      </MenuItem>
      <MenuItem value={"IN"} key={"IN"}>
        Индия
      </MenuItem>
      <MenuItem value={"ID"} key={"ID"}>
        Индонезия
      </MenuItem>
      <MenuItem value={"JO"} key={"JO"}>
        Иордания
      </MenuItem>
      <MenuItem value={"IQ"} key={"IQ"}>
        Ирак
      </MenuItem>
      <MenuItem value={"IE"} key={"IE"}>
        Ирландия
      </MenuItem>
      <MenuItem value={"IS"} key={"IS"}>
        Исландания
      </MenuItem>
      <MenuItem value={"ES"} key={"ES"}>
        Испания
      </MenuItem>
      <MenuItem value={"IT"} key={"IT"}>
        Италия
      </MenuItem>
      <MenuItem value={"YE"} key={"YE"}>
        Йемен
      </MenuItem>
      <MenuItem value={"CV"} key={"CV"}>
        Кабо-Верде
      </MenuItem>
      <MenuItem value={"KZ"} key={"KZ"}>
        Казахстан
      </MenuItem>
      <MenuItem value={"KH"} key={"KH"}>
        Камбоджа
      </MenuItem>
      <MenuItem value={"CM"} key={"CM"}>
        Камерун
      </MenuItem>
      <MenuItem value={"CA"} key={"CA"}>
        Канада
      </MenuItem>
      <MenuItem value={"QA"} key={"QA"}>
        Катар
      </MenuItem>
      <MenuItem value={"KE"} key={"KE"}>
        Кения
      </MenuItem>
      <MenuItem value={"CY"} key={"CY"}>
        Кипр
      </MenuItem>
      <MenuItem value={"KG"} key={"KG"}>
        Киргизия
      </MenuItem>
      <MenuItem value={"KI"} key={"KI"}>
        Кирибати
      </MenuItem>
      <MenuItem value={"CN"} key={"CN"}>
        Китай
      </MenuItem>
      <MenuItem value={"CO"} key={"CO"}>
        Колумбия
      </MenuItem>
      <MenuItem value={"KM"} key={"KM"}>
        Коморы
      </MenuItem>
      <MenuItem value={"CG"} key={"CG"}>
        Конго - Браззавиль
      </MenuItem>
      <MenuItem value={"CD"} key={"CD"}>
        Конго - Киншаса
      </MenuItem>
      <MenuItem value={"XK"} key={"XK"}>
        Косово
      </MenuItem>
      <MenuItem value={"CR"} key={"CR"}>
        Коста-Рика
      </MenuItem>
      <MenuItem value={"CI"} key={"CI"}>
        Кот-д'Ивуар
      </MenuItem>
      <MenuItem value={"KW"} key={"KW"}>
        Кувейт
      </MenuItem>
      <MenuItem value={"CW"} key={"CW"}>
        Кюрасао
      </MenuItem>
      <MenuItem value={"LA"} key={"LA"}>
        Лаос
      </MenuItem>
      <MenuItem value={"LV"} key={"LV"}>
        Латвия
      </MenuItem>
      <MenuItem value={"LS"} key={"LS"}>
        Лесото
      </MenuItem>
      <MenuItem value={"LR"} key={"LR"}>
        Либерия
      </MenuItem>
      <MenuItem value={"LB"} key={"LB"}>
        Ливан
      </MenuItem>
      <MenuItem value={"LY"} key={"LY"}>
        Ливия
      </MenuItem>
      <MenuItem value={"LT"} key={"LT"}>
        Литва
      </MenuItem>
      <MenuItem value={"LI"} key={"LI"}>
        Лихтенштейн
      </MenuItem>
      <MenuItem value={"LU"} key={"LU"}>
        Люксембург
      </MenuItem>
      <MenuItem value={"MU"} key={"MU"}>
        Маврикий
      </MenuItem>
      <MenuItem value={"MR"} key={"MR"}>
        Мавритания
      </MenuItem>
      <MenuItem value={"MG"} key={"MG"}>
        Мадагаскар
      </MenuItem>
      <MenuItem value={"YT"} key={"YT"}>
        Майотта
      </MenuItem>
      <MenuItem value={"MO"} key={"MO"}>
        Макао (САР)
      </MenuItem>
      <MenuItem value={"MW"} key={"MW"}>
        Малави
      </MenuItem>
      <MenuItem value={"MY"} key={"MY"}>
        Малайзия
      </MenuItem>
      <MenuItem value={"ML"} key={"ML"}>
        Мали
      </MenuItem>
      <MenuItem value={"MV"} key={"MV"}>
        Мальдивы
      </MenuItem>
      <MenuItem value={"MT"} key={"MT"}>
        Мальта
      </MenuItem>
      <MenuItem value={"MA"} key={"MA"}>
        Мароко
      </MenuItem>
      <MenuItem value={"MQ"} key={"MQ"}>
        Мартиника
      </MenuItem>
      <MenuItem value={"MX"} key={"MX"}>
        Мексика
      </MenuItem>
      <MenuItem value={"MZ"} key={"MZ"}>
        Мозамбик
      </MenuItem>
      <MenuItem value={"MD"} key={"MD"}>
        Молдова
      </MenuItem>
      <MenuItem value={"MC"} key={"MC"}>
        Монако
      </MenuItem>
      <MenuItem value={"MN"} key={"MN"}>
        Монголия
      </MenuItem>
      <MenuItem value={"MS"} key={"MS"}>
        Монсеррат
      </MenuItem>
      <MenuItem value={"MM"} key={"MM"}>
        Мьянма (Бирма)
      </MenuItem>
      <MenuItem value={"NA"} key={"NA"}>
        Намибия
      </MenuItem>
      <MenuItem value={"NR"} key={"NR"}>
        Науру
      </MenuItem>
      <MenuItem value={"NP"} key={"NP"}>
        Непал
      </MenuItem>
      <MenuItem value={"NE"} key={"NE"}>
        Нигер
      </MenuItem>
      <MenuItem value={"NG"} key={"NG"}>
        Нигерия
      </MenuItem>
      <MenuItem value={"NL"} key={"NL"}>
        Нидерланды
      </MenuItem>
      <MenuItem value={"NI"} key={"NI"}>
        Никарагуа
      </MenuItem>
      <MenuItem value={"NU"} key={"NU"}>
        Ниуэ
      </MenuItem>
      <MenuItem value={"NZ"} key={"NZ"}>
        Новая Зеландия
      </MenuItem>
      <MenuItem value={"NC"} key={"NC"}>
        Новая Каледония
      </MenuItem>
      <MenuItem value={"NO"} key={"NO"}>
        Норвегия
      </MenuItem>
      <MenuItem value={"BV"} key={"BV"}>
        о-в Буве
      </MenuItem>
      <MenuItem value={"AC"} key={"AC"}>
        о-в Вознесения
      </MenuItem>
      <MenuItem value={"IM"} key={"IM"}>
        о-в Мэн
      </MenuItem>
      <MenuItem value={"SH"} key={"SH"}>
        о-в Св. Елены
      </MenuItem>
      <MenuItem value={"PN"} key={"PN"}>
        о-ва Питкэрн
      </MenuItem>
      <MenuItem value={"TC"} key={"TC"}>
        о-ва Тёркс и Кайкос
      </MenuItem>
      <MenuItem value={"AE"} key={"AE"}>
        ОАЭ
      </MenuItem>
      <MenuItem value={"OM"} key={"OM"}>
        Оман
      </MenuItem>
      <MenuItem value={"KY"} key={"KY"}>
        Острова Кайман
      </MenuItem>
      <MenuItem value={"CK"} key={"CK"}>
        Острова Кука
      </MenuItem>
      <MenuItem value={"PK"} key={"PK"}>
        Пакистан
      </MenuItem>
      <MenuItem value={"PS"} key={"PS"}>
        Палестинские территории
      </MenuItem>
      <MenuItem value={"PA"} key={"PA"}>
        Панама
      </MenuItem>
      <MenuItem value={"PG"} key={"PG"}>
        Папуа - Новая Гвинея
      </MenuItem>
      <MenuItem value={"PY"} key={"PY"}>
        Парагвай
      </MenuItem>
      <MenuItem value={"PE"} key={"PE"}>
        Перу
      </MenuItem>
      <MenuItem value={"PL"} key={"PL"}>
        Польша
      </MenuItem>
      <MenuItem value={"PT"} key={"PT"}>
        Португалия
      </MenuItem>
      <MenuItem value={"PR"} key={"PR"}>
        Пуэрто-Рико
      </MenuItem>
      <MenuItem value={"KR"} key={"KR"}>
        Республика Корея
      </MenuItem>
      <MenuItem value={"RE"} key={"RE"}>
        Реюньон
      </MenuItem>
      <MenuItem value={"RU"} key={"RU"}>
        Россия
      </MenuItem>
      <MenuItem value={"RW"} key={"RW"}>
        Руанда
      </MenuItem>
      <MenuItem value={"RO"} key={"RO"}>
        Румыния
      </MenuItem>
      <MenuItem value={"SV"} key={"SV"}>
        Сальвадор
      </MenuItem>
      <MenuItem value={"WC"} key={"WC"}>
        Самоа
      </MenuItem>
      <MenuItem value={"SM"} key={"SM"}>
        Сан-Марино
      </MenuItem>
      <MenuItem value={"ST"} key={"ST"}>
        Сан-Томе и Принсипи
      </MenuItem>
      <MenuItem value={"SA"} key={"SA"}>
        Саудовская Аравия
      </MenuItem>
      <MenuItem value={"MK"} key={"MK"}>
        Северная Македония
      </MenuItem>
      <MenuItem value={"BL"} key={"BL"}>
        Сен-Бартелеми
      </MenuItem>
      <MenuItem value={"MF"} key={"MF"}>
        Сен-Мартен
      </MenuItem>
      <MenuItem value={"PM"} key={"PM"}>
        Сен-Пьер и Микелон
      </MenuItem>
      <MenuItem value={"SN"} key={"SN"}>
        Сенегал
      </MenuItem>
      <MenuItem value={"VC"} key={"VC"}>
        Сент-Винсент и Гренадины
      </MenuItem>
      <MenuItem value={"KN"} key={"KN"}>
        Сент-Китс и Невис
      </MenuItem>
      <MenuItem value={"LC"} key={"LC"}>
        Сент-Люсия
      </MenuItem>
      <MenuItem value={"RS"} key={"RS"}>
        Сербия
      </MenuItem>
      <MenuItem value={"SG"} key={"SG"}>
        Сингапур
      </MenuItem>
      <MenuItem value={"SX"} key={"SX"}>
        Синт-Мартен
      </MenuItem>
      <MenuItem value={"SK"} key={"SK"}>
        Словакия
      </MenuItem>
      <MenuItem value={"SI"} key={"SI"}>
        Словения
      </MenuItem>
      <MenuItem value={"US"} key={"US"}>
        Соединённые Штаты
      </MenuItem>
      <MenuItem value={"SB"} key={"SB"}>
        Соломоновы Острова
      </MenuItem>
      <MenuItem value={"SO"} key={"SO"}>
        Сомали
      </MenuItem>
      <MenuItem value={"SR"} key={"SR"}>
        Суринам
      </MenuItem>
      <MenuItem value={"SL"} key={"SL"}>
        Сьерра-Леоне
      </MenuItem>
      <MenuItem value={"TJ"} key={"TJ"}>
        Таджикистан
      </MenuItem>
      <MenuItem value={"TH"} key={"TH"}>
        Таиланд
      </MenuItem>
      <MenuItem value={"TW"} key={"TW"}>
        Тайвань
      </MenuItem>
      <MenuItem value={"TZ"} key={"TZ"}>
        Танзания
      </MenuItem>
      <MenuItem value={"TG"} key={"TG"}>
        Того
      </MenuItem>
      <MenuItem value={"TK"} key={"TK"}>
        Токелау
      </MenuItem>
      <MenuItem value={"TO"} key={"TO"}>
        Тонга
      </MenuItem>
      <MenuItem value={"TT"} key={"TT"}>
        Тринидад и Тобаго
      </MenuItem>
      <MenuItem value={"TH"} key={"TH"}>
        Тристан-да-Кунья
      </MenuItem>
      <MenuItem value={"TV"} key={"TV"}>
        Тувалу
      </MenuItem>
      <MenuItem value={"TN"} key={"TN"}>
        Тунис
      </MenuItem>
      <MenuItem value={"TM"} key={"TM"}>
        Туркменистан
      </MenuItem>
      <MenuItem value={"TR"} key={"TR"}>
        Турция
      </MenuItem>
      <MenuItem value={"UG"} key={"UG"}>
        Уганда
      </MenuItem>
      <MenuItem value={"UZ"} key={"UZ"}>
        Узбекистан
      </MenuItem>
      <MenuItem value={"UA"} key={"UA"}>
        Украина
      </MenuItem>
      <MenuItem value={"WF"} key={"WF"}>
        Уоллис и Футуна
      </MenuItem>
      <MenuItem value={"UY"} key={"UY"}>
        Уругвай
      </MenuItem>
      <MenuItem value={"FO"} key={"FO"}>
        Фарерские о-ва
      </MenuItem>
      <MenuItem value={"FJ"} key={"FJ"}>
        Фиджи
      </MenuItem>
      <MenuItem value={"PH"} key={"PH"}>
        Филиппины
      </MenuItem>
      <MenuItem value={"SF"} key={"SF"}>
        Финляндия
      </MenuItem>
      <MenuItem value={"FK"} key={"FK"}>
        Фолклендские о-ва
      </MenuItem>
      <MenuItem value={"FR"} key={"FR"}>
        Франция
      </MenuItem>
      <MenuItem value={"GF"} key={"GF"}>
        Французская Гвиана
      </MenuItem>
      <MenuItem value={"PF"} key={"PF"}>
        Французская Полинезия
      </MenuItem>
      <MenuItem value={"TF"} key={"TF"}>
        Французские Южные территории
      </MenuItem>
      <MenuItem value={"HR"} key={"HR"}>
        Хорватия
      </MenuItem>
      <MenuItem value={"CF"} key={"CF"}>
        Центрально-Африканская Республика
      </MenuItem>
      <MenuItem value={"TD"} key={"TD"}>
        Чад
      </MenuItem>
      <MenuItem value={"ME"} key={"ME"}>
        Черногория
      </MenuItem>
      <MenuItem value={"CZ"} key={"CZ"}>
        Чехия
      </MenuItem>
      <MenuItem value={"CL"} key={"CL"}>
        Чили
      </MenuItem>
      <MenuItem value={"CH"} key={"CH"}>
        Швейцария
      </MenuItem>
      <MenuItem value={"SE"} key={"SE"}>
        Швеция
      </MenuItem>
      <MenuItem value={"SJ"} key={"SJ"}>
        Шпитцберген и Ян-Майен
      </MenuItem>
      <MenuItem value={"LK"} key={"LK"}>
        Шри-Ланка
      </MenuItem>
      <MenuItem value={"EC"} key={"EC"}>
        Эквадор
      </MenuItem>
      <MenuItem value={"GQ"} key={"GQ"}>
        Экваториальная Гвинея
      </MenuItem>
      <MenuItem value={"ER"} key={"ER"}>
        Эритрея
      </MenuItem>
      <MenuItem value={"SZ"} key={"SZ"}>
        Эсватини
      </MenuItem>
      <MenuItem value={"EE"} key={"EE"}>
        Эстония
      </MenuItem>
      <MenuItem value={"ET"} key={"ET"}>
        Эфиопия
      </MenuItem>
      <MenuItem value={"GS"} key={"GS"}>
        Южная Георгия и Южные Сандвичевы о-ва
      </MenuItem>
      <MenuItem value={"ZA"} key={"ZA"}>
        Южно-Африканская Республика
      </MenuItem>
      <MenuItem value={"SD"} key={"SD"}>
        Южный Судан
      </MenuItem>
      <MenuItem value={"JM"} key={"JM"}>
        Ямайка
      </MenuItem>
      <MenuItem value={"JP"} key={"JP"}>
        Япония
      </MenuItem>
    </Select>
  )
}

export function AllCountriesDeu(props) {
  const classes = useStyles()

  return (
    <Select
      classes={{
        root: classes.selectRoot,
        select: classes.select,
        selectMenu: classes.selectMenu,
      }}
      MenuProps={{ classes: { paper: classes.selectX } }}
      size="small"
      id="country"
      name="country"
      // control={control}
      defaultValue={props.country}
      value={props.country}
      onChange={props.changeHandler}
      // inputRef={register({
      //   required: "ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОЛНЕНИЯ",
      // })}
    >
      <MenuItem value={"AF"} key={"AF"}>
        Afghanistan
      </MenuItem>
      <MenuItem value={"EG"} key={"EG"}>
        Ägypten
      </MenuItem>
      <MenuItem value={"AX"} key={"AX"}>
        Ålandinseln
      </MenuItem>
      <MenuItem value={"AL"} key={"AL"}>
        Albanien
      </MenuItem>
      <MenuItem value={"DZ"} key={"DZ"}>
        Algerien
      </MenuItem>
      <MenuItem value={"AD"} key={"AD"}>
        Andorra
      </MenuItem>
      <MenuItem value={"AO"} key={"AO"}>
        Angola
      </MenuItem>
      <MenuItem value={"AI"} key={"AI"}>
        Anguilla
      </MenuItem>
      <MenuItem value={"AQ"} key={"AQ"}>
        Antarktis
      </MenuItem>
      <MenuItem value={"AG"} key={"AG"}>
        Antigua and Barbuda
      </MenuItem>
      <MenuItem value={"GQ"} key={"GQ"}>
        Äquatorialguinea
      </MenuItem>
      <MenuItem value={"AR"} key={"AR"}>
        Argentinien
      </MenuItem>
      <MenuItem value={"AM"} key={"AM"}>
        Armenien
      </MenuItem>
      <MenuItem value={"AW"} key={"AW"}>
        Aruba
      </MenuItem>
      <MenuItem value={"AC"} key={"AC"}>
        Ascension
      </MenuItem>
      <MenuItem value={"AZ"} key={"AZ"}>
        Aserbaidschan
      </MenuItem>
      <MenuItem value={"ET"} key={"ET"}>
        Äthiopien
      </MenuItem>
      <MenuItem value={"AU"} key={"AU"}>
        Australien
      </MenuItem>
      <MenuItem value={"BS"} key={"BS"}>
        Bahamas
      </MenuItem>
      <MenuItem value={"BH"} key={"BH"}>
        Bahrain
      </MenuItem>
      <MenuItem value={"BD"} key={"BD"}>
        Bangladesch
      </MenuItem>
      <MenuItem value={"BB"} key={"BB"}>
        Barbados
      </MenuItem>
      <MenuItem value={"BY"} key={"BY"}>
        Belarus
      </MenuItem>
      <MenuItem value={"BE"} key={"BE"}>
        Belgien
      </MenuItem>
      <MenuItem value={"BZ"} key={"BZ"}>
        Belize
      </MenuItem>
      <MenuItem value={"BJ"} key={"BJ"}>
        Benin
      </MenuItem>
      <MenuItem value={"BM"} key={"BM"}>
        Bermuda
      </MenuItem>
      <MenuItem value={"BT"} key={"BT"}>
        Bhutan
      </MenuItem>
      <MenuItem value={"BO"} key={"BO"}>
        Bolivien
      </MenuItem>
      <MenuItem value={"BQ"} key={"BQ"}>
        Bonaire, Sint Eustatius und Saba
      </MenuItem>
      <MenuItem value={"BA"} key={"BA"}>
        Bosnien and Herzegowina
      </MenuItem>
      <MenuItem value={"BW"} key={"BW"}>
        Botsuana
      </MenuItem>
      <MenuItem value={"BV"} key={"BV"}>
        Bouvetinsel
      </MenuItem>
      <MenuItem value={"BR"} key={"BR"}>
        Brasilien
      </MenuItem>
      <MenuItem value={"VG"} key={"VG"}>
        Britische Jungferninseln
      </MenuItem>
      <MenuItem value={"IO"} key={"IO"}>
        Britisches Territorium im Indischen Ozean
      </MenuItem>
      <MenuItem value={"BN"} key={"BN"}>
        Brunei Darussalam
      </MenuItem>
      <MenuItem value={"BG"} key={"BG"}>
        Bulgarien
      </MenuItem>
      <MenuItem value={"BF"} key={"BF"}>
        Burkina Faso
      </MenuItem>
      <MenuItem value={"BI"} key={"BI"}>
        Burundi
      </MenuItem>
      <MenuItem value={"CV"} key={"CV"}>
        Cabo Verde
      </MenuItem>
      <MenuItem value={"CL"} key={"CL"}>
        Chile
      </MenuItem>
      <MenuItem value={"CN"} key={"CN"}>
        China
      </MenuItem>
      <MenuItem value={"CK"} key={"CK"}>
        Cookinseln
      </MenuItem>
      <MenuItem value={"CR"} key={"CR"}>
        Costa Rica
      </MenuItem>
      <MenuItem value={"CI"} key={"CI"}>
        Cote d'Ivoire
      </MenuItem>
      <MenuItem value={"CW"} key={"CW"}>
        Curaçao
      </MenuItem>
      <MenuItem value={"DK"} key={"DK"}>
        Dänemark
      </MenuItem>
      <MenuItem value={"DE"} key={"DE"}>
        Deutschland
      </MenuItem>
      <MenuItem value={"DM"} key={"DM"}>
        Dominica
      </MenuItem>
      <MenuItem value={"DO"} key={"DO"}>
        Dominikanische Republik
      </MenuItem>
      <MenuItem value={"DJ"} key={"DJ"}>
        Dschibuti
      </MenuItem>
      <MenuItem value={"EC"} key={"EC"}>
        Ecuador
      </MenuItem>
      <MenuItem value={"SV"} key={"SV"}>
        El Salvador
      </MenuItem>
      <MenuItem value={"ER"} key={"ER"}>
        Eritrea
      </MenuItem>
      <MenuItem value={"EE"} key={"EE"}>
        Estland
      </MenuItem>
      <MenuItem value={"SZ"} key={"SZ"}>
        Eswatini
      </MenuItem>
      <MenuItem value={"FK"} key={"FK"}>
        Falklandinseln
      </MenuItem>
      <MenuItem value={"FO"} key={"FO"}>
        Färöer
      </MenuItem>
      <MenuItem value={"FJ"} key={"FJ"}>
        Fidschi
      </MenuItem>
      <MenuItem value={"SF"} key={"SF"}>
        Finnland
      </MenuItem>
      <MenuItem value={"FR"} key={"FR"}>
        Frankreich
      </MenuItem>
      <MenuItem value={"GF"} key={"GF"}>
        Französisch-Guayana
      </MenuItem>
      <MenuItem value={"PF"} key={"PF"}>
        Französisch-Polynesien
      </MenuItem>
      <MenuItem value={"TF"} key={"TF"}>
        Französische Süd- und Antarktisgebiete
      </MenuItem>
      <MenuItem value={"GA"} key={"GA"}>
        Gabun
      </MenuItem>
      <MenuItem value={"GM"} key={"GM"}>
        Gambia
      </MenuItem>
      <MenuItem value={"GE"} key={"GE"}>
        Georgien
      </MenuItem>
      <MenuItem value={"GH"} key={"GH"}>
        Ghana
      </MenuItem>
      <MenuItem value={"GI"} key={"GI"}>
        Gibraltar
      </MenuItem>
      <MenuItem value={"GD"} key={"GD"}>
        Grenada
      </MenuItem>
      <MenuItem value={"GR"} key={"GR"}>
        Griechenland
      </MenuItem>
      <MenuItem value={"GL"} key={"GL"}>
        Grönland
      </MenuItem>
      <MenuItem value={"GP"} key={"GP"}>
        Guadeloupe
      </MenuItem>
      <MenuItem value={"GU"} key={"GU"}>
        Guam
      </MenuItem>
      <MenuItem value={"GT"} key={"GT"}>
        Guatemala
      </MenuItem>
      <MenuItem value={"GG"} key={"GG"}>
        Guernsey
      </MenuItem>
      <MenuItem value={"GN"} key={"GN"}>
        Guinea
      </MenuItem>
      <MenuItem value={"GW"} key={"GW"}>
        Guinea-Bissau
      </MenuItem>
      <MenuItem value={"GY"} key={"GY"}>
        Guyana
      </MenuItem>
      <MenuItem value={"HT"} key={"HT"}>
        Haiti
      </MenuItem>
      <MenuItem value={"HN"} key={"HN"}>
        Honduras
      </MenuItem>
      <MenuItem value={"IN"} key={"IN"}>
        Indien
      </MenuItem>
      <MenuItem value={"ID"} key={"ID"}>
        Indonesien
      </MenuItem>
      <MenuItem value={"IQ"} key={"IQ"}>
        Irak
      </MenuItem>
      <MenuItem value={"IE"} key={"IE"}>
        Irland
      </MenuItem>
      <MenuItem value={"IS"} key={"IS"}>
        Island
      </MenuItem>
      <MenuItem value={"IM"} key={"IM"}>
        Isle of Man
      </MenuItem>
      <MenuItem value={"IL"} key={"IL"}>
        Israel
      </MenuItem>
      <MenuItem value={"IT"} key={"IT"}>
        Italien
      </MenuItem>
      <MenuItem value={"JM"} key={"JM"}>
        Jamaika
      </MenuItem>
      <MenuItem value={"JP"} key={"JP"}>
        Japan
      </MenuItem>
      <MenuItem value={"YE"} key={"YE"}>
        Jemen
      </MenuItem>
      <MenuItem value={"JE"} key={"JE"}>
        Jersey
      </MenuItem>
      <MenuItem value={"JO"} key={"JO"}>
        Jordanien
      </MenuItem>
      <MenuItem value={"KY"} key={"KY"}>
        Kaimaninseln
      </MenuItem>
      <MenuItem value={"KH"} key={"KH"}>
        Kambodscha
      </MenuItem>
      <MenuItem value={"CM"} key={"CM"}>
        Kamerun
      </MenuItem>
      <MenuItem value={"CA"} key={"CA"}>
        Kanada
      </MenuItem>
      <MenuItem value={"KZ"} key={"KZ"}>
        Kasachstan
      </MenuItem>
      <MenuItem value={"QA"} key={"QA"}>
        Katar
      </MenuItem>
      <MenuItem value={"KE"} key={"KE"}>
        Kenia
      </MenuItem>
      <MenuItem value={"KG"} key={"KG"}>
        Kirgisistan
      </MenuItem>
      <MenuItem value={"KI"} key={"KI"}>
        Kiribati
      </MenuItem>
      <MenuItem value={"CO"} key={"CO"}>
        Kolumbien
      </MenuItem>
      <MenuItem value={"KM"} key={"KM"}>
        Komoren
      </MenuItem>
      <MenuItem value={"CG"} key={"CG"}>
        Kongo - Brazzaville
      </MenuItem>
      <MenuItem value={"CD"} key={"CD"}>
        Kongo - Kinshasa
      </MenuItem>
      <MenuItem value={"XK"} key={"XK"}>
        Kosovo
      </MenuItem>
      <MenuItem value={"HR"} key={"HR"}>
        Kroatien
      </MenuItem>
      <MenuItem value={"KW"} key={"KW"}>
        Kuwait
      </MenuItem>
      <MenuItem value={"LA"} key={"LA"}>
        Laos
      </MenuItem>
      <MenuItem value={"LS"} key={"LS"}>
        Lesotho
      </MenuItem>
      <MenuItem value={"LV"} key={"LV"}>
        Lettland
      </MenuItem>
      <MenuItem value={"LB"} key={"LB"}>
        Libanon
      </MenuItem>
      <MenuItem value={"LR"} key={"LR"}>
        Liberia
      </MenuItem>
      <MenuItem value={"LY"} key={"LY"}>
        Libyen
      </MenuItem>
      <MenuItem value={"LI"} key={"LI"}>
        Liechtenstein
      </MenuItem>
      <MenuItem value={"LT"} key={"LT"}>
        Litauen
      </MenuItem>
      <MenuItem value={"LU"} key={"LU"}>
        Luxemburg
      </MenuItem>
      <MenuItem value={"MG"} key={"MG"}>
        Madagaskar
      </MenuItem>
      <MenuItem value={"MW"} key={"MW"}>
        Malawi
      </MenuItem>
      <MenuItem value={"MY"} key={"MY"}>
        Malaysia
      </MenuItem>
      <MenuItem value={"MV"} key={"MV"}>
        Malediven
      </MenuItem>
      <MenuItem value={"ML"} key={"ML"}>
        Mali
      </MenuItem>
      <MenuItem value={"MT"} key={"MT"}>
        Malta
      </MenuItem>
      <MenuItem value={"MA"} key={"MA"}>
        Marokko
      </MenuItem>
      <MenuItem value={"MQ"} key={"MQ"}>
        Martinique
      </MenuItem>
      <MenuItem value={"MR"} key={"MR"}>
        Mauretanien
      </MenuItem>
      <MenuItem value={"MU"} key={"MU"}>
        Mauritius
      </MenuItem>
      <MenuItem value={"YT"} key={"YT"}>
        Mayotte
      </MenuItem>
      <MenuItem value={"MX"} key={"MX"}>
        Mexiko
      </MenuItem>
      <MenuItem value={"MC"} key={"MC"}>
        Monaco
      </MenuItem>
      <MenuItem value={"MN"} key={"MN"}>
        Mongolei
      </MenuItem>
      <MenuItem value={"ME"} key={"ME"}>
        Montenegro
      </MenuItem>
      <MenuItem value={"MS"} key={"MS"}>
        Montserrat
      </MenuItem>
      <MenuItem value={"MZ"} key={"MZ"}>
        Mosambik
      </MenuItem>
      <MenuItem value={"MM"} key={"MM"}>
        Myanmar
      </MenuItem>
      <MenuItem value={"NA"} key={"NA"}>
        Namibia
      </MenuItem>
      <MenuItem value={"NR"} key={"NR"}>
        Nauru
      </MenuItem>
      <MenuItem value={"NP"} key={"NP"}>
        Nepal
      </MenuItem>
      <MenuItem value={"NC"} key={"NC"}>
        Neukaledonien
      </MenuItem>
      <MenuItem value={"NZ"} key={"NZ"}>
        Neuseeland
      </MenuItem>
      <MenuItem value={"NI"} key={"NI"}>
        Nicaragua
      </MenuItem>
      <MenuItem value={"NL"} key={"NL"}>
        Niederlande
      </MenuItem>
      <MenuItem value={"NE"} key={"NE"}>
        Niger
      </MenuItem>
      <MenuItem value={"NG"} key={"NG"}>
        Nigeria
      </MenuItem>
      <MenuItem value={"NU"} key={"NU"}>
        Niue
      </MenuItem>
      <MenuItem value={"MK"} key={"MK"}>
        Nordmazedonien
      </MenuItem>
      <MenuItem value={"NO"} key={"NO"}>
        Norwegen
      </MenuItem>
      <MenuItem value={"OM"} key={"OM"}>
        Oman
      </MenuItem>
      <MenuItem value={"AT"} key={"AT"}>
        Österreich
      </MenuItem>
      <MenuItem value={"PK"} key={"PK"}>
        Pakistan
      </MenuItem>
      <MenuItem value={"PS"} key={"PS"}>
        Palästinensische Autonomiebehörde
      </MenuItem>
      <MenuItem value={"PA"} key={"PA"}>
        Panama
      </MenuItem>
      <MenuItem value={"PG"} key={"PG"}>
        Papua-Neuguinea
      </MenuItem>
      <MenuItem value={"PY"} key={"PY"}>
        Paraguay
      </MenuItem>
      <MenuItem value={"PE"} key={"PE"}>
        Peru
      </MenuItem>
      <MenuItem value={"PH"} key={"PH"}>
        Philippinen
      </MenuItem>
      <MenuItem value={"PN"} key={"PN"}>
        Pitcairninseln
      </MenuItem>
      <MenuItem value={"PL"} key={"PL"}>
        Polen
      </MenuItem>
      <MenuItem value={"PT"} key={"PT"}>
        Portugal
      </MenuItem>
      <MenuItem value={"PR"} key={"PR"}>
        Puerto Rico
      </MenuItem>
      <MenuItem value={"MD"} key={"MD"}>
        Republik Moldau
      </MenuItem>
      <MenuItem value={"RE"} key={"RE"}>
        Réunion
      </MenuItem>
      <MenuItem value={"RW"} key={"RW"}>
        Ruanda
      </MenuItem>
      <MenuItem value={"RO"} key={"RO"}>
        Rumänien
      </MenuItem>
      <MenuItem value={"RU"} key={"RU"}>
        Russland
      </MenuItem>
      <MenuItem value={"SB"} key={"SB"}>
        Salomonen
      </MenuItem>
      <MenuItem value={"ZM"} key={"ZM"}>
        Sambia
      </MenuItem>
      <MenuItem value={"WC"} key={"WC"}>
        Samoa
      </MenuItem>
      <MenuItem value={"SM"} key={"SM"}>
        San Marino
      </MenuItem>
      <MenuItem value={"ST"} key={"ST"}>
        São Tomé & Príncipe
      </MenuItem>
      <MenuItem value={"SA"} key={"SA"}>
        Saudi-Arabien
      </MenuItem>
      <MenuItem value={"SE"} key={"SE"}>
        Schweden
      </MenuItem>
      <MenuItem value={"CH"} key={"CH"}>
        Schweiz
      </MenuItem>
      <MenuItem value={"SN"} key={"SN"}>
        Senegal
      </MenuItem>
      <MenuItem value={"RS"} key={"RS"}>
        Serbien
      </MenuItem>
      <MenuItem value={"SC"} key={"SC"}>
        Seychellen
      </MenuItem>
      <MenuItem value={"SL"} key={"SL"}>
        Sierra Leone
      </MenuItem>
      <MenuItem value={"ZW"} key={"ZW"}>
        Simbabwe
      </MenuItem>
      <MenuItem value={"SG"} key={"SG"}>
        Singapur
      </MenuItem>
      <MenuItem value={"SX"} key={"SX"}>
        Sint Maarten
      </MenuItem>
      <MenuItem value={"SK"} key={"SK"}>
        Slowakei
      </MenuItem>
      <MenuItem value={"SI"} key={"SI"}>
        Slowenien
      </MenuItem>
      <MenuItem value={"SO"} key={"SO"}>
        Somalia
      </MenuItem>
      <MenuItem value={"HK"} key={"HK"}>
        Sonderverwaltungsregion Hongkong
      </MenuItem>
      <MenuItem value={"MO"} key={"MO"}>
        Sonderverwaltungsregion Macau
      </MenuItem>
      <MenuItem value={"ES"} key={"ES"}>
        Spanien
      </MenuItem>
      <MenuItem value={"SJ"} key={"SJ"}>
        Spitzbergen und Jan Mayen
      </MenuItem>
      <MenuItem value={"LK"} key={"LK"}>
        Sri Lanka
      </MenuItem>
      <MenuItem value={"BL"} key={"BL"}>
        St. Barthélemy
      </MenuItem>
      <MenuItem value={"SH"} key={"SH"}>
        St. Helena
      </MenuItem>
      <MenuItem value={"KN"} key={"KN"}>
        St. Kitts und Nevis
      </MenuItem>
      <MenuItem value={"LC"} key={"LC"}>
        St. Lucia
      </MenuItem>
      <MenuItem value={"MF"} key={"MF"}>
        St. Martin
      </MenuItem>
      <MenuItem value={"PM"} key={"PM"}>
        St. Pierre & Miquelon
      </MenuItem>
      <MenuItem value={"VC"} key={"VC"}>
        St. Vincent und die Grenadinen
      </MenuItem>
      <MenuItem value={"ZA"} key={"ZA"}>
        Südafrika
      </MenuItem>
      <MenuItem value={"GS"} key={"GS"}>
        Südgeorgien und die Südlichen Sandwichinseln
      </MenuItem>
      <MenuItem value={"KR"} key={"KR"}>
        Südkorea
      </MenuItem>
      <MenuItem value={"SD"} key={"SD"}>
        Südsudan
      </MenuItem>
      <MenuItem value={"SR"} key={"SR"}>
        Suriname
      </MenuItem>
      <MenuItem value={"TJ"} key={"TJ"}>
        Tadschikistan
      </MenuItem>
      <MenuItem value={"TW"} key={"TW"}>
        Taiwan
      </MenuItem>
      <MenuItem value={"TZ"} key={"TZ"}>
        Tansania
      </MenuItem>
      <MenuItem value={"TH"} key={"TH"}>
        Thailand
      </MenuItem>
      <MenuItem value={"TP"} key={"TP"}>
        Timor-Leste
      </MenuItem>
      <MenuItem value={"TG"} key={"TG"}>
        Togo
      </MenuItem>
      <MenuItem value={"TK"} key={"TK"}>
        Tokelau
      </MenuItem>
      <MenuItem value={"TO"} key={"TO"}>
        Tonga
      </MenuItem>
      <MenuItem value={"TT"} key={"TT"}>
        Trinidad und Tobago
      </MenuItem>
      <MenuItem value={"TH"} key={"TH"}>
        Tristan da Cunha
      </MenuItem>
      <MenuItem value={"TD"} key={"TD"}>
        Tschad
      </MenuItem>
      <MenuItem value={"CZ"} key={"CZ"}>
        Tschechien
      </MenuItem>
      <MenuItem value={"TN"} key={"TN"}>
        Tunisien
      </MenuItem>
      <MenuItem value={"TR"} key={"TR"}>
        Türkei
      </MenuItem>
      <MenuItem value={"TM"} key={"TM"}>
        Turkmenistan
      </MenuItem>
      <MenuItem value={"TC"} key={"TC"}>
        Turks- und Caicosinseln
      </MenuItem>
      <MenuItem value={"TV"} key={"TV"}>
        Tuvalu
      </MenuItem>
      <MenuItem value={"UG"} key={"UG"}>
        Uganda
      </MenuItem>
      <MenuItem value={"UA"} key={"UA"}>
        Ukraine
      </MenuItem>
      <MenuItem value={"HU"} key={"HU"}>
        Ungarn
      </MenuItem>
      <MenuItem value={"UY"} key={"UY"}>
        Uruguay
      </MenuItem>
      <MenuItem value={"UZ"} key={"UZ"}>
        Usbekistan
      </MenuItem>
      <MenuItem value={"VU"} key={"VU"}>
        Vanuatu
      </MenuItem>
      <MenuItem value={"VA"} key={"VA"}>
        Vatikanstadt
      </MenuItem>
      <MenuItem value={"VE"} key={"VE"}>
        Venezuela
      </MenuItem>
      <MenuItem value={"AE"} key={"AE"}>
        Vereinigte Arabische Emirate
      </MenuItem>
      <MenuItem value={"US"} key={"US"}>
        Vereinigte Staaten
      </MenuItem>
      <MenuItem value={"GB"} key={"GB"}>
        Vereinigtes Königreich
      </MenuItem>
      <MenuItem value={"VN"} key={"VN"}>
        Vietnam
      </MenuItem>
      <MenuItem value={"WF"} key={"WF"}>
        Wallis and Futuna
      </MenuItem>
      <MenuItem value={"EH"} key={"EH"}>
        Westsahara
      </MenuItem>
      <MenuItem value={"CF"} key={"CF"}>
        Zentralafrikanische Republik
      </MenuItem>
      <MenuItem value={"CY"} key={"CY"}>
        Zypern
      </MenuItem>
    </Select>
  )
}

export function AllCountriesEng(props) {
  const classes = useStyles()

  return (
    <Select
      classes={{
        root: classes.selectRoot,
        select: classes.select,
        selectMenu: classes.selectMenu,
      }}
      MenuProps={{ classes: { paper: classes.selectX } }}
      size="small"
      id="country"
      name="country"
      // control={control}
      defaultValue={props.country}
      value={props.country}
      onChange={props.changeHandler}
      // inputRef={register({
      //   required: "ОБЯЗАТЕЛЬНО ДЛЯ ЗАПОЛНЕНИЯ",
      // })}
    >
      <MenuItem value={"AF"} key={"AF"}>
        Afghanistan
      </MenuItem>
      <MenuItem value={"AX"} key={"AX"}>
        Åland Islands
      </MenuItem>
      <MenuItem value={"AL"} key={"AL"}>
        Albania
      </MenuItem>
      <MenuItem value={"DZ"} key={"DZ"}>
        Algeria
      </MenuItem>
      <MenuItem value={"AD"} key={"AD"}>
        Andorra
      </MenuItem>
      <MenuItem value={"AO"} key={"AO"}>
        Angola
      </MenuItem>
      <MenuItem value={"AI"} key={"AI"}>
        Anguilla
      </MenuItem>
      <MenuItem value={"AQ"} key={"AQ"}>
        Antarctica
      </MenuItem>
      <MenuItem value={"AG"} key={"AG"}>
        Antigua and Barbuda
      </MenuItem>
      <MenuItem value={"AR"} key={"AR"}>
        Argentina
      </MenuItem>
      <MenuItem value={"AM"} key={"AM"}>
        Armenia
      </MenuItem>
      <MenuItem value={"AW"} key={"AW"}>
        Aruba
      </MenuItem>
      <MenuItem value={"AC"} key={"AC"}>
        Ascension Islands
      </MenuItem>
      <MenuItem value={"AU"} key={"AU"}>
        Australia
      </MenuItem>
      <MenuItem value={"AT"} key={"AT"}>
        Austria
      </MenuItem>
      <MenuItem value={"AZ"} key={"AZ"}>
        Azerbaijan
      </MenuItem>
      <MenuItem value={"BS"} key={"BS"}>
        Bahamas
      </MenuItem>
      <MenuItem value={"BH"} key={"BH"}>
        Bahrain
      </MenuItem>
      <MenuItem value={"BD"} key={"BD"}>
        Bangladesh
      </MenuItem>
      <MenuItem value={"BB"} key={"BB"}>
        Barbados
      </MenuItem>
      <MenuItem value={"BY"} key={"BY"}>
        Belarus
      </MenuItem>
      <MenuItem value={"BE"} key={"BE"}>
        Belgium
      </MenuItem>
      <MenuItem value={"BZ"} key={"BZ"}>
        Belize
      </MenuItem>
      <MenuItem value={"BJ"} key={"BJ"}>
        Benin
      </MenuItem>
      <MenuItem value={"BM"} key={"BM"}>
        Bermuda
      </MenuItem>
      <MenuItem value={"BT"} key={"BT"}>
        Bhutan
      </MenuItem>
      <MenuItem value={"BO"} key={"BO"}>
        Bolivia
      </MenuItem>
      <MenuItem value={"BA"} key={"BA"}>
        Bosnia and Herzegovina
      </MenuItem>
      <MenuItem value={"BW"} key={"BW"}>
        Botswana
      </MenuItem>
      <MenuItem value={"BV"} key={"BV"}>
        Bouvet Island
      </MenuItem>
      <MenuItem value={"BR"} key={"BR"}>
        Brazil
      </MenuItem>
      <MenuItem value={"IO"} key={"IO"}>
        British Indian Ocean Territory
      </MenuItem>
      <MenuItem value={"VG"} key={"VG"}>
        British Virgin Islands
      </MenuItem>
      <MenuItem value={"BN"} key={"BN"}>
        Brunei
      </MenuItem>
      <MenuItem value={"BG"} key={"BG"}>
        Bulgaria
      </MenuItem>
      <MenuItem value={"BF"} key={"BF"}>
        Burkina Faso
      </MenuItem>
      <MenuItem value={"BI"} key={"BI"}>
        Burundi
      </MenuItem>
      <MenuItem value={"KH"} key={"KH"}>
        Cambodia
      </MenuItem>
      <MenuItem value={"CM"} key={"CM"}>
        Cameroon
      </MenuItem>
      <MenuItem value={"CA"} key={"CA"}>
        Canada
      </MenuItem>
      <MenuItem value={"CV"} key={"CV"}>
        Cape Verde
      </MenuItem>
      <MenuItem value={"BQ"} key={"BQ"}>
        Caribbean Netherlands
      </MenuItem>
      <MenuItem value={"KY"} key={"KY"}>
        Cayman Islands
      </MenuItem>
      <MenuItem value={"CF"} key={"CF"}>
        Central African Republic
      </MenuItem>
      <MenuItem value={"TD"} key={"TD"}>
        Chad
      </MenuItem>
      <MenuItem value={"CL"} key={"CL"}>
        Chile
      </MenuItem>
      <MenuItem value={"CN"} key={"CN"}>
        China
      </MenuItem>
      <MenuItem value={"CO"} key={"CO"}>
        Colombia
      </MenuItem>
      <MenuItem value={"KM"} key={"KM"}>
        Comoros
      </MenuItem>
      <MenuItem value={"CG"} key={"CG"}>
        Congo - Brazzaville
      </MenuItem>
      <MenuItem value={"CD"} key={"CD"}>
        Congo - Kinshasa
      </MenuItem>
      <MenuItem value={"CK"} key={"CK"}>
        Cook Islands
      </MenuItem>
      <MenuItem value={"CR"} key={"CR"}>
        Costa Rica
      </MenuItem>
      <MenuItem value={"CI"} key={"CI"}>
        Cote d'Ivoire
      </MenuItem>
      <MenuItem value={"HR"} key={"HR"}>
        Croatia
      </MenuItem>
      <MenuItem value={"CW"} key={"CW"}>
        Curaçao
      </MenuItem>
      <MenuItem value={"CY"} key={"CY"}>
        Cyprus
      </MenuItem>
      <MenuItem value={"CZ"} key={"CZ"}>
        Czechia
      </MenuItem>
      <MenuItem value={"DK"} key={"DK"}>
        Denmark
      </MenuItem>
      <MenuItem value={"DJ"} key={"DJ"}>
        Djibouti
      </MenuItem>
      <MenuItem value={"DM"} key={"DM"}>
        Dominica
      </MenuItem>
      <MenuItem value={"DO"} key={"DO"}>
        Dominican Republic
      </MenuItem>
      <MenuItem value={"EC"} key={"EC"}>
        Ecuador
      </MenuItem>
      <MenuItem value={"EG"} key={"EG"}>
        Egypt
      </MenuItem>
      <MenuItem value={"SV"} key={"SV"}>
        El Salvador
      </MenuItem>
      <MenuItem value={"GQ"} key={"GQ"}>
        Equatorial Guinea
      </MenuItem>
      <MenuItem value={"ER"} key={"ER"}>
        Eritrea
      </MenuItem>
      <MenuItem value={"EE"} key={"EE"}>
        Estonia
      </MenuItem>
      <MenuItem value={"SZ"} key={"SZ"}>
        Eswatini
      </MenuItem>
      <MenuItem value={"ET"} key={"ET"}>
        Ethiopia
      </MenuItem>
      <MenuItem value={"FK"} key={"FK"}>
        Falkland Islands
      </MenuItem>
      <MenuItem value={"FO"} key={"FO"}>
        Faroe Islands
      </MenuItem>
      <MenuItem value={"FJ"} key={"FJ"}>
        Fiji
      </MenuItem>
      <MenuItem value={"SF"} key={"SF"}>
        Finland
      </MenuItem>
      <MenuItem value={"FR"} key={"FR"}>
        France
      </MenuItem>
      <MenuItem value={"GF"} key={"GF"}>
        French Guiana
      </MenuItem>
      <MenuItem value={"PF"} key={"PF"}>
        French Polynesia
      </MenuItem>
      <MenuItem value={"TF"} key={"TF"}>
        French Southern Territories
      </MenuItem>
      <MenuItem value={"GA"} key={"GA"}>
        Gabon
      </MenuItem>
      <MenuItem value={"GM"} key={"GM"}>
        Gambia
      </MenuItem>
      <MenuItem value={"GE"} key={"GE"}>
        Georgia
      </MenuItem>
      <MenuItem value={"DE"} key={"DE"}>
        Germany
      </MenuItem>
      <MenuItem value={"GH"} key={"GH"}>
        Ghana
      </MenuItem>
      <MenuItem value={"GI"} key={"GI"}>
        Gibraltar
      </MenuItem>
      <MenuItem value={"GR"} key={"GR"}>
        Greece
      </MenuItem>
      <MenuItem value={"GL"} key={"GL"}>
        Greenland
      </MenuItem>
      <MenuItem value={"GD"} key={"GD"}>
        Grenada
      </MenuItem>
      <MenuItem value={"GP"} key={"GP"}>
        Guadeloupe
      </MenuItem>
      <MenuItem value={"GU"} key={"GU"}>
        Guam
      </MenuItem>
      <MenuItem value={"GT"} key={"GT"}>
        Guatemala
      </MenuItem>
      <MenuItem value={"GG"} key={"GG"}>
        Guernsey
      </MenuItem>
      <MenuItem value={"GN"} key={"GN"}>
        Guinea
      </MenuItem>
      <MenuItem value={"GW"} key={"GW"}>
        Guinea-Bissau
      </MenuItem>
      <MenuItem value={"GY"} key={"GY"}>
        Guyana
      </MenuItem>
      <MenuItem value={"HT"} key={"HT"}>
        Haiti
      </MenuItem>
      <MenuItem value={"HN"} key={"HN"}>
        Honduras
      </MenuItem>
      <MenuItem value={"HK"} key={"HK"}>
        Hong Kong SAR China
      </MenuItem>
      <MenuItem value={"HU"} key={"HU"}>
        Hungary
      </MenuItem>
      <MenuItem value={"IS"} key={"IS"}>
        Iceland
      </MenuItem>
      <MenuItem value={"IN"} key={"IN"}>
        India
      </MenuItem>
      <MenuItem value={"ID"} key={"ID"}>
        Indonesia
      </MenuItem>
      <MenuItem value={"IQ"} key={"IQ"}>
        Iraq
      </MenuItem>
      <MenuItem value={"IE"} key={"IE"}>
        Ireland
      </MenuItem>
      <MenuItem value={"IM"} key={"IM"}>
        Isle of Man
      </MenuItem>
      <MenuItem value={"IL"} key={"IL"}>
        Israel
      </MenuItem>
      <MenuItem value={"IT"} key={"IT"}>
        Italy
      </MenuItem>
      <MenuItem value={"JM"} key={"JM"}>
        Jamaica
      </MenuItem>
      <MenuItem value={"JP"} key={"JP"}>
        Japan
      </MenuItem>
      <MenuItem value={"JE"} key={"JE"}>
        Jersey
      </MenuItem>
      <MenuItem value={"JO"} key={"JO"}>
        Jordan
      </MenuItem>
      <MenuItem value={"KZ"} key={"KZ"}>
        Kazakhstan
      </MenuItem>
      <MenuItem value={"KE"} key={"KE"}>
        Kenya
      </MenuItem>
      <MenuItem value={"KI"} key={"KI"}>
        Kiribati
      </MenuItem>
      <MenuItem value={"XK"} key={"XK"}>
        Kosovo
      </MenuItem>
      <MenuItem value={"KW"} key={"KW"}>
        Kuwait
      </MenuItem>
      <MenuItem value={"KG"} key={"KG"}>
        Kyrgyzstan
      </MenuItem>
      <MenuItem value={"LA"} key={"LA"}>
        Laos
      </MenuItem>
      <MenuItem value={"LV"} key={"LV"}>
        Latvia
      </MenuItem>
      <MenuItem value={"LB"} key={"LB"}>
        Lebanon
      </MenuItem>
      <MenuItem value={"LS"} key={"LS"}>
        Lesotho
      </MenuItem>
      <MenuItem value={"LR"} key={"LR"}>
        Liberia
      </MenuItem>
      <MenuItem value={"LY"} key={"LY"}>
        Libya
      </MenuItem>
      <MenuItem value={"LI"} key={"LI"}>
        Liechtenstein
      </MenuItem>
      <MenuItem value={"LT"} key={"LT"}>
        Lithuania
      </MenuItem>
      <MenuItem value={"LU"} key={"LU"}>
        Luxembourg
      </MenuItem>
      <MenuItem value={"MO"} key={"MO"}>
        Macau SAR China
      </MenuItem>
      <MenuItem value={"MG"} key={"MG"}>
        Madagascar
      </MenuItem>
      <MenuItem value={"MW"} key={"MW"}>
        Malawi
      </MenuItem>
      <MenuItem value={"MY"} key={"MY"}>
        Malaysia
      </MenuItem>
      <MenuItem value={"MV"} key={"MV"}>
        Maldives
      </MenuItem>
      <MenuItem value={"ML"} key={"ML"}>
        Mali
      </MenuItem>
      <MenuItem value={"MT"} key={"MT"}>
        Malta
      </MenuItem>
      <MenuItem value={"MQ"} key={"MQ"}>
        Martinique
      </MenuItem>
      <MenuItem value={"MR"} key={"MR"}>
        Mauritania
      </MenuItem>
      <MenuItem value={"MU"} key={"MU"}>
        Mauritius
      </MenuItem>
      <MenuItem value={"YT"} key={"YT"}>
        Mayotte
      </MenuItem>
      <MenuItem value={"MX"} key={"MX"}>
        Mexico
      </MenuItem>
      <MenuItem value={"MD"} key={"MD"}>
        Moldova
      </MenuItem>
      <MenuItem value={"MC"} key={"MC"}>
        Monaco
      </MenuItem>
      <MenuItem value={"MN"} key={"MN"}>
        Mongolia
      </MenuItem>
      <MenuItem value={"ME"} key={"ME"}>
        Montenegro
      </MenuItem>
      <MenuItem value={"MS"} key={"MS"}>
        Montserrat
      </MenuItem>
      <MenuItem value={"MA"} key={"MA"}>
        Morocco
      </MenuItem>
      <MenuItem value={"MZ"} key={"MZ"}>
        Mozambique
      </MenuItem>
      <MenuItem value={"MM"} key={"MM"}>
        Myanmar (Burma)
      </MenuItem>
      <MenuItem value={"NA"} key={"NA"}>
        Namibia
      </MenuItem>
      <MenuItem value={"NR"} key={"NR"}>
        Nauru
      </MenuItem>
      <MenuItem value={"NP"} key={"NP"}>
        Nepal
      </MenuItem>
      <MenuItem value={"NL"} key={"NL"}>
        Netherlands
      </MenuItem>
      <MenuItem value={"NC"} key={"NC"}>
        New Caledonia
      </MenuItem>
      <MenuItem value={"NZ"} key={"NZ"}>
        New Zealand
      </MenuItem>
      <MenuItem value={"NI"} key={"NI"}>
        Nicaragua
      </MenuItem>
      <MenuItem value={"NE"} key={"NE"}>
        Niger
      </MenuItem>
      <MenuItem value={"NG"} key={"NG"}>
        Nigeria
      </MenuItem>
      <MenuItem value={"NU"} key={"NU"}>
        Niue
      </MenuItem>
      <MenuItem value={"MK"} key={"MK"}>
        North Macedonia
      </MenuItem>
      <MenuItem value={"NO"} key={"NO"}>
        Norway
      </MenuItem>
      <MenuItem value={"OM"} key={"OM"}>
        Oman
      </MenuItem>
      <MenuItem value={"PK"} key={"PK"}>
        Pakistan
      </MenuItem>
      <MenuItem value={"PS"} key={"PS"}>
        Palestinian Territories
      </MenuItem>
      <MenuItem value={"PA"} key={"PA"}>
        Panama
      </MenuItem>
      <MenuItem value={"PG"} key={"PG"}>
        Papua New Guinea
      </MenuItem>
      <MenuItem value={"PY"} key={"PY"}>
        Paraguay
      </MenuItem>
      <MenuItem value={"PE"} key={"PE"}>
        Peru
      </MenuItem>
      <MenuItem value={"PH"} key={"PH"}>
        Philippines
      </MenuItem>
      <MenuItem value={"PN"} key={"PN"}>
        Pitcairn Islands
      </MenuItem>
      <MenuItem value={"PL"} key={"PL"}>
        Poland
      </MenuItem>
      <MenuItem value={"PT"} key={"PT"}>
        Portugal
      </MenuItem>
      <MenuItem value={"PR"} key={"PR"}>
        Puerto Rico
      </MenuItem>
      <MenuItem value={"QA"} key={"QA"}>
        Qatar
      </MenuItem>
      <MenuItem value={"KR"} key={"KR"}>
        Republic of Korea
      </MenuItem>
      <MenuItem value={"RE"} key={"RE"}>
        Réunion
      </MenuItem>
      <MenuItem value={"RO"} key={"RO"}>
        Romania
      </MenuItem>
      <MenuItem value={"RU"} key={"RU"}>
        Russia
      </MenuItem>
      <MenuItem value={"RW"} key={"RW"}>
        Rwanda
      </MenuItem>
      <MenuItem value={"WC"} key={"WC"}>
        Samoa
      </MenuItem>
      <MenuItem value={"SM"} key={"SM"}>
        San Marino
      </MenuItem>
      <MenuItem value={"ST"} key={"ST"}>
        São Tomé & Príncipe
      </MenuItem>
      <MenuItem value={"SA"} key={"SA"}>
        Saudi Arabia
      </MenuItem>
      <MenuItem value={"SN"} key={"SN"}>
        Senegal
      </MenuItem>
      <MenuItem value={"RS"} key={"RS"}>
        Serbia
      </MenuItem>
      <MenuItem value={"SC"} key={"SC"}>
        Seychelles
      </MenuItem>
      <MenuItem value={"SL"} key={"SL"}>
        Sierra Leone
      </MenuItem>
      <MenuItem value={"SG"} key={"SG"}>
        Singapore
      </MenuItem>
      <MenuItem value={"SX"} key={"SX"}>
        Sint Maarten
      </MenuItem>
      <MenuItem value={"SK"} key={"SK"}>
        Slovakia
      </MenuItem>
      <MenuItem value={"SI"} key={"SI"}>
        Slovenia
      </MenuItem>
      <MenuItem value={"SB"} key={"SB"}>
        Solomon Islands
      </MenuItem>
      <MenuItem value={"SO"} key={"SO"}>
        Somalia
      </MenuItem>
      <MenuItem value={"ZA"} key={"ZA"}>
        South Africa
      </MenuItem>
      <MenuItem value={"GS"} key={"GS"}>
        South Georgia & South Sandwich Islands
      </MenuItem>
      <MenuItem value={"SD"} key={"SD"}>
        South Sudan
      </MenuItem>
      <MenuItem value={"ES"} key={"ES"}>
        Spain
      </MenuItem>
      <MenuItem value={"LK"} key={"LK"}>
        Sri Lanka
      </MenuItem>
      <MenuItem value={"BL"} key={"BL"}>
        St. Barthélemy
      </MenuItem>
      <MenuItem value={"SH"} key={"SH"}>
        St. Helena
      </MenuItem>
      <MenuItem value={"KN"} key={"KN"}>
        St. Kitts & Nevis
      </MenuItem>
      <MenuItem value={"LC"} key={"LC"}>
        St. Lucia
      </MenuItem>
      <MenuItem value={"MF"} key={"MF"}>
        St. Martin
      </MenuItem>
      <MenuItem value={"PM"} key={"PM"}>
        St. Pierre & Miquelon
      </MenuItem>
      <MenuItem value={"VC"} key={"VC"}>
        St. Vincent & Grenadines
      </MenuItem>
      <MenuItem value={"SR"} key={"SR"}>
        Suriname
      </MenuItem>
      <MenuItem value={"SJ"} key={"SJ"}>
        Svalbard & Jan Mayen
      </MenuItem>
      <MenuItem value={"SE"} key={"SE"}>
        Sweden
      </MenuItem>
      <MenuItem value={"CH"} key={"CH"}>
        Switzerland
      </MenuItem>
      <MenuItem value={"TW"} key={"TW"}>
        Taiwan
      </MenuItem>
      <MenuItem value={"TJ"} key={"TJ"}>
        Tajikistan
      </MenuItem>
      <MenuItem value={"TZ"} key={"TZ"}>
        Tanzania
      </MenuItem>
      <MenuItem value={"TH"} key={"TH"}>
        Thailand
      </MenuItem>
      <MenuItem value={"TP"} key={"TP"}>
        Timor-Leste
      </MenuItem>
      <MenuItem value={"TG"} key={"TG"}>
        Togo
      </MenuItem>
      <MenuItem value={"TK"} key={"TK"}>
        Tokelau
      </MenuItem>
      <MenuItem value={"TO"} key={"TO"}>
        Tonga
      </MenuItem>
      <MenuItem value={"TT"} key={"TT"}>
        Trinidad & Tobago
      </MenuItem>
      <MenuItem value={"TH"} key={"TH"}>
        Tristan da Cunha
      </MenuItem>
      <MenuItem value={"TN"} key={"TN"}>
        Tunisia
      </MenuItem>
      <MenuItem value={"TR"} key={"TR"}>
        Turkey
      </MenuItem>
      <MenuItem value={"TM"} key={"TM"}>
        Turkmenistan
      </MenuItem>
      <MenuItem value={"TC"} key={"TC"}>
        Turks and Caicos Islands
      </MenuItem>
      <MenuItem value={"TV"} key={"TV"}>
        Tuvalu
      </MenuItem>
      <MenuItem value={"UG"} key={"UG"}>
        Uganda
      </MenuItem>
      <MenuItem value={"UA"} key={"UA"}>
        Ukraine
      </MenuItem>
      <MenuItem value={"AE"} key={"AE"}>
        United Arab Emirates
      </MenuItem>
      <MenuItem value={"GB"} key={"GB"}>
        United Kingdom
      </MenuItem>
      <MenuItem value={"US"} key={"US"}>
        United States
      </MenuItem>
      <MenuItem value={"UY"} key={"UY"}>
        Uruguay
      </MenuItem>
      <MenuItem value={"UZ"} key={"UZ"}>
        Uzbekistan
      </MenuItem>
      <MenuItem value={"VU"} key={"VU"}>
        Vanuatu
      </MenuItem>
      <MenuItem value={"VA"} key={"VA"}>
        Vatican City
      </MenuItem>
      <MenuItem value={"VE"} key={"VE"}>
        Venezuela
      </MenuItem>
      <MenuItem value={"VN"} key={"VN"}>
        Vietnam
      </MenuItem>
      <MenuItem value={"WF"} key={"WF"}>
        Wallis and Futuna
      </MenuItem>
      <MenuItem value={"EH"} key={"EH"}>
        Western Sahara
      </MenuItem>
      <MenuItem value={"YE"} key={"YE"}>
        Yemen
      </MenuItem>
      <MenuItem value={"ZM"} key={"ZM"}>
        Zambia
      </MenuItem>
      <MenuItem value={"ZW"} key={"ZW"}>
        Zimbabwe
      </MenuItem>
    </Select>
  )
}

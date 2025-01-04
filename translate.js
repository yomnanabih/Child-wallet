const translations = {
    en: {
        home:"Home",
        media:"Media",
        community:"community",
        shopping:"Shopping",
        career:"Career",
        dashboard:"Dashboard",
        advisor:"Advisor",
        english:"En",
        arabic:"Ar",
    },
    ar: {
        home:"الصفحة الرئيسية",
        media:"الفديوهات",
        community:"الدردشات",
        shopping:"التسوق",
        career:"التعلم",
        dashboard:"لوحة التحكم",
        advisor:"تسجيل الوالد",
        english:"الانجليزية",
        arabic:"العربية",
    },
};
const languageSelector = document. querySelector ("select");

languageSelector.addEventListener ("change", (event) => {
    setLanquage( event.target.value);
});

const setLanquage = (lanquage) => {
    const elements = document.querySelectorAll ("[data-translation]");
    elements.forEach((element) => {
    const translationkey = element.getAttribute("data-translation");
    element.textContent = translations [lanquage] [translationkey];
});
    document.dir = lanquage === "ar" ? "rtl" : "ltr";
};
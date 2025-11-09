const setLanguage = (lang) => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';

    document.getElementById('lang-ar-btn').classList.toggle('active', lang === 'ar');
    document.getElementById('lang-en-btn').classList.toggle('active', lang === 'en');
    
    const arTitle = "أشتراكاتي | منتجات رقمية";
    const enTitle = "Shtrakaty | Digital Products";
    document.title = lang === 'ar' ? arTitle : enTitle;
};

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('ar');
});

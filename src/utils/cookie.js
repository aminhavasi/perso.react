import Cookie from 'universal-cookie';
const cookie = new Cookie();
const getCookie = () => {
    let lang = cookie.get('lan');
    if (lang === 'en') return 'en';
    else return 'fa';
};

export { getCookie };

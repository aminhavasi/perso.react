import persian from './../i18n/persian.json';
import english from './../i18n/english.json';
const langu = (lan) => {
    if (lan === 'en') {
        return english;
    } else {
        return persian;
    }
};

export { langu };

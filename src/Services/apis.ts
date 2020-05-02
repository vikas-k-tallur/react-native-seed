const { NovelCovid } = require('novelcovid')
const covid = new NovelCovid();

export const getSummary= () => {
    return covid.all();
}

export const getByCountry= () => {
    return covid.countries(null,{sort: 'cases'});
}
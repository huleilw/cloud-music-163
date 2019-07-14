const BASIC_URL = 'http://localhost:3000'

export const search = BASIC_URL + '/search'
export const searchHot = BASIC_URL + '/search/hot'
export const bannerImag = num => BASIC_URL + `/banner/?type=${num}`
export const ralateMusic = value => BASIC_URL +`/search/multimatch?keywords= ${value}`
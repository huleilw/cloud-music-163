import { BASIC_URL} from './base-api'

export const search = BASIC_URL + '/search'
export const searchHot = BASIC_URL + '/search/hot'
export const bannerImag = num => BASIC_URL + `/banner/?type=${num}`
export const relateMusic = value => BASIC_URL +`/search/multimatch?keywords= ${value}`
export const recommendMusic = BASIC_URL + '/personalized'
export const playlistDetail = songSheetId => BASIC_URL + `/playlist/detail?id=${songSheetId}`
export const songUrl = songId => BASIC_URL +`/song/url?id=${songId}`
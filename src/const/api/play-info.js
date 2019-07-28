
import { BASIC_URL } from './base-api'
export const playlistDetail = songSheetId => BASIC_URL + `/playlist/detail?id=${songSheetId}`
export const songUrl = songId => BASIC_URL + `/song/url?id=${songId}`
export const lyric = songId => BASIC_URL + `/lyric?id=${songId}`
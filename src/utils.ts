import { Visibility, Weather } from './enums'
import { NewDiaryEntry } from './types'

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }

  return commentFromRequest
}

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const parseDate = (dateFromRquest: any): string => {
  if (!isString(dateFromRquest) || !isDate(dateFromRquest)) {
    throw new Error('Incorrect date or missing date')
  }

  return dateFromRquest
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }

  return weatherFromRequest
}

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) || !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }

  return visibilityFromRequest
}

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    visibility: parseVisibility(object.visibility),
    weather: parseWeather(object.weather)
  }

  return newEntry
}

export default toNewDiaryEntry

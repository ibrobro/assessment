import US_STATES from "../data/us-states";
import {
  EMAIL_REGEX,
  US_ZIP_REGEX,
} from '../data/reg-constants';

/**
 * Validate Email String
 * @param email 
 * @returns 
 */
export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};


/**
 * Validate US Zip Code
 * @param zipCode 
 * @returns 
 */
export const validateUsZipCode = (zipCode: string) => {
  return US_ZIP_REGEX.test(zipCode);
}


/**
 * Validate State
 * @param stateCode
 * @returns 
 */
 export const validateStateCode = (stateCode: string) => {
  return stateCode in US_STATES;
}

/**
 * Validate MUST NOT BE EMPTY
 * @param text
 * @returns 
 */
 export const isEmpty = (text: string) => {
  return text?.trim() === '';
}
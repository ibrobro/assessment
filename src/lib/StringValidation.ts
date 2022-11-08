/**
 * Validate Email String
 * @param email 
 * @returns 
 */
export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


/**
 * Validate US Zip Code
 * @param zipCode 
 * @returns 
 */
export const validateUsZipCode = (zipCode: string) => {
  return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode);
}
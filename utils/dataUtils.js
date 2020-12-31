// converts unformated ISO Date format into readable string
export const convertStringToReadableDateTime = (unformatedDate) => {
  // YYYY-MM-DDTHH:MM:SSZ

  let formatedISO = "";

  let fullUTCDateString = "";

  let simpleDateString = ""

  // ISO format RegEx
  const isoDateRegEx = /^[0-9]*[tT][0-9]*[zZ]$/gmi;

  if (isoDateRegEx.test(unformatedDate)) {
    formatedISO =
      unformatedDate.slice(0, 4) +
      "-" +
      unformatedDate.slice(4, 6) +
      "-" +
      unformatedDate.slice(6, 8) +
      "T" +
      unformatedDate.slice(9, 11) +
      ":" +
      unformatedDate.slice(11, 13) +
      ":" +
      unformatedDate.slice(9, 11) +
      "Z";

    //console.log("ISO: " + formatedISO);

    const sdate = new Date(formatedISO);

    //console.log("Date: " + sdate.toUTCString());

    fullUTCDateString = sdate.toUTCString();

    simpleDateString = sdate.toDateString();
  }

  // VALUE=DATE:20200817
  const valueDateRegEx = /^Value=Date:([0-9]+)*$/gmi;
  const dateRegEx = /[0-9]+/gmi

  if (valueDateRegEx.test(unformatedDate)) {
    
    const valueDate = dateRegEx.exec(unformatedDate);

    console.log("Value Date: " + JSON.stringify(valueDate));

    simpleDateString = valueDate[0].slice(4,6).concat("/",valueDate[0].slice(7,9),"/",valueDate[0].slice(0,4));

    console.log("slice: " + valueDate.slice[4]);

    fullUTCDateString = simpleDateString;

    console.log("Value Date: " + simpleDateString);
  }

  return {
    fullUTCDateString,
    simpleDateString
  };
};

// extract email & mailToLink from string
export const extractEmailAndMailToLink = emailString => {

  let emailAddress = "";
  let mailToLink = "";
  const emailRegEx = /^mailto:[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;
  const emailAddressRegEx = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/gi;

  if (emailRegEx.test(emailString)) {
    emailAddress = emailAddressRegEx.exec(emailString);
    mailToLink = emailString;
  }

  // exact email match regex
  const emailAddressExactRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi;

  if (emailAddressExactRegEx.test(emailString)) {
    emailAddress = emailString;
    mailToLink = "mailto:" + emailAddress
  }

  return {
    emailAddress,
    mailToLink
  }
}

// replaces ampersand charracter code with symbol
export const replaceAmpersandWithSynbol = text => {
  return text.replace(/&amp;/g, "&");
}
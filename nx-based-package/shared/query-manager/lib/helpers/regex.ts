const EMAIL = /^([a-zA-Z0-9_\-.+]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z0-9]+)$/;
const PWD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*/._-])(?=.{10,})/;
const PHONE = /^[1-9][0-9]*$/;
const PHONE_LONG = /^\+?[1-9]\d{1,14}$/;
const PHONE_LONG_OR_DEFAULT = /^(?:\s*|[-+()\d ]{8,14})$/;

const ONLY_NUMBERS = /^[0-9]$/;
const ONLY_NUMBERS_EXTENDED = /^[0-9]*$/;
const ONLY_NUMBERS_DECIMALS = /^[0-9]+(\.[0-9]{1,18})?$/;

const NO_SPECIAL_CHARACTERS =
  /^[a-zA-Z0-9À-ÿ\u00f1\u00d1]+(s*[a-zA-Z0-9À-ÿ\u00f1\u00d1 '-]*)*[a-zA-Z0-9À-ÿ\u00f1\u00d1]*$/;
const ALPHANUMERIC_PERIOD_COMMA = /^[a-zA-Z0-9.,\s]*$/;
const ALPHANUMERIC = /^[a-zA-Z0-9]+$/;
const LOWERCASE = /^(?=.*[a-z])/;
const UPPERCASE = /^(?=.*[A-Z])/;
const NUMBERS = /^(?=.*[0-9])/;
const LENGTH_10 = /^(?=.{10,})/;
const LENGTH_4_NUMBERS = /^([0-9]{4})/;

const NUMBERS_WITH_OPTIONAL_DECIMAL = /^\d*\.?\d*$/;

const SPECIAL_CHARS = /^(?=.*[!@#$%^&*/._-])/;
const SPECIAL_CHARS_INSTITUTIONAL =
  /^(?=.*[()=+{}[\]';:",?><!`@#~$%^&*/\\._-])/;

const HASH_REGEX_64 = /^0x([A-Fa-f0-9]{64})$/;

export {
  EMAIL,
  PWD,
  PHONE,
  PHONE_LONG,
  PHONE_LONG_OR_DEFAULT,
  ONLY_NUMBERS,
  ONLY_NUMBERS_EXTENDED,
  ONLY_NUMBERS_DECIMALS,
  NO_SPECIAL_CHARACTERS,
  ALPHANUMERIC_PERIOD_COMMA,
  ALPHANUMERIC,
  LOWERCASE,
  UPPERCASE,
  NUMBERS,
  LENGTH_10,
  LENGTH_4_NUMBERS,
  SPECIAL_CHARS,
  SPECIAL_CHARS_INSTITUTIONAL,
  NUMBERS_WITH_OPTIONAL_DECIMAL,
  HASH_REGEX_64,
};

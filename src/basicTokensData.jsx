/**
 * @type {BasicToken[]}
 */
let basicTokens = [
  {
    name: "Santa Monica",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995"
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000"
  },
  {
    name: "Ocean Avenue",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003"
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997"
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/2998"
  }
];



export function getBasicTokens() {
  return basicTokens;
}

/**
 * @param {number} number
 * @returns {BasicToken}
 */
export function getBasicToken(number) {
  return basicTokens.find(basicToken => basicToken.number === number);
}

/**
 * @param {number} number
 * @returns {void}
 */
export function deleteBasicToken(number) {
  basicTokens = basicTokens.filter(basicToken => basicToken.number !== number);
}

/**
 * @typedef {{ name: string; number: number; amount: string; due: string }} Invoice
 */


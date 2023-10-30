/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { describe, expect, test } from "vitest";
import { AnyObject, EvalMessages } from "./types";
import * as fn from "./index";
import BigNumber from "bignumber.js";

const defaultChainDecimals = 9;
const address = "234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7";

describe("Tests suite - planckToUnit Function", () => {
  test("should correctly convert a BigNumber to units", () => {
    const inputValue = new BigNumber("10000000");
    const units = 6;
    const expectedOutput = new BigNumber("10.000000");
    const result = fn.planckToUnit(inputValue, units);
    expect(result).toEqual(expectedOutput);
  });

  test("should throw error when negative units", () => {
    const inputValue = new BigNumber("10000000");
    const units = -2;
    expect(() => fn.planckToUnit(inputValue, units)).toThrowError(
      "[BigNumber Error] Argument out of range: -2"
    );
  });
});

describe("Test suite - unitToPlanck Function", () => {
  test("should correctly convert a string to planck with positive units", () => {
    const val = "10";
    const units = 6;
    const expectedOutput = new BigNumber("10000000");
    const result = fn.unitToPlanck(val, units);
    expect(result).toEqual(expectedOutput);
  });

  test("should correctly convert a string to planck with zero units", () => {
    const val = "42";
    const units = 0;
    const expectedOutput = new BigNumber("42");
    const result = fn.unitToPlanck(val, units);
    expect(result).toEqual(expectedOutput);
  });

  test("should correctly convert a string to planck with negative units but return integer", () => {
    const val = "100000";
    const units = -6;
    const expectedOutput = new BigNumber("0");
    const result = fn.unitToPlanck(val, units);
    expect(result).toEqual(expectedOutput);
  });

  test("should return 0 for an empty string", () => {
    const val = "";
    const units = 8;
    const expectedOutput = new BigNumber("0");
    const result = fn.unitToPlanck(val, units);
    expect(result).toEqual(expectedOutput);
  });

  test("should return 0 for a non-numeric string", () => {
    const val = "invalid";
    const units = 4;
    const expectedOutput = new BigNumber("0");
    const result = fn.unitToPlanck(val, units);
    expect(result).toEqual(expectedOutput);
  });
});

describe("Tests suite - minDecimalPlaces Function", () => {
  test("should add trailing zeros to meet the minimum decimal places", () => {
    const val = "10.5";
    const minDecimals = 4;
    const expectedOutput = "10.5000";
    const result = fn.minDecimalPlaces(val, minDecimals);
    expect(result).toEqual(expectedOutput);
  });

  test("should not change the value if it already has more decimal places than the minimum", () => {
    const val = "8.123456789";
    const minDecimals = 5;
    const result = fn.minDecimalPlaces(val, minDecimals);
    expect(result).toEqual(val);
  });

  test("should add zeros if the input has no decimal part", () => {
    const val = "42";
    const minDecimals = 3;
    const expectedOutput = "42.000";
    const result = fn.minDecimalPlaces(val, minDecimals);
    expect(result).toEqual(expectedOutput);
  });

  test("should handle zero as the input", () => {
    const val = "0";
    const minDecimals = 2;
    const expectedOutput = "0.00";
    const result = fn.minDecimalPlaces(val, minDecimals);
    expect(result).toEqual(expectedOutput);
  });

  test("should handle negative input with trailing zeros", () => {
    const val = "-123.0000";
    const minDecimals = 4;
    const expectedOutput = "-123.0000";
    const result = fn.minDecimalPlaces(val, minDecimals);
    expect(result).toEqual(expectedOutput);
  });
});

describe("Tests suite - rmCommas Function", () => {
  test("should remove all commas from a string with commas", () => {
    const inputValue = "1,000,000";
    const expectedOutput = "1000000";
    const result = fn.rmCommas(inputValue);
    expect(result).toBe(expectedOutput);
  });

  test("should return the same string when there are no commas", () => {
    const inputValue = "12345";
    const expectedOutput = "12345";
    const result = fn.rmCommas(inputValue);
    expect(result).toBe(expectedOutput);
  });

  test("should return an empty string when the input is empty", () => {
    const inputValue = "";
    const expectedOutput = "";
    const result = fn.rmCommas(inputValue);
    expect(result).toBe(expectedOutput);
  });
});

describe("Tests suite - greaterThanZero Function", () => {
  test("should return true when the input is greater than 0", () => {
    const val = new BigNumber("10");
    const result = fn.greaterThanZero(val);
    expect(result).toBe(true);
  });

  test("should return false when the input is equal to 0", () => {
    const val = new BigNumber("0");
    const result = fn.greaterThanZero(val);
    expect(result).toBe(false);
  });

  test("should return false when the input is less than 0", () => {
    const val = new BigNumber("-5");
    const result = fn.greaterThanZero(val);
    expect(result).toBe(false);
  });

  test("should return true when the input is a large positive number", () => {
    const val = new BigNumber("999999999999999999999999999");
    const result = fn.greaterThanZero(val);
    expect(result).toBe(true);
  });

  test("should return false when the input is a large negative number", () => {
    const val = new BigNumber("-999999999999999999999999999");
    const result = fn.greaterThanZero(val);
    expect(result).toBe(false);
  });
});

describe("Tests suite - isNotZero Function", () => {
  test("should return true when the input is greater than 0", () => {
    const val = new BigNumber("10");
    const result = fn.isNotZero(val);
    expect(result).toBe(true);
  });

  test("should return false when the input is equal to 0", () => {
    const val = new BigNumber("0");
    const result = fn.isNotZero(val);
    expect(result).toBe(false);
  });

  test("should return true when the input is less than 0", () => {
    const val = new BigNumber("-5");
    const result = fn.isNotZero(val);
    expect(result).toBe(true);
  });

  test("should return true when the input is a large positive number", () => {
    const val = new BigNumber("999999999999999999999999999");
    const result = fn.isNotZero(val);
    expect(result).toBe(true);
  });

  test("should return true when the input is a large negative number", () => {
    const val = new BigNumber("-999999999999999999999999999");
    const result = fn.isNotZero(val);
    expect(result).toBe(true);
  });
});

describe("Test suite - shuffle Function", () => {
  test("should shuffle an array of numbers", () => {
    const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const shuffledArray = fn.shuffle([...inputArray]);
    expect(shuffledArray).not.toEqual(inputArray);
    expect(shuffledArray).toEqual(expect.arrayContaining(inputArray));
    expect(shuffledArray.length).toBe(inputArray.length);
  });

  test("should shuffle an array of strings", () => {
    const inputArray = [
      "apple",
      "banana",
      "cherry",
      "date",
      "fig",
      "1",
      "25",
      "13",
      "47",
      "05",
    ];
    const shuffledArray = fn.shuffle([...inputArray]);
    expect(shuffledArray).not.toStrictEqual(inputArray);
    expect(shuffledArray).toStrictEqual(expect.arrayContaining(inputArray));
    expect(shuffledArray.length).toBe(inputArray.length);
  });

  test("should shuffle an empty array", () => {
    const inputArray: number[] = [];
    const shuffledArray = fn.shuffle([...inputArray]);
    expect(shuffledArray).toEqual([]);
  });

  test("should shuffle an array with a single element", () => {
    const inputArray = [42];
    const shuffledArray = fn.shuffle([...inputArray]);
    expect(shuffledArray).toEqual(inputArray);
  });
});

describe("Tests suite - pageFromUri Function", () => {
  test("should extract the page from a pathname with a valid page name", () => {
    const pathname = "/products/detail";
    const fallback = "home";
    const result = fn.pageFromUri(pathname, fallback);
    expect(result).toBe("detail");
  });

  test("should extract the page from a pathname with a valid page name", () => {
    // attention on the extra space at the end of the pathname
    const pathname = "/products/detail ";
    const fallback = "home";
    const result = fn.pageFromUri(pathname, fallback);
    expect(result).toBe("detail");
  });

  test("should use the fallback when the pathname is empty", () => {
    const pathname = "";
    const fallback = "home";
    const result = fn.pageFromUri(pathname, fallback);
    expect(result).toBe(fallback);
  });

  test("should use the fallback when the pathname ends with a trailing slash", () => {
    const pathname = "/categories/";
    const fallback = "home";
    const result = fn.pageFromUri(pathname, fallback);
    expect(result).toBe(fallback);
  });

  test("should handle a pathname with spaces and return the page without spaces", () => {
    const pathname = "/about us";
    const fallback = "home";
    const result = fn.pageFromUri(pathname, fallback);
    expect(result).toBe("about us");
  });

  test("should handle a pathname with special characters and return the page as-is", () => {
    const pathname = "/products/detail#section";
    const fallback = "home";
    const result = fn.pageFromUri(pathname, fallback);
    expect(result).toBe("detail#section");
  });
});

describe("Tests suite - capitalizeFirstLetter Function", () => {
  test("should capitalize the first letter of a lowercase string", () => {
    const input = "hello";
    const result = fn.capitalizeFirstLetter(input);
    expect(result).toBe("Hello");
  });

  test("should not change the string if the first letter is already capitalized", () => {
    const input = "World";
    const result = fn.capitalizeFirstLetter(input);
    expect(result).toBe("World");
  });

  test("should handle empty strings", () => {
    const input = "";
    const result = fn.capitalizeFirstLetter(input);
    expect(result).toBe("");
  });

  test("should handle strings with only one character", () => {
    const input = "a";
    const result = fn.capitalizeFirstLetter(input);
    expect(result).toBe("A");
  });

  test("should handle strings with special characters", () => {
    const input = "@test";
    const result = fn.capitalizeFirstLetter(input);
    expect(result).toBe("@test");
  });
});

describe("Tests suite - camelize Function", () => {
  test("should camelize a basic string", () => {
    const input = "hello_world";
    const result = fn.camelize(input);
    expect(result).toBe("helloWorld");
  });

  test("should camelize a string with spaces", () => {
    const input = "hello world";
    const result = fn.camelize(input);
    expect(result).toBe("helloWorld");
  });

  test("should camelize a string with mixed case", () => {
    const input = "HeLLo WoRLD";
    const result = fn.camelize(input);

    // This is due to the fact that Capital letters identify as
    // "beginning of a word"
    expect(result).toBe("heLLoWoRld");
  });

  test("should camelize an empty string", () => {
    const input = "";
    const result = fn.camelize(input);
    expect(result).toBe("");
  });

  test("should camelize a single-word string", () => {
    const input = "camelCase";
    const result = fn.camelize(input);
    expect(result).toBe("camelCase");
  });

  test("should camelize a string with leading whitespace", () => {
    const input = "   leadingWhitespace";
    const result = fn.camelize(input);
    expect(result).toBe("leadingWhitespace");
  });

  test("should camelize a string with trailing whitespace", () => {
    const input = "trailingWhitespace   ";
    const result = fn.camelize(input);
    expect(result).toBe("trailingWhitespace");
  });

  test("should camelize a string with multiple spaces", () => {
    const input = "   multiple   spaces   ";
    const result = fn.camelize(input);
    expect(result).toBe("multipleSpaces");
  });
});

describe("Test suite - sortWithNull Function", () => {
  test("should sort an array of numbers in ascending order with nulls last", () => {
    const ascendingSort = fn.sortWithNull(true);
    const inputArray = [null, 3, 1, null, 2, 4];
    const sortedArray = inputArray.sort(ascendingSort);
    expect(sortedArray).toEqual([1, 2, 3, 4, null, null]);
  });

  test("should sort an array of strings in descending order with nulls first", () => {
    const descendingSort = fn.sortWithNull(false);
    const inputArray = ["apple", null, "banana", "cherry", null, "date"];
    const sortedArray = inputArray.sort(descendingSort);
    expect(sortedArray).toEqual([
      "date",
      "cherry",
      "banana",
      "apple",
      null,
      null,
    ]);
  });

  test("should not modify an already sorted array", () => {
    const ascendingSort = fn.sortWithNull(true);
    const inputArray = [1, 2, 3, null, null, 4];
    const sortedArray = inputArray.sort(ascendingSort);
    expect(sortedArray).toEqual([1, 2, 3, 4, null, null]);
  });

  test("should sort an array with only null values", () => {
    const ascendingSort = fn.sortWithNull(true);
    const inputArray = [null, null, null];
    const sortedArray = inputArray.sort(ascendingSort);
    expect(sortedArray).toEqual([null, null, null]);
  });

  test("should handle an empty array", () => {
    const ascendingSort = fn.sortWithNull(true);
    const inputArray: AnyObject[] = [];
    const sortedArray = inputArray.sort(ascendingSort);
    expect(sortedArray).toEqual([]);
  });
});

describe("Test suite - addedTo Function", () => {
  test("should return an empty array when any input is not an object", () => {
    const fresh: AnyObject = "notAnObject";
    const stale: AnyObject = { name: "John" };
    const keys: AnyObject = ["name"];
    const result = fn.addedTo(fresh, stale, keys);
    expect(result).toEqual([]);
  });

  test("should return an empty array when keys array is empty", () => {
    const fresh: AnyObject = { name: "Alice" };
    const stale: AnyObject = { name: "Bob" };
    const keys: string[] = [];
    const result = fn.addedTo(fresh, stale, keys);
    expect(result).toEqual([]);
  });

  test("should return added items in the fresh array", () => {
    const fresh = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Eve" },
    ];
    const stale = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const keys = ["id"];
    const result = fn.addedTo(fresh, stale, keys);
    expect(result).toEqual([{ id: 3, name: "Eve" }]);
  });

  test("should handle keys that are not present in some items", () => {
    const fresh = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { name: "Eve" },
    ];
    const stale = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const keys = ["id"];
    const result = fn.addedTo(fresh, stale, keys);
    expect(result).toEqual([{ name: "Eve" }]);
  });

  test("should handle empty input arrays", () => {
    const fresh: AnyObject[] = [];
    const stale: AnyObject[] = [];
    const keys = ["id"];
    const result = fn.addedTo(fresh, stale, keys);
    expect(result).toEqual([]);
  });
});

describe("Test suite - removedFrom Function", () => {
  test("should return an empty array when any input is not an object", () => {
    const fresh: AnyObject = "notAnObject";
    const stale: AnyObject = [{ name: "John" }];
    const keys: AnyObject = ["name"];
    const result = fn.removedFrom(fresh, stale, keys);
    expect(result).toEqual([]);
  });

  test("should return an empty array when keys array is empty", () => {
    const fresh = [{ name: "Alice" }];
    const stale = [{ name: "Bob" }];
    const keys: string[] = [];
    const result = fn.removedFrom(fresh, stale, keys);
    expect(result).toEqual([]);
  });

  test("should return removed items in the stale array", () => {
    const fresh = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const stale = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Eve" },
    ];
    const keys = ["id"];
    const result = fn.removedFrom(fresh, stale, keys);
    expect(result).toEqual([{ id: 3, name: "Eve" }]);
  });

  test("should handle keys that are not present in some items", () => {
    const fresh = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const stale = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { name: "Eve" },
    ];
    const keys = ["id"];
    const result = fn.removedFrom(fresh, stale, keys);
    expect(result).toEqual([{ name: "Eve" }]);
  });

  test("should handle empty input arrays", () => {
    const fresh: AnyObject[] = [];
    const stale: AnyObject[] = [];
    const keys = ["id"];
    const result = fn.removedFrom(fresh, stale, keys);
    expect(result).toEqual([]);
  });
});

describe("Test suite - matchedProperties Function", () => {
  test("should return an empty array when any input is not an object", () => {
    const objX: AnyObject = "notAnObject";
    const objY: AnyObject = [{ name: "John" }];
    const keys: string[] = ["name"];
    const result = fn.matchedProperties(objX, objY, keys);
    expect(result).toEqual([]);
  });

  test("should return an empty array when keys array is empty", () => {
    const objX: AnyObject = [{ name: "Alice" }];
    const objY: AnyObject = [{ name: "Bob" }];
    const keys: string[] = [];
    const result = fn.matchedProperties(objX, objY, keys);
    expect(result).toEqual([]);
  });

  test("should return matched properties from objY", () => {
    const objX = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const objY = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { id: 3, name: "Eve" },
    ];
    const keys = ["id"];
    const result = fn.matchedProperties(objX, objY, keys);
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });

  test("should handle keys that are not present in some objects", () => {
    const objX = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    const objY = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
      { name: "Eve" },
    ];
    const keys = ["id"];
    const result = fn.matchedProperties(objX, objY, keys);
    expect(result).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });

  test("should handle empty input arrays", () => {
    const objX: AnyObject[] = [];
    const objY: AnyObject[] = [];
    const keys = ["id"];
    const result = fn.matchedProperties(objX, objY, keys);
    expect(result).toEqual([]);
  });
});

describe("Test suite - isValidHttpUrl Function", () => {
  test("should return true for a valid HTTP URL", () => {
    const url = "http://www.example.com";
    const result = fn.isValidHttpUrl(url);
    expect(result).toBe(true);
  });

  test("should return true for a valid HTTPS URL", () => {
    const url = "https://www.example.com";
    const result = fn.isValidHttpUrl(url);
    expect(result).toBe(true);
  });

  test("should return false for an invalid URL", () => {
    const url = "invalid-url";
    const result = fn.isValidHttpUrl(url);
    expect(result).toBe(false);
  });

  test("should return false for a non-HTTP/HTTPS protocol", () => {
    const url = "ftp://www.example.com";
    const result = fn.isValidHttpUrl(url);
    expect(result).toBe(false);
  });

  test("should return false for an empty string", () => {
    const url = "";
    const result = fn.isValidHttpUrl(url);
    expect(result).toBe(false);
  });

  test("should return false for a URL without a protocol", () => {
    const url = "www.example.com";
    const result = fn.isValidHttpUrl(url);
    expect(result).toBe(false);
  });
});

describe("Test suite - makeCancelable Function", () => {
  test("should resolve with the expected value when not canceled", async () => {
    const expectedValue = { result: "success" };
    const promise = new Promise((resolve) =>
      setTimeout(() => resolve(expectedValue), 100)
    );
    const cancelablePromise = fn.makeCancelable(promise);
    const result = await cancelablePromise.promise;
    expect(result).toEqual(expectedValue);
  });

  test('should reject with an "Cancelled" error when canceled', async () => {
    const promise = new Promise<void>((resolve) =>
      setTimeout(() => resolve(), 100)
    );
    const cancelablePromise = fn.makeCancelable(promise);

    cancelablePromise.cancel();

    try {
      await cancelablePromise.promise;
    } catch (error) {
      expect(error.message).toBe("Cancelled");
    }
  });
});

describe("Tests suite - ellipsisFn Function", () => {
  test("Should return an address with 4 digits and default ellipsis (start) ", () => {
    const result = fn.ellipsisFn(address, 4, "start");
    expect(result).toBe("...ZmY7");
  });

  test("Should return an address with 4 digits and 'end' ellipsis", () => {
    const result = fn.ellipsisFn(address, 4, "end");
    expect(result).toBe("234C...");
  });

  test("Should return an address with 4 digits and ellipsis 'center'", () => {
    const result = fn.ellipsisFn(address, 4);
    expect(result).toBe("234C...ZmY7");
  });

  test("Should return an address with 10 digits and ellipsis 'center'", () => {
    const result = fn.ellipsisFn(address, 10);
    expect(result).toBe("234CHvWmTu...oFaetEZmY7");
  });

  test("Should return an address with minimum default of 4 digits and ellipsis 'center' when the amount given is too small (2)", () => {
    const result = fn.ellipsisFn(address, 2);
    expect(result).toBe("234C...ZmY7");
  });

  test("Should return an address with minimum default of 4 digits and ellipsis 'center' when the amount given is too large (string.length / 2 - 3)", () => {
    const result = fn.ellipsisFn(address, 100);
    expect(result).toBe("234CHvWmTuaVtkJpLS9ox...amcEMrfFAPYoFaetEZmY7");
  });

  test("Should return a string with given amount of digits (here 8), starting with ellipsis when the amount is more than the default(4) and less than the length of the string", () => {
    const result = fn.ellipsisFn("Some random value", 8, "start");
    expect(result).toBe("...dom value");
  });

  test("Should return a string with given amount of digits (here 8), starting with ellipsis when the amount is more than the default(4) and less than the length of the string", () => {
    const result = fn.ellipsisFn("Some random value", 8, "end");
    expect(result).toBe("Some ran...");
  });
});

describe("Tests suite - evalUnits Function", () => {
  // Happy paths
  test("Should input string", () => {
    const [actualResult, msg] = fn.evalUnits("666", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("666000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input, float (dot for decimal symbol)", () => {
    const [actualResult, msg] = fn.evalUnits("1.23", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1230000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input, float (comma for decimal symbol)", () => {
    const [actualResult, msg] = fn.evalUnits("1,23", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1230000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an expression (1k)", () => {
    const [actualResult, msg] = fn.evalUnits("1k", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1000000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with dot as dec separator (1.2k)", () => {
    const [actualResult, msg] = fn.evalUnits("1.2k", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1200000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with comma as dec separator (1,2k)", () => {
    const [actualResult, msg] = fn.evalUnits("1,2k", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1200000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with mili symbol (1.2m)", () => {
    const [actualResult, msg] = fn.evalUnits("1.2m", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1200000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with mili symbol (0.002μ)", () => {
    const [actualResult, msg] = fn.evalUnits("0.002μ", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("2");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with mili symbol (13000000f)", () => {
    const [actualResult, msg] = fn.evalUnits("13000000f", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("13");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  // Not so happy paths
  test("Should accept as input something gibberish (good23) and return error message", () => {
    const [actualValue, msg] = fn.evalUnits("good23", defaultChainDecimals);
    expect(actualValue).toBeFalsy;
    expect(msg).toBe(EvalMessages.GIBBERISH);
  });

  test("Should accept as input double decimal symbols (1,23.445k) and return error message", () => {
    const [actualValue, msg] = fn.evalUnits("1,23.445k", defaultChainDecimals);
    expect(actualValue).toBeFalsy;
    expect(msg).toBe(EvalMessages.GIBBERISH);
  });
});

describe("Tests suite - transformToBaseUnit Function", () => {
  test("Should accept a fee (275002583), chain has 9 decimals", () => {
    const result = fn.transformToBaseUnit("275002583", 9);
    expect(result).toBe("0.275002583");
  });

  test("Should accept a fee (275002583), chain has 20 decimals", () => {
    const result = fn.transformToBaseUnit("275002583", 20);
    expect(result).toBe("0.0000000000275002583");
  });

  test("Should accept a very small fee (23), chain has 9 decimals", () => {
    const result = fn.transformToBaseUnit("23", 9);
    expect(result).toBe("0.00000023");
  });

  test("Should accept a very small fee (23), chain has 18 decimals", () => {
    const result = fn.transformToBaseUnit("23", 18);
    expect(result).toBe("0.00000000000000023");
  });

  test("Should accept a fee (20000000000), chain has 18 decimals (aka ETH example)", () => {
    const result = fn.transformToBaseUnit((20 * 10 ** 7).toString(), 18);
    expect(result).toBe("0.000000002");
  });

  test("Should accept a huge fee (2350000000), chain has 9 decimals", () => {
    const result = fn.transformToBaseUnit((235 * 10 ** 7).toString(), 9);
    expect(result).toBe("2.35");
  });

  test("Should has 0 fee and return 0", () => {
    const result = fn.transformToBaseUnit("0", 9);
    expect(result).toBe("0");
  });

  test("Should has 0.0000 fee and return 0", () => {
    const result = fn.transformToBaseUnit("0.0000", 20);
    expect(result).toBe("0");
  });
});

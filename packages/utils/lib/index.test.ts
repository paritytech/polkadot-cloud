import { describe, expect, test } from "vitest";
import { EvalMessages } from "./types";
import { evalUnits, transformToBaseUnit, ellipsisFn } from "./index";

const defaultChainDecimals = 9;
const address = "234CHvWmTuaVtkJpLS9oxuhFd3HamcEMrfFAPYoFaetEZmY7";

describe("Tests suite - ellipsisFn", () => {
  test("Should return an address with 4 digits and default ellipsis (left) ", () => {
    const result = ellipsisFn(address);
    expect(result).toBe("...tEZmY7");
  });

  test("Should return an address with 4 digits and right ellipsis", () => {
    const result = ellipsisFn(address, 4, "right");
    expect(result).toBe("234C...");
  });

  test("Should return an address with 4 digits and ellipsis center", () => {
    const result = ellipsisFn(address, 4, "center");
    expect(result).toBe("234C...ZmY7");
  });

  test("Should return an address with 10 digits and ellipsis center", () => {
    const result = ellipsisFn(address, 10, "center");
    expect(result).toBe("234CHvWmTu...oFaetEZmY7");
  });

  test("Should return an address with minimum default of 4 digits and ellipsis center when the amount given is too small (2)", () => {
    const result = ellipsisFn(address, 2, "center");
    expect(result).toBe("234C...ZmY7");
  });

  test("Should return an address with minimum default of 4 digits and ellipsis center when the amount given is too large (string.length / 2 - 3)", () => {
    const result = ellipsisFn(address, 100, "center");
    expect(result).toBe("234CHvWmTuaVtkJpLS9ox...amcEMrfFAPYoFaetEZmY7");
  });
});

describe("Tests suite - evalUnits", () => {
  // Happy paths
  test("Should input string", () => {
    const [actualResult, msg] = evalUnits("666", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("666000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input, float (dot for decimal symbol)", () => {
    const [actualResult, msg] = evalUnits("1.23", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1230000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input, float (comma for decimal symbol)", () => {
    const [actualResult, msg] = evalUnits("1,23", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1230000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an expression (1k)", () => {
    const [actualResult, msg] = evalUnits("1k", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1000000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with dot as dec separator (1.2k)", () => {
    const [actualResult, msg] = evalUnits("1.2k", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1200000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with comma as dec separator (1,2k)", () => {
    const [actualResult, msg] = evalUnits("1,2k", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1200000000000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with mili symbol (1.2m)", () => {
    const [actualResult, msg] = evalUnits("1.2m", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("1200000");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with mili symbol (0.002μ)", () => {
    const [actualResult, msg] = evalUnits("0.002μ", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("2");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  test("Should accept as input an float expression with mili symbol (13000000f)", () => {
    const [actualResult, msg] = evalUnits("13000000f", defaultChainDecimals);
    expect(actualResult?.toString()).toBe("13");
    expect(msg).toBe(EvalMessages.SUCCESS);
  });

  // Not so happy paths
  test("Should accept as input something gibberish (good23) and return error message", () => {
    const [actualValue, msg] = evalUnits("good23", defaultChainDecimals);
    expect(actualValue).toBeFalsy;
    expect(msg).toBe(EvalMessages.GIBBERISH);
  });

  test("Should accept as input double decimal symbols (1,23.445k) and return error message", () => {
    const [actualValue, msg] = evalUnits("1,23.445k", defaultChainDecimals);
    expect(actualValue).toBeFalsy;
    expect(msg).toBe(EvalMessages.GIBBERISH);
  });
});

describe("Tests suite - transformToBaseUnit", () => {
  test("Should accept a fee (275002583), chain has 9 decimals", () => {
    const result = transformToBaseUnit("275002583", 9);
    expect(result).toBe("0.275002583");
  });

  test("Should accept a fee (275002583), chain has 20 decimals", () => {
    const result = transformToBaseUnit("275002583", 20);
    expect(result).toBe("0.0000000000275002583");
  });

  test("Should accept a very small fee (23), chain has 9 decimals", () => {
    const result = transformToBaseUnit("23", 9);
    expect(result).toBe("0.00000023");
  });

  test("Should accept a very small fee (23), chain has 18 decimals", () => {
    const result = transformToBaseUnit("23", 18);
    expect(result).toBe("0.00000000000000023");
  });

  test("Should accept a fee (20000000000), chain has 18 decimals (aka ETH example)", () => {
    const result = transformToBaseUnit((20 * 10 ** 7).toString(), 18);
    expect(result).toBe("0.000000002");
  });

  test("Should accept a huge fee (2350000000), chain has 9 decimals", () => {
    const result = transformToBaseUnit((235 * 10 ** 7).toString(), 9);
    expect(result).toBe("2.35");
  });

  test("Should has 0 fee and return 0", () => {
    const result = transformToBaseUnit("0", 9);
    expect(result).toBe("0");
  });

  test("Should has 0.0000 fee and return 0", () => {
    const result = transformToBaseUnit("0.0000", 20);
    expect(result).toBe("0");
  });
});

import { decodeAddress, blake2AsU8a } from "@polkadot/util-crypto";

/*
  A generic identity icon, taken from
  https://github.com/polkadot-js/ui/tree/master/packages/react-identicon
*/

export type ChainName = "polkadot" | "kusama" | "westend" | "generic";

export interface Circle {
  cx: number;
  cy: number;
  fill: string;
  r: number;
}

const SIZE = 64;
const C = SIZE / 2;
export const Z = (SIZE / 64) * 5;

export const outerCircle = (fill: string): Circle => ({
  cx: C,
  cy: C,
  fill,
  r: C,
});

export const renderCircle = ({ cx, cy, fill, r }: Circle, key: number) => {
  return <circle cx={cx} cy={cy} fill={fill} key={key} r={r} />;
};

const getRotation = (
  ch: ChainName
): {
  r: number;
  ro2: number;
  r3o4: number;
  ro4: number;
  rroot3o2: number;
  rroot3o4: number;
} => {
  let param_r: number;
  let param_rroot3o2: number;
  let param_ro2: number;
  let param_rroot3o4: number;
  let param_ro4: number;
  let param_r3o4: number;
  switch (ch) {
    case "generic":
    case "kusama":
    case "westend":
    default:
      param_r = 3;
      param_rroot3o2 = 2;
      param_ro2 = 2;
      param_rroot3o4 = 4;
      param_ro4 = 4;
      param_r3o4 = 4;
      break;
  }
  const r = (C / 4) * param_r;
  const rroot3o2 = (r * Math.sqrt(3)) / param_rroot3o2;
  const ro2 = r / param_ro2;
  const rroot3o4 = (r * Math.sqrt(3)) / param_rroot3o4;
  const ro4 = r / param_ro4;
  const r3o4 = (r * 3) / param_r3o4;

  return { r, r3o4, ro2, ro4, rroot3o2, rroot3o4 };
};

export const getCircleXY = (ch: ChainName): [number, number][] => {
  const { r, r3o4, ro2, ro4, rroot3o2, rroot3o4 } = getRotation(ch);

  return [
    [C, C - r],
    [C, C - ro2],
    [C - rroot3o4, C - r3o4],
    [C - rroot3o2, C - ro2],
    [C - rroot3o4, C - ro4],
    [C - rroot3o2, C],
    [C - rroot3o2, C + ro2],
    [C - rroot3o4, C + ro4],
    [C - rroot3o4, C + r3o4],
    [C, C + r],
    [C, C + ro2],
    [C + rroot3o4, C + r3o4],
    [C + rroot3o2, C + ro2],
    [C + rroot3o4, C + ro4],
    [C + rroot3o2, C],
    [C + rroot3o2, C - ro2],
    [C + rroot3o4, C - ro4],
    [C + rroot3o4, C - r3o4],
    [C, C],
  ];
};

/*
  A generic identity icon, taken from
  https://github.com/polkadot-js/ui/tree/master/packages/react-identicon
*/

interface Scheme {
  freq: number;
  colors: number[];
}

/*
    A generic identity icon, taken from
    https://github.com/polkadot-js/ui/tree/master/packages/react-identicon
  */

export const SCHEMA: { [index: string]: Scheme } = {
  target: {
    colors: [0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 0, 28, 0, 1],
    freq: 1,
  },
  cube: {
    colors: [0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 0, 1, 3, 2, 4, 3, 5],
    freq: 20,
  },
  quazar: {
    colors: [1, 2, 3, 1, 2, 4, 5, 5, 4, 1, 2, 3, 1, 2, 4, 5, 5, 4, 0],
    freq: 16,
  },
  flower: {
    colors: [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 3],
    freq: 32,
  },
  cyclic: {
    colors: [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 6],
    freq: 32,
  },
  vmirror: {
    colors: [0, 1, 2, 3, 4, 5, 3, 4, 2, 0, 1, 6, 7, 8, 9, 7, 8, 6, 10],
    freq: 128,
  },
  hmirror: {
    colors: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 8, 6, 7, 5, 3, 4, 2, 11],
    freq: 128,
  },
};

export const findScheme = (d: number): Scheme => {
  let out = 0;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const schema = Object.values(SCHEMA).find((schema): boolean => {
    out += schema.freq;

    return d < out;
  });

  if (!schema) {
    throw new Error("Unable to find a valid schema.");
  }

  return schema;
};

let zeroHash: Uint8Array = new Uint8Array();

const addressToId = (address: string): Uint8Array => {
  if (!zeroHash.length) {
    zeroHash = blake2AsU8a(new Uint8Array(32));
  }
  const pubKey = decodeAddress(address || "").toString();
  return blake2AsU8a(pubKey).map(
    (x: number, i: string | number) => (x + 256 - zeroHash[i]) % 256
  );
};

export const getColors = (address: string): string[] => {
  const total = Object.values(SCHEMA)
    .map((s): number => s.freq)
    .reduce((a, b): number => a + b);
  const id = addressToId(address);
  const d = Math.floor((id[30] + id[31] * 256) % total);
  const rot = (id[28] % 6) * 3;
  const sat = (Math.floor((id[29] * 70) / 256 + 26) % 80) + 30;
  const scheme = findScheme(d);
  const palette = Array.from(id).map((x, i): string => {
    const b = (x + (i % 28) * 58) % 256;

    if (b === 0) {
      return "#444";
    } else if (b === 255) {
      return "transparent";
    }

    const h = Math.floor(((b % 64) * 360) / 64);
    const l = [53, 15, 35, 75][Math.floor(b / 64)];

    return `hsl(${h}, ${sat}%, ${l}%)`;
  });

  return scheme.colors.map(
    (_, i): string => palette[scheme.colors[i < 18 ? (i + rot) % 18 : 18]]
  );
};

// TODO: explore this new approach
// export const getColorsCheck = (address: string): string[] => {
//     const total = Object.values(SCHEMA)
//       .map((s): number => s.freq)
//       .reduce((a, b): number => a + b);
//     const id = addressToId(address);
//     const d = Math.floor((id[30] + id[31] * 256) % total);
//     const rot = (id[28] % 6) * 3;
//     const sat = Math.floor((id[29] * 70) / 256 + 26) % 80;
//     const alignedSat = sat < 40 ? sat + 50 : sat < 70 ? sat + 30 : sat;
//     const scheme = findScheme(d);
//     const palette = Array.from(id).map((x, i): string => {
//       const b = (x + (i % 28) * 58) % 256;

//       if (b === 0) {
//         return "#444";
//       } else if (b === 255) {
//         return "transparent";
//       }

//       const h = Math.floor(((b % 64) * 360) / 64);
//       const l = [40, 45, 50, 55][Math.floor(b / 64)];

//       return `hsl(${h}, ${alignedSat}%, ${l}%)`;
//     });

//     return scheme.colors.map(
//       (_, i): string => palette[scheme.colors[i < 18 ? (i + rot) % 18 : 18]]
//     );
//   };

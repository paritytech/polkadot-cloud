// DOTS function
export const drawDots = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  fcount?: number
) => {
  for (let j = 0; j < 10; j++) {
    for (let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(
        (x / 1) * (i + 0.5),
        (y / 1) * (j + 0.5),
        !fcount ? x / 0.7 / PI : 25 * Math.sin(fcount * 0.01) ** 2,
        0,
        2 * PI,
        false
      );
      ctx.lineWidth = 1;
      ctx.fillStyle =
        "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7);
      ctx.fill();
      ctx.stroke();
    }
  }
};

// HEXAGON functions
const { PI } = Math;
const P2 = (x?: number, y?: number) => ({ x, y });
const EDGES = 6;
const RADIUS = 18;
const TAU = 2 * PI;
const EDGE_LEN = Math.sin(PI / EDGES) * RADIUS * 2;
const GRID_Y_SPACE = Math.cos(PI / EDGES) * RADIUS * 2.3;
const GRID_X_SPACE = RADIUS * 2.3 - EDGE_LEN * 0.5;
const GRID_Y_OFFSET = GRID_Y_SPACE * 0.5;

const drawPoly = (
  p: { x: number; y: number },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  points: string | any[],
  ctx: CanvasRenderingContext2D
) => {
  // p.x, p.y is center
  ctx.setTransform(1, 0, 0, 1, p.x, p.y);
  let i = 0;
  ctx.beginPath();
  while (i < points.length) {
    const p2 = points[i++];
    ctx.lineTo(p2.x, p2.y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
};

export const createPoly = (sides: number) => {
  const points = [];
  const step = TAU / sides;
  let ang = 0;
  let i = sides;
  while (i--) {
    points.push(P2(RADIUS * Math.cos(ang), RADIUS * Math.sin(ang)));
    ang += step;
  }
  return points;
};

export const drawHex = (
  x: number,
  y: number,
  s: number,
  ctx: CanvasRenderingContext2D
) => {
  const points = createPoly(6);
  let gy: number;
  let gx: number;
  for (gy = y; gy < y + s; gy++) {
    for (gx = x; gx < x + s; gx++) {
      ctx.fillStyle = generateColor();
      const pRes = {
        x: gx * GRID_X_SPACE * 1.1,
        y: gy * GRID_Y_SPACE * 1.1 + (gx % 2 ? GRID_Y_OFFSET : 0),
      };
      drawPoly(pRes, points, ctx);
    }
  }
};

// ANIMATED functions
export const generateColor = () => {
  const hexSet = "0123456789ABCDEF";
  let finalHexString = "#";
  for (let i = 0; i < 6; i++) {
    finalHexString += hexSet[Math.ceil(Math.random() * 15)];
  }
  return finalHexString;
};

export const setSize = (canvas: HTMLCanvasElement) => {
  canvas.height = innerWidth;
  canvas.width = innerWidth;
};

export const drawSpace = (context, cursor) => {
  const particlesArray = [];
  // in loop specify the amount of particles
  for (let i = 0; i < 201; i++) {
    let x = innerWidth / 2;
    let y = innerHeight / 2;
    const particleTrailWidth = 4;
    const rotateSpeed = 0.005;
    let theta = Math.random() * Math.PI * 2;
    const t = Math.random() * 500;
    const rotate = () => {
      const ls = {
        x,
        y,
      };
      theta += rotateSpeed;
      x = cursor.x + Math.cos(theta) * t;
      y = cursor.y + Math.sin(theta) * t;
      context.beginPath();
      context.lineWidth = particleTrailWidth;
      context.strokeStyle = generateColor();
      context.moveTo(ls.x, ls.y);
      context.lineTo(x, y);
      context.stroke();
    };
    particlesArray.push(rotate);
  }
  return particlesArray;
};

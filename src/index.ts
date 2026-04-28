import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(
    cors({
      origin: ["https://nnez17.github.io/"],
    }),
  )
  .get("/weather", async ({ query }) => {
    const res = await fetch(
      query.city
        ? `https://api.openweathermap.org/data/2.5/weather?q=${query.city}&units=metric&appid=${process.env.API_KEY}`
        : `https://api.openweathermap.org/data/2.5/weather?lat=${query.lat}&lon=${query.lon}&units=metric&appid=${process.env.API_KEY}`,
    );
    return res.json();
  })
  .get("/forecast", async ({ query }) => {
    const res = await fetch(
      query.city
        ? `https://api.openweathermap.org/data/2.5/forecast?q=${query.city}&units=metric&appid=${process.env.API_KEY}`
        : `https://api.openweathermap.org/data/2.5/forecast?lat=${query.lat}&lon=${query.lon}&units=metric&appid=${process.env.API_KEY}`,
    );
    return res.json();
  })
  .get("/air_pollution", async ({ query }) => {
    const res = await fetch(
      query.city
        ? `https://api.openweathermap.org/data/2.5/air_pollution?q=${query.city}&units=metric&appid=${process.env.API_KEY}`
        : `https://api.openweathermap.org/data/2.5/air_pollution?lat=${query.lat}&lon=${query.lon}&units=metric&appid=${process.env.API_KEY}`,
    );
    return res.json();
  })
  .get("/reverse_geo", async ({ query }) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${query.lat}&lon=${query.lon}&limit=5&appid=${process.env.API_KEY}`,
    );
    return res.json();
  })
  .get("/geo", async ({ query }) => {
    const res = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${query.q}&limit=5&appid=${process.env.API_KEY}`,
    );
    return res.json();
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

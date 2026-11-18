# Assignment: Weather Console App (18 Nov 2026)

**Topics this assignment uses (from the `ASYNC` folder):** XMLHttpRequest (`readystatechange`, `readyState`, `status`, `responseText`, `open`, `send`), callbacks and callback hell, creating your own Promise (`resolve`, `reject`), `.then()` / `.catch()` chaining, `fetch()` and `response.json()`, `async` / `await` with `try` / `catch`.

**What you will build:** a small app that runs in the browser **console**. You give it a city name, for example `"Delhi"`, and it prints the current weather of that city: temperature, feels-like temperature, humidity, a weather description and wind speed. The weather data comes from the **OpenWeatherMap** API.

You will build the same app **four times**, first with callbacks, then with your own promise, then with `fetch`, and last with `async` / `await`. That way you can see for yourself why each new way was introduced.

This file has only tasks and explanations. There are no solutions in it, so write the code yourself.

---

## Part 0: Setup

### 0.1 Get your free OpenWeatherMap API key

An **API key** is a secret code that tells OpenWeatherMap who is asking for the data. Without it, the server will reply with an error.

1. Go to **https://openweathermap.org** and click **Sign In**, then **Create an Account**.
2. Fill in your username, email and password, tick the boxes, and create the account.
3. Open your email and click the **verification link** OpenWeatherMap sends you. Your key will not work until your email is verified.
4. After logging in, click your username (top right) and select **My API keys**, or open **https://home.openweathermap.org/api_keys** directly.
5. A default key is already created for you. Copy it. If you want a separate key for this project, type a name like `weather-console-app` and click **Generate**.
6. **Wait before using it.** A new key can take from a few minutes up to about **2 hours** to become active. Until then you will get a `401` error. This does not mean your code is wrong.

> **Keep your key safe.** Do not post it on WhatsApp groups, and do not push it to a public GitHub repo. For this assignment, keep it in a separate file such as `config.js` with one line: `const API_KEY = "your_key_here";`. Add `config.js` to your `.gitignore`.

### 0.2 The API URL you will use

We will use the free **Current Weather Data** API:

```
https://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric
```

What each part means:

| Part | Meaning |
|---|---|
| `https://api.openweathermap.org/data/2.5/weather` | The endpoint, i.e. the address that gives **current** weather |
| `?` | Starts the query parameters (extra information we send with the request) |
| `q={CITY}` | The city name, e.g. `q=Mumbai`. To be more exact, add the country code: `q=Mumbai,IN` |
| `&` | Joins one parameter to the next |
| `appid={API_KEY}` | Your API key from step 0.1 |
| `units=metric` | Gives temperature in **°C** and wind in **metre/sec**. Without it, temperature comes in Kelvin |

**Test it first in the browser:** replace `{CITY}` and `{API_KEY}` with real values, paste the URL in the browser's address bar and press Enter. You should see JSON text. Read it carefully, because you will pick values out of it in your code.

### 0.3 The fields you need from the response

The response has many fields. You need only these:

| What to show | Where it is in the JSON |
|---|---|
| City name | `name` |
| Country code | `sys.country` |
| Temperature (°C) | `main.temp` |
| Feels like (°C) | `main.feels_like` |
| Humidity (%) | `main.humidity` |
| Description (e.g. "haze") | `weather[0].description` (note: `weather` is an **array**) |
| Wind speed (m/s) | `wind.speed` |

### 0.4 Status codes you must handle

| Status | When it happens |
|---|---|
| `200` | Everything is fine and the data has come |
| `401` | API key is wrong, missing or not active yet |
| `404` | City not found (spelling mistake, or the city does not exist) |
| `429` | Too many requests in a short time (the free plan has a limit) |

### 0.5 Project files

Make a new folder `weather-app` with:

- `index.html`: a blank page that loads `config.js` first and then **one** of your app files
- `config.js`: only your `API_KEY`
- `callback-weather.js`, `promise-weather.js`, `fetch-weather.js`, `async-weather.js`: one file for each part below

Open `index.html` in the browser and check the **Console** (F12, then the Console tab). Load only **one** app file at a time, because each file declares the same names.

---

## Part A: Callbacks with XMLHttpRequest (`callback-weather.js`)

**A1. Build the URL**
Write a function `buildUrl(city)` that **returns** the full API URL for that city, using a template literal and your `API_KEY`. Print `buildUrl("Jaipur")` and check it matches the format in 0.2.

**A2. Request with a callback**
Write a function `getWeather(city, callback)` that uses `XMLHttpRequest` to call the URL from A1. Follow the **error-first** style from `callback.js`:
- on success, call `callback(null, data)`, where `data` is the parsed JS object
- on failure, call `callback(errorMessage, null)`

**A3. Print a weather report**
Write a function `printReport(data)` that prints a neat report like this (your values will be different):

```
Weather in Delhi, IN
Temperature : 31.4 °C (feels like 33.0 °C)
Condition   : haze
Humidity    : 48 %
Wind        : 3.1 m/s
```

Call `getWeather("Delhi", ...)` and use `printReport` inside the callback.

**A4. Different error messages**
Inside `getWeather`, check the `status` and send a clear message to the callback:
- `401` → `"Invalid or inactive API key"`
- `404` → `"City not found: <city name>"`
- anything else that is not `200` → `"Something went wrong (status <code>)"`

Test it with a wrong city name like `"Dilli123"` and with a wrong key.

**A5. Feel the callback hell**
Print the weather of **Delhi, then Mumbai, then Chennai, then Kolkata**, strictly **one after another** (Mumbai's request should start only after Delhi's report is printed). Use only callbacks. Look at the shape of your code, then write a comment of 2-3 lines explaining what problems you see.

---

## Part B: Your Own Promise (`promise-weather.js`)

**B1. Wrap XHR in a Promise**
Write a function `getWeather(city)` that does **not** take a callback. Instead it **returns** `new Promise((resolve, reject) => { ... })`. Inside, use `XMLHttpRequest` as before. Call `resolve(data)` on success and `reject(message)` on failure, with the same messages as A4.

**B2. Use it with `.then()` / `.catch()`**
Call `getWeather("Pune")`. Print the report in `.then()` and print the error in `.catch()`.

**B3. Chain without nesting**
Do the same as A5 (Delhi → Mumbai → Chennai → Kolkata, one after another), but this time use `.then()` chaining. **Return** the next `getWeather(...)` from each `.then()`, and use only **one** `.catch()` at the end. Write a comment comparing this code with A5.

**B4. Which one fails?**
In the B3 chain, put a wrong city name in the middle (e.g. Chennai → `"Chenaii"`). Run it and write a comment answering: which reports were printed, which were not, and which part of your code handled the error?

---

## Part C: `fetch()` (`fetch-weather.js`)

**C1. Replace XHR with fetch**
Write `getWeather(city)` again, this time using `fetch(buildUrl(city))`. Convert the response using `response.json()` and print the report.

**C2. fetch does NOT fail on 404**
Call it with a wrong city name. You will notice that `.catch()` does **not** run, even though the city is not found. Explain in a comment why this happens (hint: see the note in `fetch.js`).
Now fix it: check `response.ok` (or `response.status`), and if it is not OK, **throw** an error with the correct message from A4 so that `.catch()` handles it.

**C3. Use the error message sent by the API**
When the city is not found, OpenWeatherMap also sends a JSON body with a `message` field. Read that body and print the API's own message inside your error.

---

## Part D: `async` / `await` (`async-weather.js`)

**D1. Rewrite with async/await**
Write `async function getWeather(city)` using `fetch` and `await`. It should **return** the data, and throw an error with a proper message when `response.ok` is false.

**D2. try / catch**
Write `async function showWeather(city)` that calls `await getWeather(city)` inside `try`, prints the report on success, and prints a friendly error in `catch`. Test it with a correct city, a wrong city and a wrong API key.

**D3. One after another**
Write `async function showManyInOrder(cities)` that takes an array like `["Delhi", "Mumbai", "Chennai", "Kolkata"]` and shows them **strictly in order**, using a `for...of` loop with `await`. Compare it with A5 and B3, and write a comment about which version is the easiest to read.

**D4. All at the same time**
Now call `showWeather(...)` for the same 4 cities **without** awaiting them one by one, just 4 calls in a row, like the `handleRequest(URL)` lines in `async-await.js`. Run it 3-4 times and write a comment: is the order of the output always the same? Why or why not?

**D5. Validate input before calling the API**
Before making any request, `showWeather` should check the city name:
- if it is empty or only spaces → print `"Please enter a city name"` and **do not** call the API
- remove extra spaces from the start and end before using it

---

## Part E: Make It Interactive

**E1. Ask the user**
Use `prompt("Enter city name:")` to take the city from the user when the page loads, then show its weather in the console using your async version.

**E2. Keep asking**
After showing a report, ask again. Stop when the user types `exit` or presses Cancel (`prompt` returns `null`).

**E3. Temperature advice**
After the report, print one line of advice based on `main.temp`:
- 35 °C or above → `"Very hot! Drink lots of water."`
- 25 to 34 → `"Warm weather, cotton clothes are best."`
- 15 to 24 → `"Pleasant weather."`
- below 15 → `"It's cold, carry a jacket."`

---

## Bonus (optional)

**X1. Fahrenheit option**
Add a second parameter `unit` to `getWeather(city, unit)`. If `unit` is `"F"`, use `units=imperial` in the URL instead of `metric`, and print `°F`.

**X2. Hottest city**
Fetch the weather of 5 cities of your choice one by one (with `await` in a loop), store each temperature, and at the end print which city is the hottest and which is the coolest.

**X3. Last updated time**
The response has a field `dt`. It is the time of the data as a Unix timestamp **in seconds**. Convert it into a readable date and time (hint: `new Date(...)` expects **milliseconds**) and print `"Last updated: ..."` in the report.

---

## Submission Checklist

- [ ] All four versions (callback, promise, fetch, async/await) work for a correct city
- [ ] Wrong city, wrong key and empty input each show a clear, friendly message
- [ ] Comments written for A5, B3, B4, C2, D3 and D4
- [ ] `config.js` (your API key) is **not** pushed to GitHub
- [ ] Code is properly indented, and variable/function names make sense

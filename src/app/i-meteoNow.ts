export interface MeteoNow {

  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: "GMT";
  timezone_abbreviation: "GMT";
  elevation: number;
  current_units: WeatherUnits;
  current: CurrentWeather;
}

interface WeatherUnits {
  time: "iso8601";
  interval: "seconds";
  temperature_2m: "°C";
  is_day: "";
  precipitation: "mm";
  rain: "mm";
  showers: "mm";
  snowfall: "cm";
  weather_code: "wmo code";
  cloud_cover: "%";
}

interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  is_day: number;
  precipitation: number;
  rain: number;
  showers: number;
  snowfall: number;
  weather_code: number;
  cloud_cover: number;
}

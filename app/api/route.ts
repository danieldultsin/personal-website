import { NextResponse } from "next/server";
//import dotenv from "dotenv";
import tzlookup from "tz-lookup";
//dotenv.config({ path: "../../../.env.local" });

// since there is only one type of requested expected from the client
// we do not need to use a request parameter
export async function GET() {
  try {
    const bearerToken = process.env.X_BEARER_TOKEN;
    const response = await fetch(
      "https://api.x.com/2/users/by/username/daniel_dultsin?user.fields=location",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      }
    );

    const data = await response.json();
    const location = data.data?.location;
    let timezone;

    if (location) {
      try {
        const apiKey = process.env.GOOGLE_MAPS_API_KEY;
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apiKey}`
        );

        const data = await response.json();
        const coordinates = data.results[0].geometry.location;
        timezone = tzlookup(coordinates.lat, coordinates.lng);
      } catch (error) {
        console.error("Error getting timezone:", error);
      }
    }

    return NextResponse.json({
      location: location || "Incognito",
      timezone: timezone || "America/Chicago",
    });
  } catch (error) {
    console.error("Error fetching location:", error);
    return NextResponse.json(
      { location: "Incognito", timezone: "America/Chicago" },
      { status: 500 }
    );
  }
}

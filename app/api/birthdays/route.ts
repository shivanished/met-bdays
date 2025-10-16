import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_PRIVATE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, birthdate } = await request.json();

    // Validate required fields
    if (!firstName || !lastName || !birthdate) {
      return NextResponse.json(
        { error: "Missing required fields: firstName, lastName, birthdate" },
        { status: 400 }
      );
    }

    // Combine first and last name
    const name = `${firstName} ${lastName}`.trim();

    // Upsert the birthday record (name is unique, so this will update if exists)
    const { data, error } = await supabase
      .from("birthdays")
      .upsert(
        {
          name,
          birthdate,
        },
        {
          onConflict: "name", // This ensures upsert based on the name field
        }
      )
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to save birthday information" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Birthday information saved successfully",
        data: data?.[0],
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

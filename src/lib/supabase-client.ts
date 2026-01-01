"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://hubzpaisuljxlnynzlic.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1YnpwYWlzdWxqeGxueW56bGljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcwMDcwNzcsImV4cCI6MjA4MjU4MzA3N30.VJ3AfBGV8THfOXCoyrJM8CuIAU0qHDsv6-96BJWNfGw"
)
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ugzpturuyhfzrswcymiq.supabase.co";
const supabaseKey = "sb_publishable_ZSRFLhObyexC_ZB0gH9RPg_qjDvqDWp";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

#!/bin/bash

# Generate TypeScript types from Supabase
# Make sure you have the Supabase CLI installed: npm install -g supabase

echo "Generating TypeScript types from Supabase..."

PROJECT_REF="ndbnmbcwxgwonythhori"

pnpx supabase gen types typescript --project-id $PROJECT_REF --schema public,next_auth > server/init/database/types.ts

echo "Types generated successfully in server/init/database/types.ts"
echo "Make sure to review and update the types if needed."

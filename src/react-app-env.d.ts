// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
       //types of envs
        NODE_ENV: 'development' | 'production' | 'test';
        SUPABASE_URL: 'https://zeozpmuhalwstxjiepye.supabase.co'
        SUPABASE_API: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inplb3pwbXVoYWx3c3R4amllcHllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTYxMjY5ODAsImV4cCI6MTk3MTcwMjk4MH0.pFKRoIWVhr6CuGMMgCb3d7DBy_hr1w1RhduBCazWAkY'

    }
}
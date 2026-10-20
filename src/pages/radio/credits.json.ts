import credits from '../../data/radio-credits.json';

// The player matches the song now on air against this file, so the credit line shows beside the music.
export const GET = () => new Response(JSON.stringify(credits), { headers: { 'content-type': 'application/json' } });

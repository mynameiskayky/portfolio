const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
const nowPlayingEndPoint = `https://api.spotify.com/v1/me/player/currently-playing`;
const tokenEndPoint = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(tokenEndPoint, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken!,
      client_id: clientId!,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(nowPlayingEndPoint, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

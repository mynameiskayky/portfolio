import { getNowPlaying } from "@/app/lib/spotify";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    if (song.item === null) {
      return res.status(200).json({ isPlaying: "false" });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artists = song.item.artists
      .slice(0, 2)
      .map((artist: { name: string }) => artist.name)
      .join(", ");
    const album = song.item.album_name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    res.setHeader(
      "Cache-Control",
      "public, s-maxage=60, stale-while-revalidate-30"
    );

    return res.status(200).json({
      album,
      albumImageUrl,
      songUrl,
      artists,
      title,
      isPlaying,
    });
  } catch (error) {
    console.error("Error processing the request:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

function removeVietnameseDiacriticsAndSpace(str: string) {
  return str
    .normalize("NFD") // Decompose into base characters and diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove all diacritic marks
    .replace(/đ/g, "d") // Special case for 'đ'
    .replace(/Đ/g, "D") // Special case for 'Đ'
    .replace(/\s+/g, "")
    .toLowerCase()
    .normalize("NFC"); // Recompose to precomposed characters (optional, for cleaning up any remaining composite characters)
}

function calendarToDateString({
  year,
  month,
  day,
}: {
  year?: number;
  month?: number;
  day?: number;
}) {
  if (!year || !month || !day) {
    return undefined;
  }
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${year}-${formattedMonth}-${formattedDay}`;
}

export const toEmbedLink = (
  normalLink: string,
  platform: "youtube" | "tiktok"
) => {
  const embedLinkParts = normalLink?.split("/");
  const videoId = embedLinkParts?.[(embedLinkParts?.length ?? 1) - 1];

  const prefixLink = "";
  switch (platform) {
    case "youtube":
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    case "tiktok":
      return videoId
        ? `https://www.tiktok.com/player/v1/${videoId}?music_info=0&description=0&controls=1&play_button=1&rel=0`
        : "";
  }
};

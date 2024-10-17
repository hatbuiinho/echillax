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

export const toEmbedYoutubeLink = (normalLink?: string) => {
  const embedYoutubeLinkParts = normalLink?.split("/");
  const youtubeVideoId =
    embedYoutubeLinkParts?.[(embedYoutubeLinkParts?.length ?? 1) - 1];
  return youtubeVideoId
    ? `https://www.youtube.com/embed/${youtubeVideoId}`
    : "";
};

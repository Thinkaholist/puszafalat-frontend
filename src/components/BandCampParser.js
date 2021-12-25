import React from 'react';

export default function BandCampParser({
  trackCode = '',
  albumCode = '',
  showTracklist = false,
  linkColor = '0687f5',
}) {
  const embedCode = trackCode || albumCode;
  const albumIdStart = embedCode.search(/album=/);
  const trackIdStart = embedCode.search(/track=/);
  const parsedTitle = embedCode.split(/(<|>)/)[8];
  const albumId =
    albumIdStart === -1
      ? ''
      : embedCode
          ?.substring(albumIdStart, albumIdStart + 20)
          ?.substring(6)
          .split('/')[0];
  const parsedTrackId =
    trackIdStart === -1
      ? ''
      : embedCode
          ?.substring(trackIdStart, trackIdStart + 20)
          ?.substring(6)
          .split('/')[0];
  return (
    <>
      {trackCode && (
        <iframe
          style={{ border: 0, width: '100%', height: 120 }}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=${linkColor}/tracklist=${showTracklist}/artwork=small/track=${parsedTrackId}/transparent=true/`}
          seamless
        ></iframe>
      )}
      {albumCode && (
        <iframe
          style={{ border: 0, width: '100%', height: 439 }}
          src={`https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=ffffff/linkcol=${linkColor}/artwork=small/transparent=true/`}
          seamless
        ></iframe>
      )}
    </>
  );
}

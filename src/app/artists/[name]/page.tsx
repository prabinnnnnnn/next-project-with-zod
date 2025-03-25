import React from "react";

function ArtistPage({ params }: { params: { name: string } }) {
  return <div>Artist Name: {decodeURIComponent(params.name)}</div>;
}

export default ArtistPage;

import React, { useEffect } from "react";

function FacebookVideo() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl aspect-video rounded-2xl overflow-hidden shadow-lg">
      <div
        className="fb-video w-full h-full"
        data-href="https://fb.watch/xzvOmf8Qz3/"
        data-show-text="false"
      ></div>
    </div>
  );
}

export default FacebookVideo;

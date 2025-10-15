import React from "react";

const AdSense = () => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1025155614673663"
        crossOrigin="anonymous"
      ></script>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1025155614673663"
        data-ad-slot="8043274067"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>
        {(adsbygoogle = window.adsbygoogle || []).push({})}
      </script>
    </>
  );
};

export default AdSense;

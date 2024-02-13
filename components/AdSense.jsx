import { useEffect } from 'react';

const AdSense = (props) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle adbanner-customize"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-2987556127489545"
      {...props}
    />
  );
};

export default AdSense;

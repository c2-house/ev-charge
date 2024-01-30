import { useEffect } from 'react';

const DisplayHorizontalAds = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className='adsbygoogle'
      style={{ display: 'block' }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot={process.env.NEXT_PUBLIC_GOOGLE_ADS_SLOT_ID_DISPLAY_HORIZONTAL}
      data-ad-format='auto'
      data-full-width-responsive='true'
    ></ins>
  );
};

export default DisplayHorizontalAds;

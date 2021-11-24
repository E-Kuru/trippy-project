import React from 'react';

const HotelImages = () => {
    const array = [
        "/img/hotels/10066892_18.jpg",
        "/img/hotels/10066892_19.jpg",
        "/img/hotels/10066892_24.jpg",
        "/img/hotels/10066892_25.jpg",
        "/img/hotels/10066892_30.jpg",
        "/img/hotels/10066892_31.jpg",
        "/img/hotels/10319203_18.jpg",
        "/img/hotels/10319203_19.jpg",
        "/img/hotels/10319203_2.jpg",
        "/img/hotels/10319203_24.jpg",
        "/img/hotels/10319203_25.jpg",
        "/img/hotels/10319203_3.jpg",
        "/img/hotels/10319203_30.jpg",
        "/img/hotels/10319203_31.jpg",
        "/img/hotels/10541730_48.jpg",
        "/img/hotels/10541730_49.jpg",
        "/img/hotels/10541730_60.jpg",
        "/img/hotels/10541730_61.jpg",
        "/img/hotels/10548259_1.jpg",
        "/img/hotels/112064_44.jpg",
        "/img/hotels/112064_45.jpg",
        "/img/hotels/112064_50.jpg",
        "/img/hotels/112064_51.jpg",
        "/img/hotels/1143056_10.jpg",
        "/img/hotels/1143056_11.jpg",
        "/img/hotels/11621939_26.jpg",
        "/img/hotels/11621939_27.jpg",
        "/img/hotels/11621939_32.jpg",
        "/img/hotels/11621939_33.jpg",
        "/img/hotels/11854022_20.jpg",
        "/img/hotels/11854022_21.jpg",
        "/img/hotels/11854022_34.jpg",
        "/img/hotels/11854022_35.jpg",
        "/img/hotels/12146171_4.jpg",
        "/img/hotels/12146171_5.jpg",
        "/img/hotels/1218792_44.jpg",
        "/img/hotels/12297961_22.jpg",
        "/img/hotels/12297961_23.jpg",
        "/img/hotels/12455412_2.jpg",
        "/img/hotels/12455412_26.jpg",
        "/img/hotels/12455412_27.jpg",
        "/img/hotels/12455412_3.jpg",
        "/img/hotels/12455412_32.jpg",
        "/img/hotels/12455412_33.jpg",
        "/img/hotels/12533513_10.jpg",
        "/img/hotels/12533513_11.jpg",
        "/img/hotels/12533513_38.jpg",
        "/img/hotels/12533513_39.jpg",
        "/img/hotels/12551350_58.jpg",
        "/img/hotels/126260_10.jpg",
        "/img/hotels/126260_39.jpg",
        "/img/hotels/13232396_16.jpg",
        "/img/hotels/13232396_17.jpg",
        "/img/hotels/13451678_12.jpg",
        "/img/hotels/13451678_13.jpg",
        "/img/hotels/13569031_1.jpg",
        "/img/hotels/13569031_22.jpg",
        "/img/hotels/13569031_23.jpg",
        "/img/hotels/13569031_36.jpg",
        "/img/hotels/13569031_37.jpg",
        "/img/hotels/14772285_12.jpg",
        "/img/hotels/14772285_13.jpg",
        "/img/hotels/1510471_10.jpg",
        "/img/hotels/1510471_11.jpg",
        "/img/hotels/1510471_38.jpg",
        "/img/hotels/1510471_39.jpg",
        "/img/hotels/1510471_6.jpg",
        "/img/hotels/1510471_7.jpg",
        "/img/hotels/15135187_10.jpg",
        "/img/hotels/15135187_11.jpg",
        "/img/hotels/15135187_38.jpg",
        "/img/hotels/15135187_39.jpg",
        "/img/hotels/1595302_1.jpg",
        "/img/hotels/1595302_2.jpg",
        "/img/hotels/1595302_3.jpg",
        "/img/hotels/1595302_44.jpg",
        "/img/hotels/1595302_45.jpg",
        "/img/hotels/1595302_50.jpg",
        "/img/hotels/1729030_12.jpg",
        "/img/hotels/1729030_13.jpg",
        "/img/hotels/1812157_20.jpg",
        "/img/hotels/1812157_21.jpg",
        "/img/hotels/192068_42.jpg",
        "/img/hotels/192068_43.jpg",
        "/img/hotels/192086_1.jpg",
        "/img/hotels/192086_10.jpg",
        "/img/hotels/192086_11.jpg",
        "/img/hotels/192086_13.jpg",
        "/img/hotels/192086_38.jpg",
        "/img/hotels/192086_39.jpg",
        "/img/hotels/193062_1.jpg",
        "/img/hotels/193062_40.jpg",
        "/img/hotels/193062_41.jpg",
        "/img/hotels/193095_26.jpg",
        "/img/hotels/193095_27.jpg",
        "/img/hotels/193095_32.jpg",
        "/img/hotels/193095_33.jpg",
        "/img/hotels/193097_22.jpg",
        "/img/hotels/193097_23.jpg",
        "/img/hotels/193097_36.jpg",
        "/img/hotels/193097_37.jpg",
        "/img/hotels/193097_8.jpg",
        "/img/hotels/193097_9.jpg",
        "/img/hotels/1946018_2.jpg",
        "/img/hotels/1946018_3.jpg",
        "/img/hotels/1946018_42.jpg",
        "/img/hotels/1946018_43.jpg",
        "/img/hotels/195155_12.jpg",
        "/img/hotels/195155_13.jpg",
        "/img/hotels/197188_1.jpg",
        "/img/hotels/197188_26.jpg",
        "/img/hotels/197188_27.jpg",
        "/img/hotels/197188_32.jpg",
        "/img/hotels/197188_33.jpg",
        "/img/hotels/197192_42.jpg",
        "/img/hotels/197196_26.jpg",
        "/img/hotels/197196_27.jpg",
        "/img/hotels/197196_32.jpg",
        "/img/hotels/197196_33.jpg",
        "/img/hotels/197200_16.jpg",
        "/img/hotels/197200_17.jpg",
        "/img/hotels/197486_14.jpg",
        "/img/hotels/197486_15.jpg",
        "/img/hotels/197486_2.jpg",
        "/img/hotels/197486_28.jpg",
        "/img/hotels/197486_29.jpg",
        "/img/hotels/197486_3.jpg",
        "/img/hotels/197487_40.jpg",
        "/img/hotels/197487_41.jpg",
        "/img/hotels/197487_42.jpg",
        "/img/hotels/197487_54.jpg",
        "/img/hotels/197487_55.jpg",
        "/img/hotels/197487_56.jpg",
        "/img/hotels/197566_2.jpg",
        "/img/hotels/197566_3.jpg",
        "/img/hotels/197985_22.jpg",
        "/img/hotels/197985_23.jpg",
        "/img/hotels/197985_36.jpg",
        "/img/hotels/197985_37.jpg",
        "/img/hotels/203056_48.jpg",
        "/img/hotels/203056_8.jpg",
        "/img/hotels/203056_9.jpg",
        "/img/hotels/203094_42.jpg",
        "/img/hotels/203094_43.jpg",
        "/img/hotels/203181_2.jpg",
        "/img/hotels/203181_3.jpg",
        "/img/hotels/205044_6.jpg",
        "/img/hotels/205044_7.jpg",
        "/img/hotels/205121_12.jpg",
        "/img/hotels/205121_13.jpg",
        "/img/hotels/205121_6.jpg",
        "/img/hotels/205121_7.jpg",
        "/img/hotels/205879_1.jpg",
        "/img/hotels/205879_16.jpg",
        "/img/hotels/205879_17.jpg",
        "/img/hotels/208455_16.jpg",
        "/img/hotels/208455_17.jpg",
        "/img/hotels/208552_2.jpg",
        "/img/hotels/208552_22.jpg",
        "/img/hotels/208552_23.jpg",
        "/img/hotels/208552_3.jpg",
        "/img/hotels/208768_1.jpg",
        "/img/hotels/2173604_46.jpg",
        "/img/hotels/2173604_47.jpg",
        "/img/hotels/2173604_52.jpg",
        "/img/hotels/2173604_53.jpg",
        "/img/hotels/218409_2.jpg",
        "/img/hotels/218409_3.jpg",
        "/img/hotels/219970_16.jpg",
        "/img/hotels/219970_17.jpg",
        "/img/hotels/219971_8.jpg",
        "/img/hotels/219971_9.jpg",
        "/img/hotels/220181_20.jpg",
        "/img/hotels/220181_21.jpg",
        "/img/hotels/220181_34.jpg",
        "/img/hotels/220181_35.jpg",
        "/img/hotels/220181_6.jpg",
        "/img/hotels/220181_7.jpg",
        "/img/hotels/222935_18.jpg",
        "/img/hotels/222935_19.jpg",
        "/img/hotels/222935_24.jpg",
        "/img/hotels/222935_25.jpg",
        "/img/hotels/2253206_6.jpg",
        "/img/hotels/2253206_7.jpg",
        "/img/hotels/228988_4.jpg",
        "/img/hotels/228988_5.jpg",
        "/img/hotels/229619_6.jpg",
        "/img/hotels/229619_7.jpg",
        "/img/hotels/230460_44.jpg",
        "/img/hotels/230612_46.jpg",
        "/img/hotels/230612_47.jpg",
        "/img/hotels/230612_52.jpg",
        "/img/hotels/230612_53.jpg",
        "/img/hotels/232361_22.jpg",
        "/img/hotels/232361_23.jpg",
        "/img/hotels/232361_35.jpg",
        "/img/hotels/232361_36.jpg",
        "/img/hotels/232361_37.jpg",
        "/img/hotels/232845_20.jpg",
        "/img/hotels/232845_21.jpg",
        "/img/hotels/232845_34.jpg",
        "/img/hotels/232845_35.jpg",
        "/img/hotels/232875_40.jpg",
        "/img/hotels/232875_41.jpg",
        "/img/hotels/232875_54.jpg",
        "/img/hotels/232875_55.jpg",
        "/img/hotels/236589_1.jpg",
        "/img/hotels/236589_18.jpg",
        "/img/hotels/236589_19.jpg",
        "/img/hotels/236589_24.jpg",
        "/img/hotels/236589_25.jpg",
        "/img/hotels/236589_30.jpg",
        "/img/hotels/236589_31.jpg",
        "/img/hotels/248861_20.jpg",
        "/img/hotels/248861_21.jpg",
        "/img/hotels/248861_34.jpg",
        "/img/hotels/248861_35.jpg",
        "/img/hotels/254570_26.jpg",
        "/img/hotels/254570_27.jpg",
        "/img/hotels/254570_32.jpg",
        "/img/hotels/254570_33.jpg",
        "/img/hotels/260484_2.jpg",
        "/img/hotels/260484_3.jpg",
        "/img/hotels/261787_1.jpg",
        "/img/hotels/261787_12.jpg",
        "/img/hotels/261787_13.jpg",
        "/img/hotels/263754_22.jpg",
        "/img/hotels/263754_23.jpg",
        "/img/hotels/263754_36.jpg",
        "/img/hotels/263754_37.jpg",
        "/img/hotels/265986_1.jpg",
        "/img/hotels/265986_22.jpg",
        "/img/hotels/265986_23.jpg",
        "/img/hotels/265986_36.jpg",
        "/img/hotels/265986_37.jpg",
        "/img/hotels/269104_10.jpg",
        "/img/hotels/269104_11.jpg",
        "/img/hotels/269104_6.jpg",
        "/img/hotels/269104_7.jpg",
        "/img/hotels/274978_1.jpg",
        "/img/hotels/277089_18.jpg",
        "/img/hotels/277089_19.jpg",
        "/img/hotels/277089_24.jpg",
        "/img/hotels/277089_25.jpg",
        "/img/hotels/277089_30.jpg",
        "/img/hotels/277089_31.jpg",
        "/img/hotels/279291_20.jpg",
        "/img/hotels/279291_21.jpg",
        "/img/hotels/279291_22.jpg",
        "/img/hotels/279291_34.jpg",
        "/img/hotels/279291_35.jpg",
        "/img/hotels/279291_36.jpg",
        "/img/hotels/280083_40.jpg",
        "/img/hotels/280083_41.jpg",
        "/img/hotels/297049_26.jpg",
        "/img/hotels/297049_27.jpg",
        "/img/hotels/297049_32.jpg",
        "/img/hotels/297049_33.jpg",
        "/img/hotels/3164384_44.jpg",
        "/img/hotels/3164384_45.jpg",
        "/img/hotels/316644_20.jpg",
        "/img/hotels/316644_21.jpg",
        "/img/hotels/316644_34.jpg",
        "/img/hotels/316644_35.jpg",
        "/img/hotels/3240599_18.jpg",
        "/img/hotels/3240599_19.jpg",
        "/img/hotels/3240599_24.jpg",
        "/img/hotels/3240599_25.jpg",
        "/img/hotels/3240599_30.jpg",
        "/img/hotels/3240599_31.jpg",
        "/img/hotels/3244512_46.jpg",
        "/img/hotels/3244512_47.jpg",
        "/img/hotels/3523343_18.jpg",
        "/img/hotels/3523343_19.jpg",
        "/img/hotels/3523343_24.jpg",
        "/img/hotels/3523343_25.jpg",
        "/img/hotels/3523343_30.jpg",
        "/img/hotels/3523343_31.jpg",
        "/img/hotels/3964772_10.jpg",
        "/img/hotels/3964772_11.jpg",
        "/img/hotels/3964772_38.jpg",
        "/img/hotels/3964772_39.jpg",
        "/img/hotels/4191654_16.jpg",
        "/img/hotels/4191654_17.jpg",
        "/img/hotels/482672_16.jpg",
        "/img/hotels/482672_17.jpg",
        "/img/hotels/501063_8.jpg",
        "/img/hotels/501063_9.jpg",
        "/img/hotels/548136_44.jpg",
        "/img/hotels/5823268_26.jpg",
        "/img/hotels/5823268_27.jpg",
        "/img/hotels/5823268_32.jpg",
        "/img/hotels/5823268_33.jpg",
        "/img/hotels/582530_26.jpg",
        "/img/hotels/582530_27.jpg",
        "/img/hotels/582530_32.jpg",
        "/img/hotels/582530_33.jpg",
        "/img/hotels/582530_8.jpg",
        "/img/hotels/582530_9.jpg",
        "/img/hotels/593277_1.jpg",
        "/img/hotels/597573_20.jpg",
        "/img/hotels/597573_21.jpg",
        "/img/hotels/597573_34.jpg",
        "/img/hotels/597573_35.jpg",
        "/img/hotels/6161763_10.jpg",
        "/img/hotels/6161763_11.jpg",
        "/img/hotels/6161763_38.jpg",
        "/img/hotels/6161763_39.jpg",
        "/img/hotels/625550_10.jpg",
        "/img/hotels/625550_11.jpg",
        "/img/hotels/625550_38.jpg",
        "/img/hotels/625550_39.jpg",
        "/img/hotels/628205_2.jpg",
        "/img/hotels/628205_3.jpg",
        "/img/hotels/6395273_25.jpg",
        "/img/hotels/6395273_26.jpg",
        "/img/hotels/6395273_27.jpg",
        "/img/hotels/6395273_31.jpg",
        "/img/hotels/6395273_32.jpg",
        "/img/hotels/6534774_40.jpg",
        "/img/hotels/6534774_41.jpg",
        "/img/hotels/6675948_44.jpg",
        "/img/hotels/6675948_45.jpg",
        "/img/hotels/6675948_6.jpg",
        "/img/hotels/6675948_7.jpg",
        "/img/hotels/7134644_1.jpg",
        "/img/hotels/75688_16.jpg",
        "/img/hotels/75688_17.jpg",
        "/img/hotels/7976127_46.jpg",
        "/img/hotels/7976127_47.jpg",
        "/img/hotels/8147345_14.jpg",
        "/img/hotels/8147345_15.jpg",
        "/img/hotels/8147345_28.jpg",
        "/img/hotels/8147345_29.jpg",
        "/img/hotels/8147345_5.jpg",
        "/img/hotels/8147345_6.jpg",
        "/img/hotels/8147345_7.jpg",
        "/img/hotels/8515751_46.jpg",
        "/img/hotels/8515751_47.jpg",
        "/img/hotels/8539517_42.jpg",
        "/img/hotels/8539517_43.jpg",
        "/img/hotels/8663974_20.jpg",
        "/img/hotels/8663974_21.jpg",
        "/img/hotels/93358_20.jpg",
        "/img/hotels/93358_21.jpg",
        "/img/hotels/93358_34.jpg",
        "/img/hotels/93358_35.jpg",
        "/img/hotels/93457_15.jpg",
        "/img/hotels/93457_28.jpg",
        "/img/hotels/93457_29.jpg",
        "/img/hotels/93516_48.jpg",
        "/img/hotels/93516_49.jpg",
        "/img/hotels/93520_2.jpg",
        "/img/hotels/93520_3.jpg",
        "/img/hotels/93562_50.jpg",
        "/img/hotels/99281_40.jpg",
        "/img/hotels/99281_41.jpg",
        "/img/hotels/99288_1.jpg",
        "/img/hotels/99302_16.jpg",
        "/img/hotels/99302_29.jpg",
        "/img/hotels/99332_7.jpg",
        "/img/hotels/99352_26.jpg",
        "/img/hotels/99352_27.jpg",
        "/img/hotels/99352_32.jpg",
        "/img/hotels/99352_33.jpg",
        "/img/hotels/99389_18.jpg",
        "/img/hotels/99389_19.jpg",
        "/img/hotels/99389_24.jpg",
        "/img/hotels/99389_25.jpg",
        "/img/hotels/99389_26.jpg",
        "/img/hotels/99389_30.jpg"
      ]
    return (
        <div>
            {array}
        </div>
    );
};

export default HotelImages;
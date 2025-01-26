import React from "react";
import BlurredCircle from "../decors/BlurredCircle";

const expertiseData = [
  {
    id: 1,
    title: "Crafting Stories",
    content:
      "We capture your brand’s unique voice and message, creating visuals and content that resonate and leave a lasting impression.",
  },
  {
    id: 2,
    title: "Building Presence",
    content:
      "With strategic social media marketing and polished video editing, we position your brand exactly where it needs to be to reach your audience.",
  },

  {
    id: 3,
    title: "DRIVING RESULTS",
    content:
      "From boosting engagement to generating leads, we focus on meaningful outcomes that strengthen your brand and foster real, measurable growth.",
  },
];

const Expertise = () => {
  return (
    <div className="w-full expertise h-auto py-[10vh] relative overflow-hidden">
      <div className="expertise-container w-3/4 mx-auto z-50 relative">
        <div className="expertise-tite flex items-center gap-x-[5vw] mb-[5vh]">
          <h3 className="text-[50px] text-white">
            Our <span className="text-highlight text-[75px]">Expertise</span>
          </h3>
          <img
            src="/arrow.png"
            alt="link-arrow"
            className="w-[40px] h-[40px]"
          />
        </div>

        <div className="expertise-content grid grid-cols-1 md:grid-cols-3 gap-x-4 relative z-50 ">
          {expertiseData.map((data) => (
            <div
              key={data.id}
              className="expertise-card expertise-gradient text-center text-white p-[25px] rounded-[20px] relative"
            >
              <h4 className="text-[40px] uppercase mb-10 expertise-card-title">
                {data.title}
              </h4>
              <p className="text-[25px] opacity-60">{data.content}</p>
            </div>
          ))}
        </div>
      </div>
      <svg
        width="1698"
        height="185"
        viewBox="0 0 1698 185"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mt-[50px] ml-[200px] z-30"
      >
        <mask
          id="path-1-outside-1_4012_347"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="1844"
          height="185"
          fill="black"
        >
          <rect fill="white" width="1844" height="185" />
          <path d="M156.5 157.25C138.833 174.75 117.333 183.5 92 183.5C66.6667 183.5 45.1667 174.75 27.5 157.25C10 139.583 1.25 118 1.25 92.5C1.25 67 10 45.5 27.5 28C45.1667 10.3333 66.6667 1.49999 92 1.49999C117.333 1.49999 138.833 10.3333 156.5 28C174.167 45.5 183 67 183 92.5C183 118 174.167 139.583 156.5 157.25ZM51.75 133.75C62.5833 144.417 76 149.75 92 149.75C108 149.75 121.417 144.417 132.25 133.75C143.083 122.917 148.5 109.167 148.5 92.5C148.5 75.8333 143.083 62.0833 132.25 51.25C121.417 40.4167 108 35 92 35C76 35 62.5833 40.4167 51.75 51.25C40.9167 62.0833 35.5 75.8333 35.5 92.5C35.5 109.167 40.9167 122.917 51.75 133.75ZM278.777 183.5C259.277 183.5 243.277 178 230.777 167C218.277 156 212.027 141.25 212.027 122.75V4.99999H246.277V120C246.277 129.167 248.861 136.417 254.027 141.75C259.361 147.083 267.611 149.75 278.777 149.75C289.944 149.75 298.111 147.083 303.277 141.75C308.611 136.417 311.277 129.167 311.277 120V4.99999H345.777V122.75C345.777 141.25 339.527 156 327.027 167C314.527 178 298.444 183.5 278.777 183.5ZM480.357 180L445.107 119.25H418.857V180H384.357V4.99999H454.357C470.524 4.99999 484.274 10.6667 495.607 22C506.941 33.3333 512.607 47 512.607 63C512.607 73.8333 509.524 83.9167 503.357 93.25C497.191 102.417 489.024 109.333 478.857 114L517.607 180H480.357ZM418.857 37.25V89H454.357C460.857 89 466.441 86.5 471.107 81.5C475.774 76.3333 478.107 70.1667 478.107 63C478.107 55.8333 475.774 49.75 471.107 44.75C466.441 39.75 460.857 37.25 454.357 37.25H418.857ZM649.922 147H723.672V180H615.422V4.99999H722.422V38H649.922V75.25H716.172V107.75H649.922V147ZM888.74 180H849.49L815.49 123L781.49 180H742.49L795.99 90.25L745.24 4.99999H784.24L815.49 57.5L846.74 4.99999H885.74L834.99 90L888.74 180ZM980.828 4.99999C997.661 4.99999 1011.83 10.6667 1023.33 22C1034.83 33.3333 1040.58 47.25 1040.58 63.75C1040.58 80.25 1034.83 94.1667 1023.33 105.5C1011.83 116.833 997.661 122.5 980.828 122.5H950.078V180H915.578V4.99999H980.828ZM980.828 90.25C988.161 90.25 994.245 87.75 999.078 82.75C1003.91 77.5833 1006.33 71.25 1006.33 63.75C1006.33 56.0833 1003.91 49.75 999.078 44.75C994.245 39.75 988.161 37.25 980.828 37.25H950.078V90.25H980.828ZM1105.04 147H1178.79V180H1070.54V4.99999H1177.54V38H1105.04V75.25H1171.29V107.75H1105.04V147ZM1306.61 180L1271.36 119.25H1245.11V180H1210.61V4.99999H1280.61C1296.77 4.99999 1310.52 10.6667 1321.86 22C1333.19 33.3333 1338.86 47 1338.86 63C1338.86 73.8333 1335.77 83.9167 1329.61 93.25C1323.44 102.417 1315.27 109.333 1305.11 114L1343.86 180H1306.61ZM1245.11 37.25V89H1280.61C1287.11 89 1292.69 86.5 1297.36 81.5C1302.02 76.3333 1304.36 70.1667 1304.36 63C1304.36 55.8333 1302.02 49.75 1297.36 44.75C1292.69 39.75 1287.11 37.25 1280.61 37.25H1245.11ZM1483.76 4.99999V38H1436.51V180H1402.01V38H1355.01V4.99999H1483.76ZM1510.52 4.99999H1545.02V180H1510.52V4.99999ZM1641.98 183.5C1624.65 183.5 1610.06 179.667 1598.23 172C1586.4 164.167 1578.06 153.583 1573.23 140.25L1602.73 123C1609.56 140.833 1622.98 149.75 1642.98 149.75C1652.65 149.75 1659.73 148 1664.23 144.5C1668.73 141 1670.98 136.583 1670.98 131.25C1670.98 125.083 1668.23 120.333 1662.73 117C1657.23 113.5 1647.4 109.75 1633.23 105.75C1625.4 103.417 1618.73 101.083 1613.23 98.75C1607.9 96.4167 1602.48 93.3333 1596.98 89.5C1591.65 85.5 1587.56 80.5 1584.73 74.5C1581.9 68.5 1580.48 61.5 1580.48 53.5C1580.48 37.6667 1586.06 25.0833 1597.23 15.75C1608.56 6.24999 1622.15 1.49999 1637.98 1.49999C1652.15 1.49999 1664.56 4.99999 1675.23 12C1686.06 18.8333 1694.48 28.4167 1700.48 40.75L1671.48 57.5C1664.48 42.5 1653.31 35 1637.98 35C1630.81 35 1625.15 36.6667 1620.98 40C1616.98 43.1667 1614.98 47.3333 1614.98 52.5C1614.98 58 1617.23 62.5 1621.73 66C1626.4 69.3333 1635.23 73 1648.23 77C1653.56 78.6667 1657.56 80 1660.23 81C1663.06 81.8333 1666.81 83.25 1671.48 85.25C1676.31 87.0833 1679.98 88.8333 1682.48 90.5C1685.15 92.1667 1688.15 94.4167 1691.48 97.25C1694.81 100.083 1697.31 103 1698.98 106C1700.81 109 1702.31 112.667 1703.48 117C1704.81 121.167 1705.48 125.75 1705.48 130.75C1705.48 146.917 1699.56 159.75 1687.73 169.25C1676.06 178.75 1660.81 183.5 1641.98 183.5ZM1768.76 147H1842.51V180H1734.26V4.99999H1841.26V38H1768.76V75.25H1835.01V107.75H1768.76V147Z" />
        </mask>
        <path
          d="M156.5 157.25L157.204 157.96L157.207 157.957L156.5 157.25ZM27.5 157.25L26.7895 157.954L26.7963 157.96L27.5 157.25ZM27.5 28L26.7929 27.2929L27.5 28ZM156.5 28L155.793 28.7071L155.796 28.7104L156.5 28ZM51.75 133.75L51.0429 134.457L51.0484 134.463L51.75 133.75ZM132.25 133.75L132.952 134.463L132.957 134.457L132.25 133.75ZM132.25 51.25L132.957 50.5429L132.25 51.25ZM51.75 51.25L51.0429 50.5429L51.75 51.25ZM155.796 156.54C138.321 173.85 117.075 182.5 92 182.5V184.5C117.591 184.5 139.346 175.65 157.204 157.96L155.796 156.54ZM92 182.5C66.9247 182.5 45.6793 173.85 28.2038 156.54L26.7963 157.96C44.6541 175.65 66.4086 184.5 92 184.5V182.5ZM28.2105 156.546C10.9012 139.072 2.25 117.744 2.25 92.5H0.25C0.25 118.256 9.09885 140.095 26.7896 157.954L28.2105 156.546ZM2.25 92.5C2.25 67.2562 10.9009 46.0133 28.2071 28.7071L26.7929 27.2929C9.09908 44.9867 0.25 66.7438 0.25 92.5H2.25ZM28.2071 28.7071C45.6833 11.2309 66.9277 2.49999 92 2.49999V0.499989C66.4056 0.499989 44.65 9.43576 26.7929 27.2929L28.2071 28.7071ZM92 2.49999C117.072 2.49999 138.317 11.2309 155.793 28.7071L157.207 27.2929C139.35 9.43576 117.594 0.499989 92 0.499989V2.49999ZM155.796 28.7104C173.268 46.0173 182 67.2592 182 92.5H184C184 66.7408 175.065 44.9826 157.204 27.2895L155.796 28.7104ZM182 92.5C182 117.741 173.268 139.068 155.793 156.543L157.207 157.957C175.066 140.099 184 118.259 184 92.5H182ZM51.0484 134.463C62.0794 145.324 75.7527 150.75 92 150.75V148.75C76.2473 148.75 63.0873 143.509 52.4516 133.037L51.0484 134.463ZM92 150.75C108.247 150.75 121.921 145.324 132.952 134.463L131.548 133.037C120.913 143.509 107.753 148.75 92 148.75V150.75ZM132.957 134.457C143.995 123.419 149.5 109.406 149.5 92.5H147.5C147.5 108.927 142.171 122.415 131.543 133.043L132.957 134.457ZM149.5 92.5C149.5 75.5938 143.995 61.5812 132.957 50.5429L131.543 51.9571C142.171 62.5855 147.5 76.0729 147.5 92.5H149.5ZM132.957 50.5429C121.927 39.5129 108.252 34 92 34V36C107.748 36 120.906 41.3204 131.543 51.9571L132.957 50.5429ZM92 34C75.7479 34 62.0728 39.5129 51.0429 50.5429L52.4571 51.9571C63.0938 41.3204 76.2521 36 92 36V34ZM51.0429 50.5429C40.0046 61.5812 34.5 75.5938 34.5 92.5H36.5C36.5 76.0729 41.8287 62.5855 52.4571 51.9571L51.0429 50.5429ZM34.5 92.5C34.5 109.406 40.0046 123.419 51.0429 134.457L52.4571 133.043C41.8287 122.415 36.5 108.927 36.5 92.5H34.5ZM230.777 167L230.117 167.751L230.777 167ZM212.027 4.99999V3.99999H211.027V4.99999H212.027ZM246.277 4.99999H247.277V3.99999H246.277V4.99999ZM254.027 141.75L253.309 142.446L253.315 142.451L253.32 142.457L254.027 141.75ZM303.277 141.75L302.57 141.043L302.565 141.049L302.559 141.054L303.277 141.75ZM311.277 4.99999V3.99999H310.277V4.99999H311.277ZM345.777 4.99999H346.777V3.99999H345.777V4.99999ZM327.027 167L327.688 167.751L327.027 167ZM278.777 182.5C259.477 182.5 243.725 177.062 231.438 166.249L230.117 167.751C242.83 178.938 259.078 184.5 278.777 184.5V182.5ZM231.438 166.249C219.179 155.462 213.027 140.998 213.027 122.75H211.027C211.027 141.502 217.376 156.538 230.117 167.751L231.438 166.249ZM213.027 122.75V4.99999H211.027V122.75H213.027ZM212.027 5.99999H246.277V3.99999H212.027V5.99999ZM245.277 4.99999V120H247.277V4.99999H245.277ZM245.277 120C245.277 129.362 247.921 136.884 253.309 142.446L254.746 141.054C249.8 135.949 247.277 128.971 247.277 120H245.277ZM253.32 142.457C258.915 148.052 267.472 150.75 278.777 150.75V148.75C267.749 148.75 259.807 146.115 254.734 141.043L253.32 142.457ZM278.777 150.75C290.079 150.75 298.564 148.053 303.996 142.446L302.559 141.054C297.658 146.114 289.809 148.75 278.777 148.75V150.75ZM303.984 142.457C309.544 136.897 312.277 129.371 312.277 120H310.277C310.277 128.962 307.677 135.936 302.57 141.043L303.984 142.457ZM312.277 120V4.99999H310.277V120H312.277ZM311.277 5.99999H345.777V3.99999H311.277V5.99999ZM344.777 4.99999V122.75H346.777V4.99999H344.777ZM344.777 122.75C344.777 140.998 338.626 155.462 326.367 166.249L327.688 167.751C340.429 156.538 346.777 141.502 346.777 122.75H344.777ZM326.367 166.249C314.081 177.06 298.247 182.5 278.777 182.5V184.5C298.641 184.5 314.973 178.94 327.688 167.751L326.367 166.249ZM480.357 180L479.492 180.502L479.782 181H480.357V180ZM445.107 119.25L445.972 118.748L445.683 118.25H445.107V119.25ZM418.857 119.25V118.25H417.857V119.25H418.857ZM418.857 180V181H419.857V180H418.857ZM384.357 180H383.357V181H384.357V180ZM384.357 4.99999V3.99999H383.357V4.99999H384.357ZM495.607 22L496.315 21.2929L495.607 22ZM503.357 93.25L504.187 93.8082L504.192 93.8013L503.357 93.25ZM478.857 114L478.44 113.091L477.435 113.553L477.995 114.506L478.857 114ZM517.607 180V181H519.354L518.47 179.494L517.607 180ZM418.857 37.25V36.25H417.857V37.25H418.857ZM418.857 89H417.857V90H418.857V89ZM471.107 81.5L471.838 82.1823L471.844 82.1763L471.85 82.1703L471.107 81.5ZM471.107 44.75L470.376 45.4323L471.107 44.75ZM481.222 179.498L445.972 118.748L444.242 119.752L479.492 180.502L481.222 179.498ZM445.107 118.25H418.857V120.25H445.107V118.25ZM417.857 119.25V180H419.857V119.25H417.857ZM418.857 179H384.357V181H418.857V179ZM385.357 180V4.99999H383.357V180H385.357ZM384.357 5.99999H454.357V3.99999H384.357V5.99999ZM454.357 5.99999C470.261 5.99999 483.756 11.5631 494.9 22.7071L496.315 21.2929C484.792 9.7702 470.787 3.99999 454.357 3.99999V5.99999ZM494.9 22.7071C506.047 33.8533 511.607 47.2657 511.607 63H513.607C513.607 46.7343 507.835 32.8134 496.315 21.2929L494.9 22.7071ZM511.607 63C511.607 73.6307 508.585 83.5233 502.523 92.6987L504.192 93.8013C510.463 84.31 513.607 74.036 513.607 63H511.607ZM502.528 92.6918C496.465 101.704 488.442 108.5 478.44 113.091L479.275 114.909C489.606 110.166 497.916 103.129 504.187 93.8082L502.528 92.6918ZM477.995 114.506L516.745 180.506L518.47 179.494L479.72 113.494L477.995 114.506ZM517.607 179H480.357V181H517.607V179ZM417.857 37.25V89H419.857V37.25H417.857ZM418.857 90H454.357V88H418.857V90ZM454.357 90C461.15 90 466.994 87.373 471.838 82.1823L470.376 80.8177C465.888 85.6269 460.564 88 454.357 88V90ZM471.85 82.1703C476.688 76.814 479.107 70.4063 479.107 63H477.107C477.107 69.927 474.861 75.8527 470.365 80.8297L471.85 82.1703ZM479.107 63C479.107 55.5934 476.687 49.2624 471.838 44.0677L470.376 45.4323C474.861 50.2376 477.107 56.0733 477.107 63H479.107ZM471.838 44.0677C466.994 38.8769 461.15 36.25 454.357 36.25V38.25C460.564 38.25 465.888 40.623 470.376 45.4323L471.838 44.0677ZM454.357 36.25H418.857V38.25H454.357V36.25ZM649.922 147H648.922V148H649.922V147ZM723.672 147H724.672V146H723.672V147ZM723.672 180V181H724.672V180H723.672ZM615.422 180H614.422V181H615.422V180ZM615.422 4.99999V3.99999H614.422V4.99999H615.422ZM722.422 4.99999H723.422V3.99999H722.422V4.99999ZM722.422 38V39H723.422V38H722.422ZM649.922 38V37H648.922V38H649.922ZM649.922 75.25H648.922V76.25H649.922V75.25ZM716.172 75.25H717.172V74.25H716.172V75.25ZM716.172 107.75V108.75H717.172V107.75H716.172ZM649.922 107.75V106.75H648.922V107.75H649.922ZM649.922 148H723.672V146H649.922V148ZM722.672 147V180H724.672V147H722.672ZM723.672 179H615.422V181H723.672V179ZM616.422 180V4.99999H614.422V180H616.422ZM615.422 5.99999H722.422V3.99999H615.422V5.99999ZM721.422 4.99999V38H723.422V4.99999H721.422ZM722.422 37H649.922V39H722.422V37ZM648.922 38V75.25H650.922V38H648.922ZM649.922 76.25H716.172V74.25H649.922V76.25ZM715.172 75.25V107.75H717.172V75.25H715.172ZM716.172 106.75H649.922V108.75H716.172V106.75ZM648.922 107.75V147H650.922V107.75H648.922ZM888.74 180V181H890.502L889.599 179.487L888.74 180ZM849.49 180L848.631 180.512L848.922 181H849.49V180ZM815.49 123L816.349 122.488L815.49 121.048L814.631 122.488L815.49 123ZM781.49 180V181H782.058L782.349 180.512L781.49 180ZM742.49 180L741.631 179.488L740.73 181H742.49V180ZM795.99 90.25L796.849 90.762L797.154 90.2503L796.849 89.7385L795.99 90.25ZM745.24 4.99999V3.99999H743.481L744.381 5.51152L745.24 4.99999ZM784.24 4.99999L785.1 4.4885L784.809 3.99999H784.24V4.99999ZM815.49 57.5L814.631 58.0115L815.49 59.4551L816.35 58.0115L815.49 57.5ZM846.74 4.99999V3.99999H846.172L845.881 4.4885L846.74 4.99999ZM885.74 4.99999L886.599 5.51263L887.502 3.99999H885.74V4.99999ZM834.99 90L834.132 89.4874L833.826 90.0001L834.132 90.5127L834.99 90ZM888.74 179H849.49V181H888.74V179ZM850.349 179.488L816.349 122.488L814.631 123.512L848.631 180.512L850.349 179.488ZM814.631 122.488L780.631 179.488L782.349 180.512L816.349 123.512L814.631 122.488ZM781.49 179H742.49V181H781.49V179ZM743.349 180.512L796.849 90.762L795.131 89.738L741.631 179.488L743.349 180.512ZM796.849 89.7385L746.099 4.48846L744.381 5.51152L795.131 90.7615L796.849 89.7385ZM745.24 5.99999H784.24V3.99999H745.24V5.99999ZM783.381 5.51147L814.631 58.0115L816.35 56.9885L785.1 4.4885L783.381 5.51147ZM816.35 58.0115L847.6 5.51147L845.881 4.4885L814.631 56.9885L816.35 58.0115ZM846.74 5.99999H885.74V3.99999H846.74V5.99999ZM884.882 4.48735L834.132 89.4874L835.849 90.5126L886.599 5.51263L884.882 4.48735ZM834.132 90.5127L887.882 180.513L889.599 179.487L835.849 89.4873L834.132 90.5127ZM1023.33 22L1024.03 21.2877L1023.33 22ZM1023.33 105.5L1024.03 106.212L1023.33 105.5ZM950.078 122.5V121.5H949.078V122.5H950.078ZM950.078 180V181H951.078V180H950.078ZM915.578 180H914.578V181H915.578V180ZM915.578 4.99999V3.99999H914.578V4.99999H915.578ZM999.078 82.75L999.797 83.445L999.803 83.4391L999.808 83.4332L999.078 82.75ZM999.078 44.75L998.359 45.445L999.078 44.75ZM950.078 37.25V36.25H949.078V37.25H950.078ZM950.078 90.25H949.078V91.25H950.078V90.25ZM980.828 5.99999C997.411 5.99999 1011.32 11.5718 1022.63 22.7122L1024.03 21.2877C1012.33 9.76147 997.912 3.99999 980.828 3.99999V5.99999ZM1022.63 22.7122C1033.93 33.8531 1039.58 47.5111 1039.58 63.75H1041.58C1041.58 46.9888 1035.73 32.8136 1024.03 21.2877L1022.63 22.7122ZM1039.58 63.75C1039.58 79.9888 1033.93 93.6469 1022.63 104.788L1024.03 106.212C1035.73 94.6864 1041.58 80.5111 1041.58 63.75H1039.58ZM1022.63 104.788C1011.32 115.928 997.411 121.5 980.828 121.5V123.5C997.912 123.5 1012.33 117.739 1024.03 106.212L1022.63 104.788ZM980.828 121.5H950.078V123.5H980.828V121.5ZM949.078 122.5V180H951.078V122.5H949.078ZM950.078 179H915.578V181H950.078V179ZM916.578 180V4.99999H914.578V180H916.578ZM915.578 5.99999H980.828V3.99999H915.578V5.99999ZM980.828 91.25C988.416 91.25 994.764 88.6515 999.797 83.445L998.359 82.055C993.725 86.8485 987.907 89.25 980.828 89.25V91.25ZM999.808 83.4332C1004.83 78.0694 1007.33 71.4869 1007.33 63.75H1005.33C1005.33 71.013 1003 77.0973 998.348 82.0668L999.808 83.4332ZM1007.33 63.75C1007.33 55.853 1004.83 49.2613 999.797 44.055L998.359 45.445C1002.99 50.2387 1005.33 56.3137 1005.33 63.75H1007.33ZM999.797 44.055C994.764 38.8485 988.416 36.25 980.828 36.25V38.25C987.907 38.25 993.725 40.6515 998.359 45.445L999.797 44.055ZM980.828 36.25H950.078V38.25H980.828V36.25ZM949.078 37.25V90.25H951.078V37.25H949.078ZM950.078 91.25H980.828V89.25H950.078V91.25ZM1105.04 147H1104.04V148H1105.04V147ZM1178.79 147H1179.79V146H1178.79V147ZM1178.79 180V181H1179.79V180H1178.79ZM1070.54 180H1069.54V181H1070.54V180ZM1070.54 4.99999V3.99999H1069.54V4.99999H1070.54ZM1177.54 4.99999H1178.54V3.99999H1177.54V4.99999ZM1177.54 38V39H1178.54V38H1177.54ZM1105.04 38V37H1104.04V38H1105.04ZM1105.04 75.25H1104.04V76.25H1105.04V75.25ZM1171.29 75.25H1172.29V74.25H1171.29V75.25ZM1171.29 107.75V108.75H1172.29V107.75H1171.29ZM1105.04 107.75V106.75H1104.04V107.75H1105.04ZM1105.04 148H1178.79V146H1105.04V148ZM1177.79 147V180H1179.79V147H1177.79ZM1178.79 179H1070.54V181H1178.79V179ZM1071.54 180V4.99999H1069.54V180H1071.54ZM1070.54 5.99999H1177.54V3.99999H1070.54V5.99999ZM1176.54 4.99999V38H1178.54V4.99999H1176.54ZM1177.54 37H1105.04V39H1177.54V37ZM1104.04 38V75.25H1106.04V38H1104.04ZM1105.04 76.25H1171.29V74.25H1105.04V76.25ZM1170.29 75.25V107.75H1172.29V75.25H1170.29ZM1171.29 106.75H1105.04V108.75H1171.29V106.75ZM1104.04 107.75V147H1106.04V107.75H1104.04ZM1306.61 180L1305.74 180.502L1306.03 181H1306.61V180ZM1271.36 119.25L1272.22 118.748L1271.93 118.25H1271.36V119.25ZM1245.11 119.25V118.25H1244.11V119.25H1245.11ZM1245.11 180V181H1246.11V180H1245.11ZM1210.61 180H1209.61V181H1210.61V180ZM1210.61 4.99999V3.99999H1209.61V4.99999H1210.61ZM1321.86 22L1322.56 21.2929L1321.86 22ZM1329.61 93.25L1330.44 93.8082L1330.44 93.8013L1329.61 93.25ZM1305.11 114L1304.69 113.091L1303.69 113.553L1304.25 114.506L1305.11 114ZM1343.86 180V181H1345.6L1344.72 179.494L1343.86 180ZM1245.11 37.25V36.25H1244.11V37.25H1245.11ZM1245.11 89H1244.11V90H1245.11V89ZM1297.36 81.5L1298.09 82.1823L1298.09 82.1763L1298.1 82.1703L1297.36 81.5ZM1297.36 44.75L1296.63 45.4323L1297.36 44.75ZM1307.47 179.498L1272.22 118.748L1270.49 119.752L1305.74 180.502L1307.47 179.498ZM1271.36 118.25H1245.11V120.25H1271.36V118.25ZM1244.11 119.25V180H1246.11V119.25H1244.11ZM1245.11 179H1210.61V181H1245.11V179ZM1211.61 180V4.99999H1209.61V180H1211.61ZM1210.61 5.99999H1280.61V3.99999H1210.61V5.99999ZM1280.61 5.99999C1296.51 5.99999 1310.01 11.5631 1321.15 22.7071L1322.56 21.2929C1311.04 9.7702 1297.04 3.99999 1280.61 3.99999V5.99999ZM1321.15 22.7071C1332.3 33.8533 1337.86 47.2657 1337.86 63H1339.86C1339.86 46.7343 1334.09 32.8134 1322.56 21.2929L1321.15 22.7071ZM1337.86 63C1337.86 73.6307 1334.84 83.5233 1328.77 92.6987L1330.44 93.8013C1336.71 84.31 1339.86 74.036 1339.86 63H1337.86ZM1328.78 92.6918C1322.72 101.704 1314.69 108.5 1304.69 113.091L1305.52 114.909C1315.86 110.166 1324.17 103.129 1330.44 93.8082L1328.78 92.6918ZM1304.25 114.506L1343 180.506L1344.72 179.494L1305.97 113.494L1304.25 114.506ZM1343.86 179H1306.61V181H1343.86V179ZM1244.11 37.25V89H1246.11V37.25H1244.11ZM1245.11 90H1280.61V88H1245.11V90ZM1280.61 90C1287.4 90 1293.24 87.373 1298.09 82.1823L1296.63 80.8177C1292.14 85.6269 1286.81 88 1280.61 88V90ZM1298.1 82.1703C1302.94 76.814 1305.36 70.4063 1305.36 63H1303.36C1303.36 69.927 1301.11 75.8527 1296.62 80.8297L1298.1 82.1703ZM1305.36 63C1305.36 55.5934 1302.94 49.2624 1298.09 44.0677L1296.63 45.4323C1301.11 50.2376 1303.36 56.0733 1303.36 63H1305.36ZM1298.09 44.0677C1293.24 38.8769 1287.4 36.25 1280.61 36.25V38.25C1286.81 38.25 1292.14 40.623 1296.63 45.4323L1298.09 44.0677ZM1280.61 36.25H1245.11V38.25H1280.61V36.25ZM1483.76 4.99999H1484.76V3.99999H1483.76V4.99999ZM1483.76 38V39H1484.76V38H1483.76ZM1436.51 38V37H1435.51V38H1436.51ZM1436.51 180V181H1437.51V180H1436.51ZM1402.01 180H1401.01V181H1402.01V180ZM1402.01 38H1403.01V37H1402.01V38ZM1355.01 38H1354.01V39H1355.01V38ZM1355.01 4.99999V3.99999H1354.01V4.99999H1355.01ZM1482.76 4.99999V38H1484.76V4.99999H1482.76ZM1483.76 37H1436.51V39H1483.76V37ZM1435.51 38V180H1437.51V38H1435.51ZM1436.51 179H1402.01V181H1436.51V179ZM1403.01 180V38H1401.01V180H1403.01ZM1402.01 37H1355.01V39H1402.01V37ZM1356.01 38V4.99999H1354.01V38H1356.01ZM1355.01 5.99999H1483.76V3.99999H1355.01V5.99999ZM1510.52 4.99999V3.99999H1509.52V4.99999H1510.52ZM1545.02 4.99999H1546.02V3.99999H1545.02V4.99999ZM1545.02 180V181H1546.02V180H1545.02ZM1510.52 180H1509.52V181H1510.52V180ZM1510.52 5.99999H1545.02V3.99999H1510.52V5.99999ZM1544.02 4.99999V180H1546.02V4.99999H1544.02ZM1545.02 179H1510.52V181H1545.02V179ZM1511.52 180V4.99999H1509.52V180H1511.52ZM1598.23 172L1597.68 172.834L1597.68 172.839L1598.23 172ZM1573.23 140.25L1572.72 139.387L1572 139.807L1572.29 140.591L1573.23 140.25ZM1602.73 123L1603.66 122.642L1603.24 121.542L1602.22 122.137L1602.73 123ZM1664.23 144.5L1663.61 143.711L1664.23 144.5ZM1662.73 117L1662.19 117.844L1662.2 117.85L1662.21 117.855L1662.73 117ZM1633.23 105.75L1632.94 106.708L1632.95 106.71L1632.96 106.712L1633.23 105.75ZM1613.23 98.75L1612.83 99.6662L1612.84 99.6706L1613.23 98.75ZM1596.98 89.5L1596.38 90.3L1596.39 90.3104L1596.41 90.3204L1596.98 89.5ZM1584.73 74.5L1583.82 74.927L1584.73 74.5ZM1597.23 15.75L1597.87 16.5173L1597.87 16.5164L1597.23 15.75ZM1675.23 12L1674.68 12.836L1674.69 12.841L1674.7 12.8458L1675.23 12ZM1700.48 40.75L1700.98 41.6159L1701.79 41.1501L1701.38 40.3125L1700.48 40.75ZM1671.48 57.5L1670.57 57.9229L1671.03 58.9117L1671.98 58.3659L1671.48 57.5ZM1620.98 40L1621.6 40.7841L1621.6 40.7809L1620.98 40ZM1621.73 66L1621.11 66.7893L1621.13 66.8019L1621.15 66.8137L1621.73 66ZM1648.23 77L1648.53 76.0455L1648.52 76.0442L1648.23 77ZM1660.23 81L1659.88 81.9363L1659.91 81.9491L1659.95 81.9594L1660.23 81ZM1671.48 85.25L1671.08 86.1691L1671.1 86.1775L1671.12 86.185L1671.48 85.25ZM1682.48 90.5L1681.92 91.332L1681.94 91.3402L1681.95 91.348L1682.48 90.5ZM1691.48 97.25L1692.13 96.4881L1691.48 97.25ZM1698.98 106L1698.1 106.486L1698.11 106.504L1698.13 106.521L1698.98 106ZM1703.48 117L1702.51 117.26L1702.52 117.283L1702.53 117.305L1703.48 117ZM1687.73 169.25L1687.1 168.47L1687.1 168.475L1687.73 169.25ZM1641.98 182.5C1624.79 182.5 1610.41 178.701 1598.77 171.161L1597.68 172.839C1609.71 180.633 1624.5 184.5 1641.98 184.5V182.5ZM1598.78 171.166C1587.13 163.451 1578.93 153.041 1574.17 139.909L1572.29 140.591C1577.19 154.126 1585.66 164.882 1597.68 172.834L1598.78 171.166ZM1573.73 141.113L1603.23 123.863L1602.22 122.137L1572.72 139.387L1573.73 141.113ZM1601.79 123.358C1605.27 132.432 1610.45 139.302 1617.36 143.895C1624.27 148.486 1632.83 150.75 1642.98 150.75V148.75C1633.13 148.75 1624.98 146.555 1618.47 142.23C1611.96 137.906 1607.02 131.402 1603.66 122.642L1601.79 123.358ZM1642.98 150.75C1652.73 150.75 1660.08 148.992 1664.84 145.289L1663.61 143.711C1659.38 147.008 1652.56 148.75 1642.98 148.75V150.75ZM1664.84 145.289C1669.57 141.615 1671.98 136.916 1671.98 131.25H1669.98C1669.98 136.251 1667.89 140.385 1663.61 143.711L1664.84 145.289ZM1671.98 131.25C1671.98 124.716 1669.03 119.65 1663.25 116.145L1662.21 117.855C1667.43 121.017 1669.98 125.451 1669.98 131.25H1671.98ZM1663.27 116.156C1657.63 112.571 1647.67 108.789 1633.5 104.788L1632.96 106.712C1647.12 110.711 1656.83 114.429 1662.19 117.844L1663.27 116.156ZM1633.51 104.792C1625.7 102.465 1619.07 100.144 1613.62 97.8294L1612.84 99.6706C1618.38 102.023 1625.09 104.368 1632.94 106.708L1633.51 104.792ZM1613.63 97.8338C1608.36 95.5303 1603 92.481 1597.55 88.6796L1596.41 90.3204C1601.95 94.1857 1607.43 97.303 1612.83 99.6662L1613.63 97.8338ZM1597.58 88.7C1592.37 84.7972 1588.4 79.925 1585.63 74.073L1583.82 74.927C1586.73 81.075 1590.92 86.2028 1596.38 90.3L1597.58 88.7ZM1585.63 74.073C1582.87 68.2311 1581.48 61.3822 1581.48 53.5H1579.48C1579.48 61.6178 1580.92 68.7689 1583.82 74.927L1585.63 74.073ZM1581.48 53.5C1581.48 37.9333 1586.95 25.6424 1597.87 16.5173L1596.59 14.9827C1585.17 24.5242 1579.48 37.4 1579.48 53.5H1581.48ZM1597.87 16.5164C1609.01 7.1784 1622.36 2.49999 1637.98 2.49999V0.499989C1621.93 0.499989 1608.11 5.32159 1596.59 14.9836L1597.87 16.5164ZM1637.98 2.49999C1651.97 2.49999 1664.19 5.95462 1674.68 12.836L1675.78 11.1639C1664.93 4.04536 1652.32 0.499989 1637.98 0.499989V2.49999ZM1674.7 12.8458C1685.36 19.5726 1693.65 29.0093 1699.58 41.1875L1701.38 40.3125C1695.3 27.824 1686.76 18.094 1675.76 11.1542L1674.7 12.8458ZM1699.98 39.8841L1670.98 56.6341L1671.98 58.3659L1700.98 41.6159L1699.98 39.8841ZM1672.38 57.0771C1668.83 49.4501 1664.18 43.6674 1658.41 39.7949C1652.64 35.9192 1645.82 34 1637.98 34V36C1645.48 36 1651.9 37.8308 1657.3 41.4551C1662.7 45.0826 1667.13 50.5499 1670.57 57.9229L1672.38 57.0771ZM1637.98 34C1630.66 34 1624.75 35.702 1620.35 39.2191L1621.6 40.7809C1625.54 37.6313 1630.96 36 1637.98 36V34ZM1620.36 39.216C1616.11 42.5751 1613.98 47.0323 1613.98 52.5H1615.98C1615.98 47.6344 1617.84 43.7582 1621.6 40.784L1620.36 39.216ZM1613.98 52.5C1613.98 58.3215 1616.38 63.108 1621.11 66.7893L1622.34 65.2106C1618.08 61.892 1615.98 57.6785 1615.98 52.5H1613.98ZM1621.15 66.8137C1625.96 70.2507 1634.93 73.9557 1647.93 77.9558L1648.52 76.0442C1635.52 72.0443 1626.83 68.4159 1622.31 65.1863L1621.15 66.8137ZM1647.93 77.9545C1653.26 79.6198 1657.24 80.9464 1659.88 81.9363L1660.58 80.0637C1657.89 79.0536 1653.86 77.7135 1648.53 76.0455L1647.93 77.9545ZM1659.95 81.9594C1662.72 82.7764 1666.43 84.1754 1671.08 86.1691L1671.87 84.3309C1667.19 82.3246 1663.4 80.8903 1660.51 80.0406L1659.95 81.9594ZM1671.12 86.185C1675.93 88.0078 1679.52 89.7265 1681.92 91.332L1683.03 89.668C1680.44 87.9402 1676.69 86.1589 1671.83 84.315L1671.12 86.185ZM1681.95 91.348C1684.56 92.9811 1687.52 95.1989 1690.83 98.0119L1692.13 96.4881C1688.77 93.6344 1685.73 91.3522 1683.01 89.652L1681.95 91.348ZM1690.83 98.0119C1694.1 100.788 1696.51 103.615 1698.1 106.486L1699.85 105.514C1698.11 102.385 1695.53 99.3787 1692.13 96.4881L1690.83 98.0119ZM1698.13 106.521C1699.9 109.421 1701.36 112.995 1702.51 117.26L1704.44 116.74C1703.26 112.339 1701.73 108.579 1699.83 105.479L1698.13 106.521ZM1702.53 117.305C1703.82 121.36 1704.48 125.839 1704.48 130.75H1706.48C1706.48 125.661 1705.8 120.973 1704.43 116.695L1702.53 117.305ZM1704.48 130.75C1704.48 146.636 1698.68 159.174 1687.1 168.47L1688.35 170.03C1700.44 160.326 1706.48 147.197 1706.48 130.75H1704.48ZM1687.1 168.475C1675.65 177.796 1660.64 182.5 1641.98 182.5V184.5C1660.98 184.5 1676.47 179.704 1688.36 170.025L1687.1 168.475ZM1768.76 147H1767.76V148H1768.76V147ZM1842.51 147H1843.51V146H1842.51V147ZM1842.51 180V181H1843.51V180H1842.51ZM1734.26 180H1733.26V181H1734.26V180ZM1734.26 4.99999V3.99999H1733.26V4.99999H1734.26ZM1841.26 4.99999H1842.26V3.99999H1841.26V4.99999ZM1841.26 38V39H1842.26V38H1841.26ZM1768.76 38V37H1767.76V38H1768.76ZM1768.76 75.25H1767.76V76.25H1768.76V75.25ZM1835.01 75.25H1836.01V74.25H1835.01V75.25ZM1835.01 107.75V108.75H1836.01V107.75H1835.01ZM1768.76 107.75V106.75H1767.76V107.75H1768.76ZM1768.76 148H1842.51V146H1768.76V148ZM1841.51 147V180H1843.51V147H1841.51ZM1842.51 179H1734.26V181H1842.51V179ZM1735.26 180V4.99999H1733.26V180H1735.26ZM1734.26 5.99999H1841.26V3.99999H1734.26V5.99999ZM1840.26 4.99999V38H1842.26V4.99999H1840.26ZM1841.26 37H1768.76V39H1841.26V37ZM1767.76 38V75.25H1769.76V38H1767.76ZM1768.76 76.25H1835.01V74.25H1768.76V76.25ZM1834.01 75.25V107.75H1836.01V75.25H1834.01ZM1835.01 106.75H1768.76V108.75H1835.01V106.75ZM1767.76 107.75V147H1769.76V107.75H1767.76Z"
          fill="white"
          fill-opacity="0.4"
          mask="url(#path-1-outside-1_4012_347)"
        />
      </svg>
    </div>
  );
};

export default Expertise;

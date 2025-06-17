const Star = () => {
  return (
    <div>
      <svg className="block"
  width={50}
  height={43}
  viewBox="0 0 50 43"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_dd_2186_2427)">
    <path
      d="M25 2.5C27.0572 8.05949 31.4405 12.4428 37 14.5C31.4405 16.5572 27.0572 20.9405 25 26.5C22.9428 20.9405 18.5595 16.5572 13 14.5C18.5595 12.4428 22.9428 8.05949 25 2.5Z"
      fill="white"
      fillOpacity="0.05"
    />
    <path
      d="M25 2.5C27.0572 8.05949 31.4405 12.4428 37 14.5C31.4405 16.5572 27.0572 20.9405 25 26.5C22.9428 20.9405 18.5595 16.5572 13 14.5C18.5595 12.4428 22.9428 8.05949 25 2.5Z"
      fill="#FD8240"
    />
  </g>
  <defs>
    <filter
      id="filter0_dd_2186_2427"
      x="0.015625"
      y="0.335938"
      width="49.9688"
      height="49.9688"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity={0} result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feMorphology
        radius="2.16406"
        operator="erode"
        in="SourceAlpha"
        result="effect1_dropShadow_2186_2427"
      />
      <feOffset dy="4.32812" />
      <feGaussianBlur stdDeviation="3.24609" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_2186_2427"
      />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feMorphology
        radius="3.24609"
        operator="erode"
        in="SourceAlpha"
        result="effect2_dropShadow_2186_2427"
      />
      <feOffset dy="10.8203" />
      <feGaussianBlur stdDeviation="8.11523" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
      />
      <feBlend
        mode="normal"
        in2="effect1_dropShadow_2186_2427"
        result="effect2_dropShadow_2186_2427"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect2_dropShadow_2186_2427"
        result="shape"
      />
    </filter>
  </defs>
</svg>

    </div>
  )
}

export default Star

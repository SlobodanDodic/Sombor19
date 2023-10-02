export default function SvgFilter() {
  return (
    <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="hexa">
          <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="hexa" />
          <feComposite in="SourceGraphic" in2="hexa" operator="atop" />
          <feDropShadow dx="5" dy="4" stdDeviation="5" floodColor="rgb(0, 0, 0)" result="hexa" />
        </filter>
      </defs>
    </svg>
  );
}

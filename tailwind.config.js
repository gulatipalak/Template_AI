/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        'body': '#03061C',
        'white-1d': '#FFFFFF0D',
        light: {
          body: "#FFFFFF",
          "white-1d": "#00000026",
        },
        pillBg: {
          light: '#F0ECFF80',
          dark: '#110A2B66',
        },
        borderBtn: {
          light: '#0000001A',
          dark: '#FFFFFF26',
        },
      },
      backgroundImage: {
        'custom-gradient': `
          linear-gradient(0deg, #191934, #191934),
          radial-gradient(217.75% 144.07% at 217.75% 107.58%, rgba(127, 139, 210, 0.3) 0%, rgba(89, 106, 197, 0) 100%)
        `,
        'soft-purple': 'linear-gradient(90deg, rgba(178, 148, 255, 0.1), rgba(79, 43, 172, 0.2))',
        'orange-pink': 'linear-gradient(101.7deg, #FFB366 23.03%, #E9766F 75.73%, #C04350 130.68%)',
        "light-custom-gradient": `
  linear-gradient(0deg, #F0F2F8, #F0F2F8),
  radial-gradient(140% 120% at 20% 20%, rgba(130, 130, 255, 0.4) 0%, transparent 100%)
`,
        "light-soft-purple": "linear-gradient(90deg, rgba(150, 120, 255, 0.12), rgba(100, 100, 255, 0.1))",
        "light-orange-pink": "linear-gradient(101.7deg, #FFB366 23.03%, #E9766F 75.73%, #C04350 130.68%)",
        'btn-radial-dark': `
        linear-gradient(0deg, rgba(255,255,255,0.05), rgba(255,255,255,0.05)),
        radial-gradient(66.67% 103.95% at 50% -42.76%, #BBA5F4 0%, #5F33D6 100%)
      `,
        'btn-radial-light': `
        linear-gradient(0deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03)),
        radial-gradient(66.67% 103.95% at 50% -42.76%, #C7B6FF 0%, #886FFF 100%)
      `,
        'template-radial-dark': 'radial-gradient(53.33% 74.69% at 50% 107.05%, #BBA5F4 0%, #653AD8 100%)',
        'template-radial-light': 'radial-gradient(53.33% 74.69% at 50% 107.05%, #E4DCFF 0%, #B9A7FC 100%)',
        'toggle-btn-radial': 'radial-gradient(183.81% 220.09% at 18.23% -40.51%, #FFDAA3 0%, #E27F5A 46.78%, #691616 100%)',
      },
      boxShadow: {
        'custom-pill': `
          inset 0px 1px 3px 0px #01051E80,
          0px 1px 1px 0px #FFFFFF12
        `,
        'btn-glow-dark': `
        0px 1px 3px 0px rgba(1, 5, 30, 0.5) inset,
        0px 1px 1px 0px rgba(255, 255, 255, 0.07)
      `,
        'btn-glow-light': `
        0px 4px 6px -2px rgba(0, 0, 0, 0.05),
        0px 10px 15px -3px rgba(0, 0, 0, 0.1)
      `,
        'toggle-glow': '0px 0px 26px -5px #00000033',
      },
      gridTemplateRows: {
        'custom-layout': 'minmax(157px, auto) minmax(211px, auto) minmax(220px, auto) minmax(164px, auto)',
      },
      gridTemplateColumns: {
        'custom-layout': 'minmax(242px, 242px) repeat(2, 1fr) minmax(242px, 242px)',
      },
    },
  },
  plugins: [],
}


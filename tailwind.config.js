/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // sesuaikan path ini dengan struktur proyek
  ],
  theme: {
    extend: {
      screens: {
        "lg-md": "1028px", // Menambahkan breakpoint baru khusus untuk 1028px
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Mengganti font sans default ke Poppins
        poppins: ["Poppins", "sans-serif"], // Menambahkan font Poppins sebagai opsi tambahan
      },
      colors: {
        paragraf: {
          primary: "#0066CC",
          secondary: "#343434",
        },
        buttonHover: "#004C99",
        button: "#0066CC",
      },
    },
  },
  plugins: [],
};

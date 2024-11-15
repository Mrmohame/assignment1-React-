const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
     "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        minism: '200px',

      },
      
        "root": {
          "base": "text-sm font-medium",
          "disabled": "opacity-50",
          "colors": {
            "default": "text-gray-900 dark:text-white",
            "info": "text-cyan-500 dark:text-cyan-600",
            "failure": "text-red-700 dark:text-red-500",
            "warning": "text-yellow-500 dark:text-yellow-600",
            "success": "text-green-700 dark:text-green-500"
          }
        }
      
    },
  },
  plugins: [  
      flowbite.plugin(),
      require('flowbite/plugin')
    ],
}


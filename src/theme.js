import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme




// // theme.js

// // 1. import `extendTheme` function
// import { extendTheme } from '@chakra-ui/react'

// // 2. Add your color mode config
// // const config = {
// //   initialColorMode: 'light',
// //   useSystemColorMode: true,
// // }

// // 3. extend the theme
// const theme = {
//     config : {
//         initialColorMode: 'dark',
//         initialColorMode: true,
//     },
//     styles: {
//       global: {
//         'html, body': {
//           color: 'gray.600',
//           lineHeight: 'tall',
//         },
//         a: {
//           color: 'teal.500',
//         },
//       },
//     },
//   }

// export default extendTheme(theme)
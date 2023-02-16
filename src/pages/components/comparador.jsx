// export default function PositivoF() {
//   const hexValues = '0123456789ABCDEF'
//   let hexColor = '#'
//   let hexColorM = '#'

//   for (let i = 0; i < 6; i++) {
//     hexColor += hexValues[Math.floor(Math.random() * 16)]
//     hexColorM += hexValues[Math.floor(Math.random() * 16)]
//   }
//   const changeColor = hexColor
//   console.log(changeColor)
//   const changeColorMouth = hexColorM
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       version='1.1'
//       xmlnsXlink='http://www.w3.org/1999/xlink'
//       xmlnsvgjs='http://svgjs.dev/svgjs'
//       viewBox='0 0 800 800'
//     >
//       <defs>
//         <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
//           <stop offset='70%' stopColor={changeColor} stopOpacity='0' />
//           <stop offset='97%' stopColor={changeColor} stopOpacity='1' />
//         </radialGradient>
//         <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
//           <stop offset='100%' stopColor={changeColor} stopOpacity='0' />
//         </radialGradient>
//         <filter
//           id='ccclaymoji-blur'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feGaussianBlur
//             stdDeviation='39'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             in='SourceGraphic'
//             edgeMode='none'
//             result='blur'
//           />
//         </filter>
//         <filter
//           id='inner-blur'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feGaussianBlur
//             stdDeviation='2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             in='SourceGraphic'
//             edgeMode='none'
//             result='blur'
//           />
//         </filter>
//         <filter
//           id='eye-shadow'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feDropShadow
//             stdDeviation='10'
//             dx='10'
//             dy='10'
//             floodColor='#000000'
//             floodOpacity='0.2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             result='dropShadow'
//           />
//         </filter>
//         <linearGradient
//           gradientTransform='rotate(-25)'
//           id='eye-light'
//           x1='50%'
//           y1='0%'
//           x2='50%'
//           y2='100%'
//         >
//           <stop offset='20%' stopColor='#555555' stopOpacity='1' />
//           <stop
//             offset='100%'
//             stopColor='hsla(0, 0%, 0%, 1.00)'
//             stopOpacity='0'
//           />
//         </linearGradient>
//         <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
//           <stop offset='0%' stopColor={changeColorMouth} stopOpacity='1' />
//           <stop offset='100%' stopColor={changeColorMouth} stopOpacity='0' />
//         </linearGradient>
//         <filter
//           id='mouth-shadow'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feDropShadow
//             stdDeviation='10'
//             dx='10'
//             dy='10'
//             floodColor='#8800ad'
//             floodOpacity='0.2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             result='dropShadow'
//           />
//         </filter>
//       </defs>
//       <g strokeLinecap='round'>
//         <path
//           d='M606 449.99999562919595C606 573.0738575217791 517.0738618925832 672.8439853990169 394 672.8439853990169C270.9266803069054 672.8439853990169 182 573.0738575217791 182 449.99999562919595C182 326.92667593610133 270.9266803069054 227.156005859375 394 227.156005859375C517.0738618925832 227.156005859375 606 326.92667593610133 606 449.99999562919595Z '
//           fill={changeColor}
//           opacity='0.48'
//           filter='url(#ccclaymoji-blur)'
//         />
//         <circle r='212' cx='400' cy='400' fill={changeColor} />
//         <circle r='212' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
//         <circle r='212' cx='400' cy='400' fill='url(#ccclaymoji-grad-light)' />
//         <ellipse
//           rx='28'
//           ry='26.5'
//           cx='343'
//           cy='368'
//           fill='hsla(0, 0%, 0%, 1.00)'
//           filter='url(#eye-shadow)'
//         />
//         <ellipse
//           rx='28'
//           ry='26.5'
//           cx='343'
//           cy='368'
//           fill='url(#eye-light)'
//           filter='url(#inner-blur)'
//         />
//         <ellipse
//           rx='28.5'
//           ry='28'
//           cx='454'
//           cy='372'
//           fill='hsla(0, 0%, 0%, 1.00)'
//           filter='url(#eye-shadow)'
//         />
//         <ellipse
//           rx='28.5'
//           ry='28'
//           cx='454'
//           cy='372'
//           fill='url(#eye-light)'
//           filter='url(#inner-blur)'
//         />
//         <path
//           d='M277.5 467.75Q347.5 624.75 498.5 467.75 '
//           strokeWidth='10'
//           stroke={changeColorMouth}
//           fill='none'
//           filter='url(#mouth-shadow)'
//         />
//         <path
//           d='M277.5 467.75Q347.5 624.75 498.5 467.75 '
//           strokeWidth='3.3333333333333335'
//           stroke='url(#mouth-light)'
//           fill='none'
//           filter='url(#inner-blur)'
//         />
//       </g>
//     </svg>
//   )
// }

// function Negative() {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       version='1.1'
//       xmlnsXlink='http://www.w3.org/1999/xlink'
//       xmlnssvgjs='http://svgjs.dev/svgjs'
//       viewBox='0 0 800 800'
//     >
//       <defs>
//         <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
//           <stop offset='70%' stopColor={changeColor} stopOpacity='0' />
//           <stop offset='97%' stopColor='#66a4cc' stopOpacity='1' />
//         </radialGradient>
//         <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
//           <stop offset='100%' stopColor={changeColor} stopOpacity='0' />
//         </radialGradient>
//         <filter
//           id='ccclaymoji-blur'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feGaussianBlur
//             stdDeviation='30'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             in='SourceGraphic'
//             edgeMode='none'
//             result='blur'
//           />
//         </filter>
//         <filter
//           id='inner-blur'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feGaussianBlur
//             stdDeviation='2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             in='SourceGraphic'
//             edgeMode='none'
//             result='blur'
//           />
//         </filter>
//         <filter
//           id='eye-shadow'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feDropShadow
//             stdDeviation='10'
//             dx='10'
//             dy='10'
//             floodColor='#000000'
//             floodOpacity='0.2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             result='dropShadow'
//           />
//         </filter>
//         <linearGradient
//           gradientTransform='rotate(-25)'
//           id='eye-light'
//           x1='50%'
//           y1='0%'
//           x2='50%'
//           y2='100%'
//         >
//           <stop offset='20%' stopColor='#555555' stopOpacity='1' />
//           <stop offset='100%' stopColor='black' stopOpacity='0' />
//         </linearGradient>
//         <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
//           <stop offset='0%' stopColor='#ff9667' stopOpacity='1' />
//           <stop offset='100%' stopColor='hsl(3, 100%, 51%)' stopOpacity='0' />
//         </linearGradient>
//         <filter
//           id='mouth-shadow'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feDropShadow
//             stdDeviation='10'
//             dx='10'
//             dy='10'
//             floodColor='#c20000'
//             floodOpacity='0.2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             result='dropShadow'
//           />
//         </filter>
//       </defs>
//       <g strokeLinecap='round'>
//         <path
//           d='M625.5 449.9999962145715C625.5 580.9111087465408 530.9111125319694 687.0345230687915 400 687.0345230687915C269.08946419437336 687.0345230687915 174.5 580.9111087465408 174.5 449.9999962145715C174.5 319.0894604089449 269.08946419437336 212.96546936035156 400 212.96546936035156C530.9111125319694 212.96546936035156 625.5 319.0894604089449 625.5 449.9999962145715Z '
//           fill='#66a4cc'
//           opacity='0.25'
//           filter='url(#ccclaymoji-blur)'
//         />
//         <circle r='225.5' cx='400' cy='400' fill={changeColor} />
//         <circle r='225.5' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
//         <circle
//           r='225.5'
//           cx='400'
//           cy='400'
//           fill='url(#ccclaymoji-grad-light)'
//         />
//         <ellipse
//           rx='23.5'
//           ry='25'
//           cx='350'
//           cy='375'
//           fill='black'
//           filter='url(#eye-shadow)'
//         />
//         <ellipse
//           rx='23.5'
//           ry='25'
//           cx='350'
//           cy='375'
//           fill='url(#eye-light)'
//           filter='url(#inner-blur)'
//         />
//         <ellipse
//           rx='23.5'
//           ry='25'
//           cx='450'
//           cy='375'
//           fill='black'
//           filter='url(#eye-shadow)'
//         />
//         <ellipse
//           rx='23.5'
//           ry='25'
//           cx='450'
//           cy='375'
//           fill='url(#eye-light)'
//           filter='url(#inner-blur)'
//         />
//         <path
//           d='M311 530.5Q395 400.5 487 530.5 '
//           strokeWidth='20'
//           stroke='hsl(3, 100%, 51%)'
//           fill='none'
//           filter='url(#mouth-shadow)'
//         />
//         <path
//           d='M311 530.5Q395 400.5 487 530.5 '
//           strokeWidth='6.666666666666667'
//           stroke='url(#mouth-light)'
//           fill='none'
//           filter='url(#inner-blur)'
//         />
//       </g>
//     </svg>
//   )
// }

// function PositivoFour() {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       version='1.1'
//       xmlns:xlink='http://www.w3.org/1999/xlink'
//       xmlns:svgjs='http://svgjs.dev/svgjs'
//       viewBox='0 0 800 800'
//     >
//       <defs>
//         <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
//           <stop offset='70%' stopColor={changeColor} stopOpacity='0'></stop>
//           <stop offset='97%' stopColor='pepe' stopOpacity='1'></stop>
//         </radialGradient>
//         <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
//           <stop offset='0%' stopColor='riverplate' stopOpacity='0.75'></stop>
//           <stop offset='100%' stopColor={changeColor} stopOpacity='0'></stop>
//         </radialGradient>
//         <filter
//           id='ccclaymoji-blur'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feGaussianBlur
//             stdDeviation='30'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             in='SourceGraphic'
//             edgeMode='none'
//             result='blur'
//           ></feGaussianBlur>
//         </filter>
//         <filter
//           id='inner-blur'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feGaussianBlur
//             stdDeviation='2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             in='SourceGraphic'
//             edgeMode='none'
//             result='blur'
//           ></feGaussianBlur>
//         </filter>
//         <filter
//           id='eye-shadow'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feDropShadow
//             stdDeviation='10'
//             dx='10'
//             dy='10'
//             floodColor='#000000'
//             floodOpacity='0.2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             result='dropShadow'
//           ></feDropShadow>
//         </filter>
//         <linearGradient
//           gradientTransform='rotate(-25)'
//           id='eye-light'
//           x1='50%'
//           y1='0%'
//           x2='50%'
//           y2='100%'
//         >
//           <stop offset='20%' stopColor='#555555' stopOpacity='1'></stop>
//           <stop offset='100%' stopColor='black' stopOpacity='0'></stop>
//         </linearGradient>
//         <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
//           <stop offset='0%' stopColor='#ff9667' stopOpacity='1'></stop>
//           <stop
//             offset='100%'
//             stopColor='hsl(3, 100%, 51%)'
//             stopOpacity='0'
//           ></stop>
//         </linearGradient>
//         <filter
//           id='mouth-shadow'
//           x='-100%'
//           y='-100%'
//           width='400%'
//           height='400%'
//           filterUnits='objectBoundingBox'
//           primitiveUnits='userSpaceOnUse'
//           colorInterpolationFilters='sRGB'
//         >
//           <feDropShadow
//             stdDeviation='10'
//             dx='10'
//             dy='10'
//             floodColor='#c20000'
//             floodOpacity='0.2'
//             x='0%'
//             y='0%'
//             width='100%'
//             height='100%'
//             result='dropShadow'
//           ></feDropShadow>
//         </filter>
//       </defs>
//       <g strokeLinecap='round'>
//         <path
//           d='M618.5 450.0000026927275C618.5 576.847355633904 526.8473529411765 679.6764732809628 400 679.6764732809628C273.15320588235295 679.6764732809628 181.5 576.847355633904 181.5 450.0000026927275C181.5 323.15320857508044 273.15320588235295 220.3235321044922 400 220.3235321044922C526.8473529411765 220.3235321044922 618.5 323.15320857508044 618.5 450.0000026927275Z '
//           fill='pepe'
//           opacity='0.25'
//           filter='url(#ccclaymoji-blur)'
//         ></path>
//         <circle r='218.5' cx='400' cy='400' fill={changeColor}></circle>
//         <circle
//           r='218.5'
//           cx='400'
//           cy='400'
//           fill='url(#ccclaymoji-grad-dark)'
//         ></circle>
//         <circle
//           r='218.5'
//           cx='400'
//           cy='400'
//           fill='url(#ccclaymoji-grad-light)'
//         ></circle>
//         <ellipse
//           rx='23.5'
//           ry='26'
//           cx='351'
//           cy='375'
//           fill='black'
//           filter='url(#eye-shadow)'
//         ></ellipse>
//         <ellipse
//           rx='23.5'
//           ry='26'
//           cx='351'
//           cy='375'
//           fill='url(#eye-light)'
//           filter='url(#inner-blur)'
//         ></ellipse>
//         <ellipse
//           rx='23.5'
//           ry='25'
//           cx='450'
//           cy='375'
//           fill='black'
//           filter='url(#eye-shadow)'
//         ></ellipse>
//         <ellipse
//           rx='23.5'
//           ry='25'
//           cx='450'
//           cy='375'
//           fill='url(#eye-light)'
//           filter='url(#inner-blur)'
//         ></ellipse>
//         <path
//           d='M297 501.25Q364 596.25 503 501.25 '
//           strokeWidth='20'
//           stroke='hsl(3, 100%, 51%)'
//           fill='none'
//           filter='url(#mouth-shadow)'
//           transform='rotate(21, 400, 400)'
//         ></path>
//         <path
//           d='M297 501.25Q364 596.25 503 501.25 '
//           strokeWidth='6.666666666666667'
//           stroke='url(#mouth-light)'
//           fill='none'
//           filter='url(#inner-blur)'
//           transform='rotate(21, 400, 400)'
//         ></path>
//       </g>
//     </svg>
//   )
// }

export function PositivoOne() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <defs>
        <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
          <stop offset='70%' stopColor='hsl(351, 100%, 67%)' stopOpacity='0' />
          <stop offset='97%' stopColor='#c61945' stopOpacity='1' />
        </radialGradient>
        <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
          <stop offset='0%' stopColor='#ff8b9e' stopOpacity='0.75' />
          <stop offset='100%' stopColor='hsl(351, 100%, 67%)' stopOpacity='0' />
        </radialGradient>
        <filter
          id='ccclaymoji-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='30'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='inner-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='eye-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#000000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
        <linearGradient
          gradientTransform='rotate(-25)'
          id='eye-light'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
        >
          <stop offset='20%' stopColor='#555555' stopOpacity='1' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#ff9667' stopOpacity='1' />
          <stop offset='100%' stopColor='hsl(3, 100%, 51%)' stopOpacity='0' />
        </linearGradient>
        <filter
          id='mouth-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#c20000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
      </defs>
      <g strokeLinecap='round'>
        <path
          d='M622.5 450.0000011707511C622.5 579.1695024495235 529.1695012787724 683.881075339549 400 683.881075339549C270.83106777493606 683.881075339549 177.5 579.1695024495235 177.5 450.0000011707511C177.5 320.83106894568715 270.83106777493606 216.11892700195312 400 216.11892700195312C529.1695012787724 216.11892700195312 622.5 320.83106894568715 622.5 450.0000011707511Z '
          fill='#c61945'
          opacity='0.25'
          filter='url(#ccclaymoji-blur)'
        />
        <circle r='222.5' cx='400' cy='400' fill='hsl(351, 100%, 67%)' />
        <circle r='222.5' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
        <circle
          r='222.5'
          cx='400'
          cy='400'
          fill='url(#ccclaymoji-grad-light)'
        />
        <ellipse
          rx='34'
          ry='32'
          cx='350'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='34'
          ry='32'
          cx='350'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <ellipse
          rx='31'
          ry='29.5'
          cx='450'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='31'
          ry='29.5'
          cx='450'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <path
          d='M316 482Q356 654 484 482 '
          strokeWidth='15'
          stroke='hsl(3, 100%, 51%)'
          fill='none'
          filter='url(#mouth-shadow)'
        />
        <path
          d='M316 482Q356 654 484 482 '
          strokeWidth='5'
          stroke='url(#mouth-light)'
          fill='none'
          filter='url(#inner-blur)'
        />
      </g>
    </svg>
  )
}

export function PositivoTre() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <defs>
        <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
          <stop offset='70%' stopColor='hsl(341, 100%, 85%)' stopOpacity='0' />
          <stop offset='97%' stopColor='#cb839a' stopOpacity='1' />
        </radialGradient>
        <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
          <stop offset='0%' stopColor='#ffe6fe' stopOpacity='0.75' />
          <stop offset='100%' stopColor='hsl(341, 100%, 85%)' stopOpacity='0' />
        </radialGradient>
        <filter
          id='ccclaymoji-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='39'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='inner-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='eye-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#000000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
        <linearGradient
          gradientTransform='rotate(-25)'
          id='eye-light'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
        >
          <stop offset='20%' stopColor='#555555' stopOpacity='1' />
          <stop
            offset='100%'
            stopColor='hsla(0, 0%, 0%, 1.00)'
            stopOpacity='0'
          />
        </linearGradient>
        <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#ff8fff' stopOpacity='1' />
          <stop
            offset='100%'
            stopColor='hsla(290, 87%, 47%, 1.00)'
            stopOpacity='0'
          />
        </linearGradient>
        <filter
          id='mouth-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#8800ad'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
      </defs>
      <g strokeLinecap='round'>
        <path
          d='M606 449.99999562919595C606 573.0738575217791 517.0738618925832 672.8439853990169 394 672.8439853990169C270.9266803069054 672.8439853990169 182 573.0738575217791 182 449.99999562919595C182 326.92667593610133 270.9266803069054 227.156005859375 394 227.156005859375C517.0738618925832 227.156005859375 606 326.92667593610133 606 449.99999562919595Z '
          fill='#cb839a'
          opacity='0.48'
          filter='url(#ccclaymoji-blur)'
        />
        <circle r='212' cx='400' cy='400' fill='hsl(341, 100%, 85%)' />
        <circle r='212' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
        <circle r='212' cx='400' cy='400' fill='url(#ccclaymoji-grad-light)' />
        <ellipse
          rx='28'
          ry='26.5'
          cx='343'
          cy='368'
          fill='hsla(0, 0%, 0%, 1.00)'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='28'
          ry='26.5'
          cx='343'
          cy='368'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <ellipse
          rx='28.5'
          ry='28'
          cx='454'
          cy='372'
          fill='hsla(0, 0%, 0%, 1.00)'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='28.5'
          ry='28'
          cx='454'
          cy='372'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <path
          d='M277.5 467.75Q347.5 624.75 498.5 467.75 '
          strokeWidth='10'
          stroke='hsla(290, 87%, 47%, 1.00)'
          fill='none'
          filter='url(#mouth-shadow)'
        />
        <path
          d='M277.5 467.75Q347.5 624.75 498.5 467.75 '
          strokeWidth='3.3333333333333335'
          stroke='url(#mouth-light)'
          fill='none'
          filter='url(#inner-blur)'
        />
      </g>
    </svg>
  )
}

export function PositivoTwo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <defs>
        <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
          <stop offset='70%' stopColor='hsl(41, 100%, 67%)' stopOpacity='0' />
          <stop offset='97%' stopColor='#c89924' stopOpacity='1' />
        </radialGradient>
        <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
          <stop offset='0%' stopColor='#fffd88' stopOpacity='0.75' />
          <stop offset='100%' stopColor='hsl(41, 100%, 67%)' stopOpacity='0' />
        </radialGradient>
        <filter
          id='ccclaymoji-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='30'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='inner-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='eye-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#000000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
        <linearGradient
          gradientTransform='rotate(-25)'
          id='eye-light'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
        >
          <stop offset='20%' stopColor='#555555' stopOpacity='1' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#ff9667' stopOpacity='1' />
          <stop offset='100%' stopColor='hsl(3, 100%, 51%)' stopOpacity='0' />
        </linearGradient>
        <filter
          id='mouth-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#c20000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
      </defs>
      <g strokeLinecap='round'>
        <path
          d='M622.5 450.0000011707511C622.5 579.1695024495235 529.1695012787724 683.881075339549 400 683.881075339549C270.83106777493606 683.881075339549 177.5 579.1695024495235 177.5 450.0000011707511C177.5 320.83106894568715 270.83106777493606 216.11892700195312 400 216.11892700195312C529.1695012787724 216.11892700195312 622.5 320.83106894568715 622.5 450.0000011707511Z '
          fill='#c89924'
          opacity='0.25'
          filter='url(#ccclaymoji-blur)'
        />
        <circle r='222.5' cx='400' cy='400' fill='hsl(41, 100%, 67%)' />
        <circle r='222.5' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
        <circle
          r='222.5'
          cx='400'
          cy='400'
          fill='url(#ccclaymoji-grad-light)'
        />
        <ellipse
          rx='34'
          ry='32'
          cx='350'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='34'
          ry='32'
          cx='350'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <ellipse
          rx='31'
          ry='29.5'
          cx='450'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='31'
          ry='29.5'
          cx='450'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <path
          d='M316 482Q356 654 484 482 '
          strokeWidth='15'
          stroke='hsl(3, 100%, 51%)'
          fill='none'
          filter='url(#mouth-shadow)'
        />
        <path
          d='M316 482Q356 654 484 482 '
          strokeWidth='5'
          stroke='url(#mouth-light)'
          fill='none'
          filter='url(#inner-blur)'
        />
      </g>
    </svg>
  )
}

export function NegativeOne() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <defs>
        <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
          <stop offset='70%' stopColor='hsl(341, 100%, 85%)' stopOpacity='0' />
          <stop offset='97%' stopColor='#cb839a' stopOpacity='1' />
        </radialGradient>
        <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
          <stop offset='0%' stopColor='#ffe6fe' stopOpacity='0.75' />
          <stop offset='100%' stopColor='hsl(341, 100%, 85%)' stopOpacity='0' />
        </radialGradient>
        <filter
          id='ccclaymoji-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='30'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='inner-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='eye-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#000000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
        <linearGradient
          gradientTransform='rotate(-25)'
          id='eye-light'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
        >
          <stop offset='20%' stopColor='#555555' stopOpacity='1' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#baf3ff' stopOpacity='1' />
          <stop
            offset='100%'
            stopColor='hsla(212, 72%, 59%, 1.00)'
            stopOpacity='0'
          />
        </linearGradient>
        <filter
          id='mouth-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#0064b0'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
      </defs>
      <g strokeLinecap='round'>
        <path
          d='M625.5 449.9999962145715C625.5 580.9111087465408 530.9111125319694 687.0345230687915 400 687.0345230687915C269.08946419437336 687.0345230687915 174.5 580.9111087465408 174.5 449.9999962145715C174.5 319.0894604089449 269.08946419437336 212.96546936035156 400 212.96546936035156C530.9111125319694 212.96546936035156 625.5 319.0894604089449 625.5 449.9999962145715Z '
          fill='#cb839a'
          opacity='0.25'
          filter='url(#ccclaymoji-blur)'
        />
        <circle r='225.5' cx='400' cy='400' fill='hsl(341, 100%, 85%)' />
        <circle r='225.5' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
        <circle
          r='225.5'
          cx='400'
          cy='400'
          fill='url(#ccclaymoji-grad-light)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='350'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='350'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='450'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='450'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <path
          d='M296 517.5Q407 439.5 502 517.5 '
          strokeWidth='20'
          stroke='hsla(212, 72%, 59%, 1.00)'
          fill='none'
          filter='url(#mouth-shadow)'
        />
        <path
          d='M296 517.5Q407 439.5 502 517.5 '
          strokeWidth='6.666666666666667'
          stroke='url(#mouth-light)'
          fill='none'
          filter='url(#inner-blur)'
        />
      </g>
    </svg>
  )
}

export function NegativeTwo() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <defs>
        <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
          <stop offset='70%' stopColor='hsl(205, 100%, 80%)' stopOpacity='0' />
          <stop offset='97%' stopColor='#66a4cc' stopOpacity='1' />
        </radialGradient>
        <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
          <stop offset='0%' stopColor='#cdffff' stopOpacity='0.75' />
          <stop offset='100%' stopColor='hsl(205, 100%, 80%)' stopOpacity='0' />
        </radialGradient>
        <filter
          id='ccclaymoji-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='30'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='inner-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='eye-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#000000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
        <linearGradient
          gradientTransform='rotate(-25)'
          id='eye-light'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
        >
          <stop offset='20%' stopColor='#555555' stopOpacity='1' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#ff9667' stopOpacity='1' />
          <stop offset='100%' stopColor='hsl(3, 100%, 51%)' stopOpacity='0' />
        </linearGradient>
        <filter
          id='mouth-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#c20000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
      </defs>
      <g strokeLinecap='round'>
        <path
          d='M625.5 449.9999962145715C625.5 580.9111087465408 530.9111125319694 687.0345230687915 400 687.0345230687915C269.08946419437336 687.0345230687915 174.5 580.9111087465408 174.5 449.9999962145715C174.5 319.0894604089449 269.08946419437336 212.96546936035156 400 212.96546936035156C530.9111125319694 212.96546936035156 625.5 319.0894604089449 625.5 449.9999962145715Z '
          fill='#66a4cc'
          opacity='0.25'
          filter='url(#ccclaymoji-blur)'
        />
        <circle r='225.5' cx='400' cy='400' fill='hsl(205, 100%, 80%)' />
        <circle r='225.5' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
        <circle
          r='225.5'
          cx='400'
          cy='400'
          fill='url(#ccclaymoji-grad-light)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='350'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='350'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='450'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='450'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <path
          d='M311 530.5Q395 400.5 487 530.5 '
          strokeWidth='20'
          stroke='hsl(3, 100%, 51%)'
          fill='none'
          filter='url(#mouth-shadow)'
        />
        <path
          d='M311 530.5Q395 400.5 487 530.5 '
          strokeWidth='6.666666666666667'
          stroke='url(#mouth-light)'
          fill='none'
          filter='url(#inner-blur)'
        />
      </g>
    </svg>
  )
}

export function Neutral() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
    >
      <defs>
        <radialGradient id='ccclaymoji-grad-dark' r='93%' cx='20%' cy='20%'>
          <stop offset='70%' stopColor='hsl(50, 65%, 76%)' stopOpacity='0' />
          <stop offset='97%' stopColor='#b7aa6b' stopOpacity='1' />
        </radialGradient>
        <radialGradient id='ccclaymoji-grad-light' r='65%' cx='28%' cy='20%'>
          <stop offset='0%' stopColor='#ffffcb' stopOpacity='0.75' />
          <stop offset='100%' stopColor='hsl(50, 65%, 76%)' stopOpacity='0' />
        </radialGradient>
        <filter
          id='ccclaymoji-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='30'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='inner-blur'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feGaussianBlur
            stdDeviation='2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            in='SourceGraphic'
            edgeMode='none'
            result='blur'
          />
        </filter>
        <filter
          id='eye-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#000000'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
        <linearGradient
          gradientTransform='rotate(-25)'
          id='eye-light'
          x1='50%'
          y1='0%'
          x2='50%'
          y2='100%'
        >
          <stop offset='20%' stopColor='#555555' stopOpacity='1' />
          <stop offset='100%' stopColor='black' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='mouth-light' x1='50%' y1='0%' x2='50%' y2='100%'>
          <stop offset='0%' stopColor='#ffff8b' stopOpacity='1' />
          <stop
            offset='100%'
            stopColor='hsla(37, 91%, 55%, 1.00)'
            stopOpacity='0'
          />
        </linearGradient>
        <filter
          id='mouth-shadow'
          x='-100%'
          y='-100%'
          width='400%'
          height='400%'
          filterUnits='objectBoundingBox'
          primitiveUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feDropShadow
            stdDeviation='10'
            dx='10'
            dy='10'
            floodColor='#bd7600'
            floodOpacity='0.2'
            x='0%'
            y='0%'
            width='100%'
            height='100%'
            result='dropShadow'
          />
        </filter>
      </defs>
      <g strokeLinecap='round'>
        <path
          d='M625.5 449.9999962145715C625.5 580.9111087465408 530.9111125319694 687.0345230687915 400 687.0345230687915C269.08946419437336 687.0345230687915 174.5 580.9111087465408 174.5 449.9999962145715C174.5 319.0894604089449 269.08946419437336 212.96546936035156 400 212.96546936035156C530.9111125319694 212.96546936035156 625.5 319.0894604089449 625.5 449.9999962145715Z '
          fill='#b7aa6b'
          opacity='0.25'
          filter='url(#ccclaymoji-blur)'
        />
        <circle r='225.5' cx='400' cy='400' fill='hsl(50, 65%, 76%)' />
        <circle r='225.5' cx='400' cy='400' fill='url(#ccclaymoji-grad-dark)' />
        <circle
          r='225.5'
          cx='400'
          cy='400'
          fill='url(#ccclaymoji-grad-light)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='350'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='350'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='450'
          cy='375'
          fill='black'
          filter='url(#eye-shadow)'
        />
        <ellipse
          rx='23.5'
          ry='25'
          cx='450'
          cy='375'
          fill='url(#eye-light)'
          filter='url(#inner-blur)'
        />
        <path
          d='M296 496.75Q407 501.75 502 496.75 '
          strokeWidth='20'
          stroke='hsla(37, 91%, 55%, 1.00)'
          fill='none'
          filter='url(#mouth-shadow)'
          transform='rotate(18, 400, 400)'
        />
        <path
          d='M296 496.75Q407 501.75 502 496.75 '
          strokeWidth='6.666666666666667'
          stroke='url(#mouth-light)'
          fill='none'
          filter='url(#inner-blur)'
          transform='rotate(18, 400, 400)'
        />
      </g>
    </svg>
  )
}

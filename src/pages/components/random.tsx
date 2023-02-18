import React from 'react'
import {
  PositivoOne,
  PositivoTwo,
  PositivoTre,
  NegativeOne,
  NegativeTwo,
  Neutral
} from './icons'

type Props = {
  type: 'positive' | 'negative' | 'neutral'
}

const positiveSvgs = [PositivoOne, PositivoTwo, PositivoTre]
const negativeSvgs = [NegativeOne, NegativeTwo]

function getRandomSvg(
  svgs: React.FunctionComponent<React.SVGProps<SVGSVGElement>>[]
) {
  const randomIndex = Math.floor(Math.random() * svgs.length)
  return svgs[randomIndex]
}

function RandomSvg({ type }: Props) {
  let chosenSvg

  switch (type) {
    case 'positive':
      chosenSvg = getRandomSvg(positiveSvgs)
      break
    case 'negative':
      chosenSvg = getRandomSvg(negativeSvgs)
      break
    case 'neutral':
      chosenSvg = Neutral
      break
    default:
      chosenSvg = Neutral
      break
  }

  return <>{React.createElement(chosenSvg)}</>
}

export default RandomSvg

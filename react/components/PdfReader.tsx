import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'

import './styles.css'

type Props = {
  pdfUrl: string,
  width: number,
  height: number
}

const PdfReader = ({ pdfUrl, width, height }: Props) => {

  const CSS_HANDLES = [
    "pdf__container",
    "pdf__iframe"

  ]
  const handles = useCssHandles(CSS_HANDLES)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <div className='flex justify-center'>
        <object
        className={handles.pdf__container}
        data={pdfUrl}
        type="application/pdf"
        width={width}
        height={height}>
        <iframe
        className={handles.pdf__iframe}
        title='PDF' src={pdfUrl}
        width={width}
        height={height}>
            <p>Este navegador no soporta PDF!</p>
          </iframe>
        </object>
      </div>
    )
  )
}
export default PdfReader

import domReady from 'domready'

import '@/components/Article'

import '@/styles/index.scss'

domReady(() => {
  const { body } = document
  const node = document.createElement('aqua-article')

  node && body.appendChild(node)
})

import { AquaElement, customElement, html } from '@/core/AquaElement'

@customElement('aqua-article')
export class AquaArticle extends AquaElement {
  constructor() {
    super()
  }

  render() {
    return html`<span>Aqua Article</span>`
  }
}

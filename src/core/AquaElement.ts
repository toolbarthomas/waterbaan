import {
  css as LitCss,
  CSSResultGroup as LitCSSResultGroup,
  LitElement,
  html as LitHtml
} from 'lit'

import { createRef as LitCreateRef, ref as LitRef, Ref } from 'lit-html/directives/ref.js'
import { customElement as LitCustomElement } from 'lit/decorators.js'

import { DrupalJsonApiParams } from 'drupal-jsonapi-params'

export const createRef = LitCreateRef
export const css = LitCss
export const customElement = LitCustomElement
export const html = LitHtml
export const ref = LitRef

export type CSSResultGroup = LitCSSResultGroup

export type Props = {
  // Prevent focusTrap from looking up the defined Shadow Root context.
  minimalShadowRoot?: boolean
}

export class AquaElement extends LitElement {
  context?: Ref<Element>

  drupalJsonApi: DrupalJsonApiParams

  constructor(props?: Props) {
    super()

    this.drupalJsonApi = new DrupalJsonApiParams()

    console.log(this, props)
  }
}

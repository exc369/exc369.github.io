import '@testing-library/jest-dom'

// Stub ion-icon web component so jsdom doesn't throw on unknown elements
if (!customElements.get('ion-icon')) {
  customElements.define('ion-icon', class extends HTMLElement {})
}

// Stub window.scrollTo which is not implemented in jsdom
window.scrollTo = () => {}

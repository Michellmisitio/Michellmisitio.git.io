class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `&copy; 2021
      Palestina Barrios Dalia Michell - Grupo: IC-52M`;
  }
}
customElements.define(
  "mi-footer", MiFooter);
class MiElemento extends HTMLElement {
    constructor() {
      super();
      this.miPropiedad = 'Hola';
    }
  
    static get observedAttributes() {
      return ['texto'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      //La primera vez se vera null
      console.log(`Cambio: ${oldValue} → ${newValue}`);
      this.render();
    }
  
    //Trae el atributo de la etiqueta en el HTML
    //Trae la propiedad
    render() {
      this.innerHTML = 
        `<p>${this.getAttribute('texto')}</p>
        <p>${this.miPropiedad}</p>
      `;
  }
}
  
  customElements.define('mi-elemento', MiElemento);
  
  //Comentar y descomentar para que cambie el atributo
  window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('mi-elemento');
    el.setAttribute('texto', 'Otro texto');
  });
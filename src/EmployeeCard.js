class EmployeeCard extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("EmployeeCard")
        let templateContent = template.content;
        const shadowRoot = this.attachShadow({mode: 'open'}).appendChild(templateContent.cloneNode(true));
    }
  }
  customElements.define("employee-card",EmployeeCard);
  
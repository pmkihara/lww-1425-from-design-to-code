import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit-movie"
export default class extends Controller {
  static targets = ['form', 'info']

  displayForm() {
    this.formTarget.classList.remove('d-none')
    this.infoTarget.classList.add('d-none')
  }

  update(event) {
    event.preventDefault()
    const url = this.formTarget.action
    fetch(url, {
      method: 'PATCH',
      headers: {Accept: 'text/plain'},
      body: new FormData(this.formTarget)
    })
      .then(response => response.text())
      .then((data) => {
        this.element.outerHTML = data
      })
  }
}

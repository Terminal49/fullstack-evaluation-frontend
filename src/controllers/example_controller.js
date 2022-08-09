import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.load()
  }
  load() {
    fetch('http://localhost:8000')
      .then(response => response.json())
      .then(response => this.element.innerHTML = response.message)
  }
}

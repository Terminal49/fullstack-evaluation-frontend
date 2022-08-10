import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ 'Query' ]
  static values = { url: String }
  go(_event) {
    const query = this.QueryTarget.value;
    window.location.assign(`http://localhost:9000/entry?id=${query}`)
  }
}

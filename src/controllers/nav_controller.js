import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  gohome(_event) {
    window.location.assign('http://localhost:9000');
  }
}

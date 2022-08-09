import { Controller } from "@hotwired/stimulus"
import { toSnakeCase } from 'js-convert-case';

export default class extends Controller {
  static targets = [ 'Bl', 'ArrivalDate', 'Scac', 'CarrierName', 'PodCustomsCode', 'NumberContainers', 'NotificationParty', 'Consignee', 'HsCode', 'HsChapter', 'PortLabel', 'HsDesc', ]
  connect() {
    const entry_id = (new URL(document.location)).searchParams.get('id')
    this.load(entry_id)
  }
  clear() {
    this.constructor.targets.forEach(target => {
      this[target+'Target'].textContent = ''
    });
  }
  load(entry_id) {
    fetch(`http://localhost:8000/entry/${entry_id}`)
      .then(response => response.json())
      .then(response => {
        this.constructor.targets.forEach(target => {
          console.log(response[toSnakeCase(target)])
          this[target+'Target'].textContent = response[toSnakeCase(target)];
        });
      })
  }
}

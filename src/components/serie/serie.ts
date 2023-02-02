import { ProtoSerieStructure } from "../../models/serie";
import { Component } from "../component/component";

export class Serie extends Component {
  constructor(
    public selector: string,
    public serie: ProtoSerieStructure,
    public deleteSerie: (id: ProtoSerieStructure['id']) => void,
    public updateSerie: (task: ProtoSerieStructure) => void
  ) {
    super();
    this.serie = { ...serie };
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector(`#d${this.serie.id}`)
      ?.addEventListener('click', () => {
        this.deleteSerie(this.serie.id);
      });
    document
      .querySelector(`#s${this.serie.id}`)
      ?.addEventListener('change', () => {
        this.serie.watched = true
        this.updateSerie(this.serie);
      });
  }

  createTemplate() {
    return `
    <li class="serie">
              <img class="serie__poster"
                src="${this.serie.poster}"
                alt="${this.serie.name}" />
              <h4 class="${this.serie.name}">Game of Thrones</h4>
              <p class="${this.serie.creator}${this.serie.year}">David Benioff D. B. Weiss (2011)</p>
              <ul class="score">
                <li class="s${this.serie.score}">
                  <i class="icon--score fas fa-star" title="1/5"></i>
                </li>
                <li class="s${this.serie.score}">
                  <i class="icon--score fas fa-star" title="2/5"></i>
                </li>
                <li class="s${this.serie.score}">
                  <i class="icon--score fas fa-star" title="3/5"></i>
                </li>
                <li class="s${this.serie.score}">
                  <i class="icon--score fas fa-star" title="4/5"></i>
                </li>
                <li class="s${this.serie.score}">
                  <i class="icon--score fas fa-star" title="5/5"></i>
                </li>
              </ul>
              <i id="d${this.serie.score}" class="fas fa-times-circle icon--delete"></i>
            </li>`;
  }
}

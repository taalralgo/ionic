import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: any;
  public selectItem: any;
  public abonne: any;
  constructor(navCtrl: NavController, public http: HttpClient) {
    this.getData();
    this.getAbonnement();
  }

  getData() {

    let url = 'http://localhost:8000/abonnement/factures/' + this.abonne;
    const data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
      console.log(result);
    });


  }

  getAbonnement() {
    let url = 'http://localhost:8000/abonnement';
    const data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      /* console.log(result); */
      this.selectItem = result;
    });
  }

  getId(place: any) {
    this.abonne = place;
    this.getData();
    console.log('val selected: ', place);

  }

}

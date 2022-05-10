import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentYear:number;
  constructor(private _translateService: TranslateService) {
    this._translateService.addLangs(['en', 'pt']);
    this._translateService.setDefaultLang('pt');
    this.currentYear=new Date().getFullYear();
  }

  ngOnInit(): void {
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", 'en');
    }
    let lang:any=localStorage.getItem("lang");
    this._translateService.setDefaultLang(lang);
    this._translateService.use(lang);
  }

}

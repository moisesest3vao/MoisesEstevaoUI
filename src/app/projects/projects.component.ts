import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as portuguese } from '../shared/i18n/pt';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  venobox: any;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, portuguese);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){

      }
      else{

      }
    });
  }

  ngOnInit(): void {

  }

  openAlura(){
    window.open('https://www.linkedin.com/posts/moises-estevao_java-data-security-activity-6918434110222782464-r3f4?utm_source=linkedin_share&utm_medium=member_desktop_web');
  }
  gitAlura(){
    window.open('https://github.com/moisesest3vao/ForumAPI.git');
  }
  openToquio(){
    window.open('https://toquiolounge.herokuapp.com/#/home');
  }
  gitToquio(){
    window.open('https://github.com/moisesest3vao/ToquioLounge');
  }
  ngAfterViewInit(){
    console.log("after view init");
    this.onMouse("portfolio-link", "portfolio-img");
    this.onMouse("teamTraveler-link", "teamTraveler-img");
    this.onMouse("mautic-link", "mautic-img");
    this.onMouse("pokedex-link", "pokedex-img");
    this.onMouse("riddle-link", "riddle-img");
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink).on("mouseenter", function () {
      console.log('on mouseenter');
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );

    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );
  }
}

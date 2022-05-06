import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as portuguese } from '../shared/i18n/pt';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"Java, Spring Boot",percent:90,remark:'excellent'},{name:"JavaScript, TypeScript, Angular",percent:70,remark:'very-good'},{name:"HTML, CSS, Bootstrap",percent:50,remark:'average'}],
    tools:[{name:"Git",percent:90,remark:'excellent'},{name:"MySql, MariaDB",percent:70,remark:'very-good'},{name:"Linux, Windows",percent:70,remark:'very-good'}],
    methodologies:[{name:"Clean-Code",percent:70,remark:'very-good'},{name:"Scrum",percent:50,remark:'average'},{name:"Cybersecurity",percent:50,remark:'average'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, portuguese);
  }

  ngOnInit(): void {
  }

}

    
    
  

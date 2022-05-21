import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent implements OnInit {
  delayInMilliseconds = 1000;
  text:string;
  displayText:string = ''
  audio:any;
  constructor() {
    this.text = 'Em sua jornada ao desconhecido, voce descobre uma torre desgastada pelo tempo e intemperies. Ao se aproximar, voce cai em um buraco escondido por arbustos e se depara com uma criatura amorfa a sua frente.'
   this.audio = new Audio("../../assets/sounds/click1.wav");
   this.audio.load();

   }

  ngOnInit(): void {
    this.writeText()
  }

  async writeText(){
    for (let i = 0; i < this.text.length ; i++) {
      const char = this.text[i]
      this.concatText(char)
      let delayres = await this.delay(100)
    }
  }
  delay(delayInms:number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
  concatText(char:string):string{
    //this.playAudio();
    return this.displayText = this.displayText + char
  }
  playAudio(){
    this.audio.play();
  }
}

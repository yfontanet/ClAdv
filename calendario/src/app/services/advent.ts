
import { Injectable } from '@angular/core';

export interface AdventGift {
  day: number;
  title: string;
  image: string;
  riddle: string;
}

@Injectable({
  providedIn: 'root'
})
export class Advent {

  gifts: AdventGift[] = [
    { day: 1, title: 'Primera sorpresa', image: 'assets/gifts/img1.jpg', riddle: 'Tinc agulles i no sé cosir, sóc verd tot l’any i per Nadal em solen guarnir.' },
    { day: 2, title: 'Segona sorpresa', image: 'assets/gifts/img2.jpg', riddle: 'Em pengen ben amunt, sóc rodona i brillant, i quan arriba Nadal dono llum a cada instant.' },
    { day: 3, title: 'Tercera sorpresa', image: 'assets/gifts/img3.jpg', riddle: 'No tinc ales i puc volar, no tinc boca i puc xiular. Quan arriba l’hivern, em pots notar.' },
    { day: 4, title: 'Quarta sorpresa', image: 'assets/gifts/img4.jpg', riddle: 'Sóc blanca i freda, caic del cel sense fer soroll. Si m’ajunto amb moltes com jo, vesteixo de blanc tot el món.' },
    { day: 5, title: 'Cinquena sorpresa', image: 'assets/gifts/img5.jpg', riddle: 'Tinc moltes pàgines, però no sóc un llibre. Si em mires cada matí, t’explico quin dia és.' },
    { day: 6, title: 'Sisena sorpresa', image: 'assets/gifts/img6.JPG', riddle: 'Sóc petit i dolç, em pengen de l’arbre i sovint tinc forma de bastó.'},
    { day: 7, title: 'Setena sorpresa', image: 'assets/gifts/img7.jpg', riddle: 'Tinc una cara i dues mans, però mai no aplaudeixo. T’ajudo a saber quan arriba cada moment.'},
    { day: 8, title: 'Vuitena sorpresa', image: 'assets/gifts/img8.JPG', riddle: 'Com més em treus, més gran em faig. Què sóc?'},
    { day: 9, title: 'Novena sorpresa', image: 'assets/gifts/img9.JPG', riddle: 'Em posen al cap quan fa fred, tinc una borla i no sóc cap animal.'},
    { day: 10, title: 'Desena sorpresa', image: 'assets/gifts/img10.jpg', riddle: 'Sóc plena de paraules, però no parlo. Em pots obrir i descobrir mil històries.'},
    { day: 11, title: 'Onzena sorpresa', image: 'assets/gifts/img11.JPG', riddle: 'No sóc el sol, però dono escalfor; no sóc una estrella, però brillo a la foscor.'},
    { day: 12, title: 'Dotzena sorpresa', image: 'assets/gifts/img12.jpg', riddle: 'Tinc dents i no menjo, tinc cap i no penso. Sempre em tens al cap.'},
    { day: 13, title: 'Tretzena sorpresa', image: 'assets/gifts/img13.jpg', riddle: 'Com més sec estic, més m’embruto quan t’eixugo.'},
    { day: 14, title: 'Catorzena sorpresa', image: 'assets/gifts/img14.jpg', riddle: 'Em trenques abans d’utilitzar-me i, quan em cuines, puc ser un bon esmorzar.'},
    { day: 15, title: 'Quinzena sorpresa', image: 'assets/gifts/img15.jpg', riddle: 'Sóc rodona com una pilota, però no sóc per jugar. Tinc formatge, tomàquet i et puc fer salivar.'},
    { day: 16, title: 'Setzena sorpresa', image: 'assets/gifts/img16.jpg', riddle: 'No estic al cel, tinc cinc puntes i puc decorar l’arbre.'},
    { day: 17, title: 'Dissetena sorpresa', image: 'assets/gifts/img17.jpg', riddle: 'Tinc moltes tecles, però no obro cap porta. Si em prems, puc fer música.'},
    { day: 18, title: 'Divuitena sorpresa', image: 'assets/gifts/img18.jpg', riddle: 'Em poses als peus per sortir al carrer, però mai no camino sola.'},
    { day: 19, title: 'Dinovena sorpresa', image: 'assets/gifts/img19.jpg', riddle: 'Sóc dolç, calent i sovint em beus quan fa fred.'},
    { day: 20, title: 'Vintena sorpresa', image: 'assets/gifts/img20.jpg', riddle: 'No tinc cames, però pujo i baixo. Tinc graons i t’ajudo a arribar més amunt.'},
    { day: 21, title: 'Vint-i-unena sorpresa', image: 'assets/gifts/img21.JPG', riddle: 'Sóc un regal que no pots embolicar, però quan em comparteixes pots fer feliç algú.'},
    { day: 22, title: 'Vint-i-dosena sorpresa', image: 'assets/gifts/img22.jpg', riddle: 'Tinc un coll, però no tinc cap; tinc mànigues, però no tinc braços. A l’hivern em poses per no passar fred.'},
    { day: 23, title: 'Vint-i-tresena sorpresa', image: 'assets/gifts/img23.JPG', riddle: 'Arribo després del dia i abans del matí. Quan aparec, el cel s’omple d’estrelles.'},
    { day: 24, title: 'Vint-i-quatrena sorpresa', image: 'assets/gifts/img24.jpg', riddle: 'Sóc un dia molt especial, arribo el 25 de desembre i celebro una festa plena de màgia.'}
  ];

  getGifts(): AdventGift[] {
    return this.gifts;
  }

  getGift(day: number): AdventGift | undefined {
    return this.gifts.find(gift => gift.day === day);
  }

   isGiftAvailable(day: number): boolean {
      const today = new Date();
      return today.getMonth() === 11 &&
            today.getDate() >= day;
    }
}

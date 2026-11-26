
import { Injectable } from '@angular/core';

export interface AdventGift {
  day: number;
  title: string;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class Advent {

  gifts: AdventGift[] = [
    { day: 1, title: 'Primera sorpresa', description: 'Una petita sorpresa per començar desembre.', image: 'assets/gifts/regalo-1.jpg' },
    { day: 2, title: 'Segona sorpresa', description: 'Avui tenim una cosa especial preparada.', image: 'assets/gifts/regalo-2.jpg' },
    { day: 3, title: 'Tercera sorpresa', description: 'Cada dia amaga una nova il·lusió.', image: 'assets/gifts/regalo-3.jpg' },
    { day: 4, title: 'Quarta sorpresa', description: 'Una sorpresa més per gaudir.', image: 'assets/gifts/regalo-4.jpg' },
    { day: 5, title: 'Cinquena sorpresa', description: 'Continuem descobrint regals!', image: 'assets/gifts/regalo-5.jpg' },
    { day: 6, title: 'Sisena sorpresa', description: 'Avui t’espera una cosa diferent.', image: 'assets/gifts/regalo-6.jpg' },
    { day: 7, title: 'Setena sorpresa', description: 'Una nova sorpresa t’espera.', image: 'assets/gifts/regalo-7.jpg' },
    { day: 8, title: 'Vuitena sorpresa', description: 'Ja anem avançant!', image: 'assets/gifts/regalo-8.jpg' },
    { day: 9, title: 'Novena sorpresa', description: 'Un petit detall per a tu.', image: 'assets/gifts/regalo-9.jpg' },
    { day: 10, title: 'Desena sorpresa', description: 'Deu dies plens d’il·lusió.', image: 'assets/gifts/regalo-10.jpg' },
    { day: 11, title: 'Onzena sorpresa', description: 'Una nova pista sobre el que vindrà.', image: 'assets/gifts/regalo-11.jpg' },
    { day: 12, title: 'Dotzena sorpresa', description: 'Avui toca una sorpresa especial!', image: 'assets/gifts/regalo-12.jpg' },
    { day: 13, title: 'Tretzena sorpresa', description: 'Continuem sumant moments.', image: 'assets/gifts/regalo-13.jpg' },
    { day: 14, title: 'Catorzena sorpresa', description: 'Una altra petita sorpresa per a tu.', image: 'assets/gifts/regalo-14.jpg' },
    { day: 15, title: 'Quinzena sorpresa', description: 'Ja falta menys per Nadal.', image: 'assets/gifts/regalo-15.jpg' },
    { day: 16, title: 'Setzena sorpresa', description: 'Avui tenim una cosa preparada.', image: 'assets/gifts/regalo-16.jpg' },
    { day: 17, title: 'Dissetena sorpresa', description: 'Una nova sorpresa t’està esperant.', image: 'assets/gifts/regalo-17.jpg' },
    { day: 18, title: 'Divuitena sorpresa', description: 'Cada vegada som més a prop!', image: 'assets/gifts/regalo-18.jpg' },
    { day: 19, title: 'Dinovena sorpresa', description: 'Un nou dia, una nova il·lusió.', image: 'assets/gifts/regalo-19.jpg' },
    { day: 20, title: 'Vintena sorpresa', description: 'Entrem a la recta final.', image: 'assets/gifts/regalo-20.jpg' },
    { day: 21, title: 'Vint-i-unena sorpresa', description: 'El Nadal és molt a prop!', image: 'assets/gifts/regalo-21.jpg' },
    { day: 22, title: 'Vint-i-dosena sorpresa', description: 'Una sorpresa més per descobrir.', image: 'assets/gifts/regalo-22.jpg' },
    { day: 23, title: 'Vint-i-tresena sorpresa', description: 'Demà serà un dia molt especial.', image: 'assets/gifts/regalo-23.jpg' },
    { day: 24, title: 'La gran sorpresa', description: 'Bon Nadal! Avui t’espera una cosa molt especial.', image: 'assets/gifts/regalo-24.jpg' }
  ];

  getGifts(): AdventGift[] {
    return this.gifts;
  }

  getGift(day: number): AdventGift | undefined {
    return this.gifts.find(gift => gift.day === day);
  }

  // isGiftAvailable(day: number): boolean {
  //  const today = new Date();

  //  return today.getMonth() === 11 &&
  //         today.getDate() === day;
  //}
  isGiftAvailable(day: number): boolean {
    return true;
  }
}

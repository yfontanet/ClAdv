import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Advent, AdventGift } from '../../services/advent';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss'
})
export class Calendar {

  private adventService = inject(Advent);
  private router = inject(Router);

  gifts: AdventGift[] = this.adventService.getGifts();

  // Imatges decoratives del mosaic
  // Només els dies inclosos aquí tindran fotografia.
  calendarImages: Record<number, string> = {
    1: 'assets/calendar/rojo.png',
    2: 'assets/calendar/img17.jpg',
    3: 'assets/calendar/img2.jpg',
    4: 'assets/calendar/img15.jpg',
    5: 'assets/calendar/rojo.png',
    6: 'assets/calendar/img10.jpg',
    7: 'assets/calendar/img9.jpg',
    8: 'assets/calendar/img3.jpg',
    9: 'assets/calendar/img16.jpg',
    10: 'assets/calendar/img5.jpg',
    11: 'assets/calendar/verde.png',
    12: 'assets/calendar/img13.jpg',
    13: 'assets/calendar/amarillo.png',
    14: 'assets/calendar/img11.jpg',
    15: 'assets/calendar/img7.jpg',
    16: 'assets/calendar/img4.jpg',
    17: 'assets/calendar/img24.jpg',
    18: 'assets/calendar/img20.jpg',
    19: 'assets/calendar/img25.jpg',
    20: 'assets/calendar/img12.jpg',
    21: 'assets/calendar/img27.jpg',
    22: 'assets/calendar/verde.png',
    23: 'assets/calendar/amarillo.png',
    24: 'assets/calendar/img22.jpg'
  };

  getCalendarBackground(day: number): string | null {
    const image = this.calendarImages[day];
    if (!image) return null;

    const overlay = this.isAvailable(day)
      ? `rgba(16, 31, 24, 0.05), rgba(16, 31, 24, 0.18)`
      : `rgba(5, 12, 8, 0.72), rgba(5, 12, 8, 0.88)`;

    return `linear-gradient(
      180deg,
      ${overlay}
    ), url("${image}")`;
  }

  isAvailable(day: number): boolean {
    return this.adventService.isGiftAvailable(day);
  }

  openGift(day: number): void {
    if (this.isAvailable(day)) {
      this.router.navigate(['/regalo', day]);
    }
  }

  get availableGifts(): number {
    return this.gifts.filter(gift =>
      this.isAvailable(gift.day)
    ).length;
  }
}

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

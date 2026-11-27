
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Advent, AdventGift } from '../../services/advent';

@Component({
  selector: 'app-gift',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gift.html',
  styleUrl: './gift.scss'
})
export class Gift {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private adventService = inject(Advent);

  gift: AdventGift | undefined;

  constructor() {

    const day = Number(
      this.route.snapshot.paramMap.get('day')
    );

    const selectedGift = this.adventService.getGift(day);

    // Comprobar que el regalo existe y está disponible
    if (
      !selectedGift ||
      !this.adventService.isGiftAvailable(day)
    ) {
      void this.router.navigate(['/calendario']);
      return;
    }

    this.gift = selectedGift;
  }

}

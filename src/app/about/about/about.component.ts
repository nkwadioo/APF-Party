import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  styleUrls: ['./about.component.scss'],
  template: `
    <app-header [title]="'About Us'" />

    <h2>African People First (APF)</h2>
    <section>
      <p>We are a political party founded on the principles of New Africanism, an ideology advocating for the empowerment, unity, and prosperity of African people. Established on November 8, 2020, in Kwamashu L Section Community Hall, the APF seeks to be a beacon of change, encouraging a return to greatness under the slogan 'Africa Must Be Great Again'</p>

      <p>Born from a consultative conference, APF was created to be a socialist but Africanist revolutionary movement, with its unique ideology, New Africanism. This ideology is founded on five pillars that serve as the basis for all policies and objectives: Land, Economy, Afro-Modernism, Ubuntu, and Race.</p>
    </section>
    <main>
      <div class="topic">
        <h2 class="heading">Our Core Principles</h2>
        <ol>
          <li> <span class="sub-heading">Putting South Africans First</span>: APF focuses on the interests of the black Africans, the indigenous people of South Africa, recognizing them as the true owners of the land.</li>
          <li> <span class="sub-heading">Non-Racial & Non-Sexist Stance</span>: The APF fosters a culture that is non-racial, anti-racist, non-sexist, and against any form of tribal exclusivism.</li>
          <li> <span class="sub-heading">Freedom of Speech & Accountability</span>:  Encouraging the free circulation of ideas and information, the APF's policies are shaped by its membership, and its leadership is held accountable in alignment with its constitution.</li>
        </ol>
      </div>
      <div class="topic">
        <h2 class="heading">Our Ideology - <em>New Africanism</em></h2>
        <p>New Africanism is a new way of thinking and living for Africans. It envisions</p>
        <ul>
          <li><span class="sub-heading">Shared Economy</span>: Driven by Africans for the benefit of all, promoting self-reliance, and powered by the buying power of Africans</li>
          <li><span class="sub-heading">Income for All</span>: Recognizing the necessity of income for survival, advocating that governments and income-earners assist those without.</li>
          <li><span class="sub-heading">Land Ownership</span>: Emphasizing that the land belongs to the indigenous people, not to be sold, but governed by the government, kings/chiefs, and land committees.</li>
          <li><span class="sub-heading">Character of a New African</span>: Guided by Intelligence, Healthiness, Prosperity, and Discipline, a New African must embody winning attributes like industriousness, selflessness, and clean living.</li> 
        </ul>
      </div>
    </main>
    <p class="outro">
      <span class="underline"></span>
    African People First is not just a political party but an institution of rebirth, grounded in the principles that have shaped Africa's past and will forge its future. Guided by the ideology of New Africanism, APF stands as a symbol of hope and strength for a continent on the rise, where every African is empowered to return to greatness. Join us in our journey to make Africa great again.
    </p>
    <img src="/assets/images/about.jpg" alt="">
  `,
})
export class AboutComponent {

}

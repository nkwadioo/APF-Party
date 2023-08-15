import { Component } from '@angular/core';

@Component({
  selector: 'app-structure',
  styleUrls: ['./structure.component.scss'],
  template: `
    <app-header [title]="'Structure'" />

    <div class="container">
      <main>
        <section class="topic">
          <h3>Main Organs</h3>
          <ol>
            <li><span class="sub-heading">National Level</span>: The National Conference: Elects the National Executive Committee (NEC), forming the highest decision-making body within the organization.</li>
            <li><span class="sub-heading">Provincial Level</span>: The Provincial Conference: Elects the Provincial Executive Committee (PEC), responsible for the party's actions at the provincial level.</li>
            <li><span class="sub-heading">Regional Level</span>: The Regional Conference: Elects the Regional Executive Committee (REC), coordinating the party's activities within the region.</li>
            <li><span class="sub-heading">Branch Level</span>: The Branch Annual General Meeting: Elects the Branch Executive Committee (BEC), driving the grassroots engagement and initiatives of the party.</li>
          </ol>
        </section>
        <section class="topic">
          <h3>Specialized Organs</h3>
          <ol>
            <li><span class="sub-heading">APF Women's League</span> (MAMA AFRICA):
              <ul>
                <li>Open to women who are members of APF.</li>
                <li>Structured at the national, provincial, and branch levels.</li>
                <li>Focuses on defending and advancing women's rights and ensuring their full participation in all areas of life.</li>
              </ul>
            </li>
            <li><span class="sub-heading">APF Young Lions</span>: 
              <ul>
                <li>Open to individuals aged 13 to 35 (full membership of APF required for those over 18).</li>
                <li>Operates on a national, provincial, and branch basis.</li>
                <li>Aims to unite and lead the youth in confronting youth-related problems, enhancing education, enterprise development, training, and skill development.</li>
                <li>Works towards eradicating poverty and sustaining economic freedom for the youth.</li>
              </ul>
            </li>
          </ol>
        </section>
      </main>
    </div>
  `,
})
export class StructureComponent {

}

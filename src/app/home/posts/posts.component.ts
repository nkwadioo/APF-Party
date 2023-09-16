import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  styleUrls: ['./posts.component.scss'],
  template: `
    <section class="container">
      <h3 class="heading">{{year}} Statements / Events</h3>
      <div class="post" *ngFor="let post of posts">
        <img [src]="post.image" alt="poster image">
        <main *ngIf="post.details">
          <div class="header">
            <p class="title">{{post.details.header.title}}</p>
            <i class="date-time">{{post.details.header.date}}</i>
          </div>
          <div class="body">
            <p *ngFor="let text of post.details.body">{{text}}</p>
          </div>
          <div class="footer" *ngIf="post.details.footer">
            <button><a [href]="'tel:+'+post.details.footer.rsvp">RSVP</a></button>
            <span class="number">{{post.details.footer.rsvp}}</span>
          </div>
        </main>
      </div>
    </section>
  `
})
export class PostsComponent {
  year = new Date().getFullYear();
  posts: Post[] = [
    {
      image: '/assets/images/posts/09 Aug.png',
      details: {
        header: {
          title: 'Mama Africa, Moving Forward',
          date: '09 August 2023, 09:00 AM'
        },
        body: [
          `This Women's Day, we gather to honor the indomitable spirit, wisdom, and resilience of the women who shape our nation. "Mama Africa" is not just an event; it's a celebration of the mothers, sisters, daughters, and leaders who are the very soul of our communities`,
          `In the spirit of unity, justice, and equality, African People First invites you to join us in paying tribute to the women who inspire us every day. Together, we'll embrace the rich cultural tapestry that women have woven throughout our history and look to a future where every woman's voice is heard, respected, and empowered.`
        ],
        footer: {
          rsvp: '0745869852'
        }
      }
    },
    {
      image: '/assets/images/posts/30 JulyEvent.png',
      details: {
        header: {
          title: 'BGM Meeting: Building a United Future',
          date: '30 July 2023, 10:00 AM'
        },
        body: [
          `We cordially invite you to our upcoming Branch General Meeting (BGM), a pivotal gathering where we will join hands to strategize, reflect, and ignite our commitment to the core principles of unity, justice, and equality that define our movement.
          At this BGM, we will:`,
          `Review Progress: Analyze our achievements and identify areas for growth.
          Shape Strategy: Collaboratively chart our future course and set tangible goals.
          Engage Members: Foster open dialogue, empower voices, and strengthen our community bonds.`,
          `Your insights, passion, and dedication are essential to our collective journey towards a South Africa that honors the rights, dignity, and potential of every citizen.`
        ],
        footer: {
          rsvp: '0745869852'
        }
      }
    },
  ];
}

interface Post {
  image: string;
  details: {
    header: {
      title: string;
      date: string;
    };
    body: string[];
    footer?: {
      rsvp?: string;
    };
  }
}

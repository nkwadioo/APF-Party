import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  styleUrls: ['./member.component.scss'],
  template: `
  <app-header [title]="'Membership'"/>
  <section class="header">
    <video width="640" height="360" controls>
      <source src="/assets/videos.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <h4>
    Join African People First (APF) - <em>Become Part of Change. Become</em> <span>a member of the APF and join a movement committed to putting Africans first. Embrace the ideology of New Africanism and be part of an organization that stands for unity, empowerment, equality, and prosperity.</span>
    </h4>
  </section>
  <div class="info">
    <p>For more information, please contact our membership office at membership@apf.org or call us at 0752568520.</p>
    <p>Join us today and be part of a movement that believes in the greatness of Africa. Together, we can make 'Africa Must Be Great Again' a reality!</p>
  </div>
  <div class="form-wrapper">
    <!-- <fieldset> -->
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <!-- <legend>Membership Registration</legend>
        <mat-form-field appearance="outline">
          <mat-label>First Name</mat-label>
          <input matInput placeholder="First Name" formControlName="firstName" required>
          <mat-error *ngIf="form.get('firstName')?.hasError('required')">First Name is required</mat-error>
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>Surname</mat-label>
          <input matInput placeholder="Surname" formControlName="surname" required>
          <mat-error *ngIf="form.get('surname')?.hasError('required')">Surname is required</mat-error>
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>Cellphone number</mat-label>
          <input matInput placeholder="Cellphone number" formControlName="cellphone" required>
          <mat-error *ngIf="form.get('cellphone')?.hasError('required')">Valid cellphone number is required</mat-error>
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>ID Number</mat-label>
          <input matInput placeholder="SA ID Number" formControlName="saIdNumber" required>
          <mat-error *ngIf="form.get('saIdNumber')?.hasError('required')">Valid SA ID number is required</mat-error>
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>Street Address</mat-label>
          <input matInput placeholder="Street address" formControlName="streetAddress" required>
          <mat-error *ngIf="form.get('streetAddress')?.hasError('required')">Street address is required</mat-error>
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>Suburb</mat-label>
          <input matInput placeholder="Suburb" formControlName="suburb">
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>City or Town</mat-label>
          <input matInput placeholder="City or town" formControlName="cityOrTown">
        </mat-form-field>
  
        <mat-form-field appearance="outline">
          <mat-label>Postal Code</mat-label>
          <input matInput placeholder="Postal code" formControlName="postalCode" required>
          <mat-error *ngIf="form.get('postalCode')?.hasError('required')">vValid postal code is required</mat-error>
        </mat-form-field> -->
  
        <div class="login">
          <button mat-raised-button type="button" (click)="login('Member')">Member Login</button>
          <button mat-raised-button type="button" (click)="login('Offical')">Official Login</button>
        </div> 
        <button mat-raised-button type="submit">Member Registration</button>
      </form>
    <!-- </fieldset> -->
  </div>
  <div class="strip"></div>

  `,
})
export class MemberComponent implements AfterViewInit {

  form = this.fb.group({
    firstName: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    cellphone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    saIdNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{13}$/)]],
    streetAddress: ['', [Validators.required]],
    suburb: [''],
    cityOrTown: [''],
    postalCode: ['', [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
  });

  constructor(private fb: FormBuilder, private route: Router) {
    
  }

  ngAfterViewInit() {
    // this.route.navigateByUrl('https://google.com')
    
  } 

  onSubmit() {
    window.open('https://africanpeoplefirst.org/customer/create', '_blank');
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      // Handle invalid form
    }
  }

  login(userType: string) {
    if(userType == 'Member')
      window.open('https://africanpeoplefirst.org/account/login', '_blank');
    else
      window.open('https://africanpeoplefirst.org/account/merchantlogin', '_blank');
  }

}

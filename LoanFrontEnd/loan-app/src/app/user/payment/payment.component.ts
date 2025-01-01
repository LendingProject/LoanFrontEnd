import { Component, OnInit } from '@angular/core';
import { loadStripe } from '@stripe/stripe-js';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  stripe: any;
  elements: any;
  card: any;
  amount: number = 0;

  async ngOnInit() {
    this.stripe = await loadStripe('pk_test_51QastOD8e7FPtoIf5ENSb8nuwh6GFRwbyBU5A6WQ55sjusHTCGOGl1e2qm2TfmdGSSs2m2Us4uydmDWTZZNLznNd00gO3Xq0tx');
    this.elements = this.stripe.elements();
    this.card = this.elements.create('card');
    this.card.mount('#card-element');
  }

  async handlePayment() {
    const stripe_secret_key = "sk_test_51QastOD8e7FPtoIfAPwNgOp6gmGNyCeus11HLiBH8FIIdjpTGUMHdauuol2EbuRrshomSAcn8gtXladr13ilhP0B00vKau1nlQ";
    if (this.amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }

    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);

    const response = await fetch('http://localhost:8080/api/payment/create-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ amount: this.amount }),
    });

    const chargeId = await response.text();
    console.log(chargeId);

    if (!chargeId || !chargeId.startsWith('ch_')) {
      console.error('Invalid chargeId:', chargeId);
      return;
    }

    const result = await this.stripe.confirmCardPayment(stripe_secret_key, {
      payment_method: {
        card: this.card,
      },
    });

    if (result.error) {
      console.log("Error: " + result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
        console.log('Payment successful!');
      }
    }
  }
}

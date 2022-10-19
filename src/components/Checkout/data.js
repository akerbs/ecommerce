{
  "id": "pi_1HgVvsHwITO0GSJrKbFikjA6",
  "object": "payment_intent",
  "last_payment_error": null,
  "livemode": false,
  "next_action": null,
  "status": "succeeded",
  "amount": 300,
  "amount_capturable": 0,
  "amount_received": 300,
  "application": null,
  "application_fee_amount": null,
  "canceled_at": null,
  "cancellation_reason": null,
  "capture_method": "automatic",
  "charges": {
    "object": "list",
    "data": [
      {
        "id": "ch_1HgVvsHwITO0GSJrcUsUq8o6",
        "object": "charge",
        "amount": 300,
        "amount_captured": 300,
        "amount_refunded": 0,
        "application": null,
        "application_fee": null,
        "application_fee_amount": null,
        "balance_transaction": "txn_1HgVvsHwITO0GSJr1zdPQ78p",
        "billing_details": {
          "address": {
            "city": "NY",
            "country": "US",
            "line1": "My Street 1",
            "line2": "",
            "postal_code": "11111",
            "state": null
          },
          "email": "99999999@gmail.com",
          "name": "name na",
          "phone": null
        },
        "calculated_statement_descriptor": "ANATOL KERBS",
        "captured": true,
        "created": 1603719620,
        "currency": "eur",
        "customer": null,
        "description": "Your Company Description",
        "destination": null,
        "dispute": null,
        "disputed": false,
        "failure_code": null,
        "failure_message": null,
        "fraud_details": {
        },
        "invoice": null,
        "livemode": false,
        "metadata": {
        },
        "on_behalf_of": null,
        "order": null,
        "outcome": {
          "network_status": "approved_by_network",
          "reason": null,
          "risk_level": "normal",
          "risk_score": 5,
          "seller_message": "Payment complete.",
          "type": "authorized"
        },
        "paid": true,
        "payment_intent": "pi_1HgVvsHwITO0GSJrKbFikjA6",
        "payment_method": "pm_1HgVvqHwITO0GSJr0pVYZOeO",
        "payment_method_details": {
          "card": {
            "brand": "visa",
            "checks": {
              "address_line1_check": "pass",
              "address_postal_code_check": "pass",
              "cvc_check": "pass"
            },
            "country": "US",
            "exp_month": 12,
            "exp_year": 2021,
            "fingerprint": "xZeatYu7AK5bmwOX",
            "funding": "credit",
            "installments": null,
            "last4": "4242",
            "network": "visa",
            "three_d_secure": null,
            "wallet": null
          },
          "type": "card"
        },
        "receipt_email": null,
        "receipt_number": null,
        "receipt_url": "https://pay.stripe.com/receipts/acct_1HGUuRHwITO0GSJr/ch_1HgVvsHwITO0GSJrcUsUq8o6/rcpt_IH448DAwdg9TvaT0DZtHanAYePj4oc6",
        "refunded": false,
        "refunds": {
          "object": "list",
          "data": [
          ],
          "has_more": false,
          "total_count": 0,
          "url": "/v1/charges/ch_1HgVvsHwITO0GSJrcUsUq8o6/refunds"
        },
        "review": null,
        "shipping": null,
        "source": null,
        "source_transfer": null,
        "statement_descriptor": null,
        "statement_descriptor_suffix": null,
        "status": "succeeded",
        "transfer_data": null,
        "transfer_group": null
      }
    ],
    "has_more": false,
    "total_count": 1,
    "url": "/v1/charges?payment_intent=pi_1HgVvsHwITO0GSJrKbFikjA6"
  },
  "client_secret": "pi_1HgVvsHwITO0GSJrKbFikjA6_secret_U5pq3NcoyDmYz7rYT04AbKul2",
  "confirmation_method": "automatic",
  "created": 1603719620,
  "currency": "eur",
  "customer": null,
  "description": "Your Company Description",
  "invoice": null,
  "metadata": {
  },
  "on_behalf_of": null,
  "payment_method": "pm_1HgVvqHwITO0GSJr0pVYZOeO",
  "payment_method_options": {
    "card": {
      "installments": null,
      "network": null,
      "request_three_d_secure": "automatic"
    }
  },
  "payment_method_types": [
    "card"
  ],
  "receipt_email": null,
  "review": null,
  "setup_future_usage": null,
  "shipping": null,
  "source": null,
  "statement_descriptor": null,
  "statement_descriptor_suffix": null,
  "transfer_data": null,
  "transfer_group": null
}
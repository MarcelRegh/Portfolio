import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ContactComponent implements OnInit {

  /**
   * This is bind to ngForm's InputFields in Template File
   */
  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };

  /**
   * A post request construct configuration
   */
  post = {
    // Where to send the post request Ex. www.my-domain/sendMail.php
    endPoint: this.getMailEndPoint(),
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };

  sendState: 'idle' | 'sending' | 'success' | 'error' = 'idle';

  constructor(private http: HttpClient) { }

  private getMailEndPoint(): string {
    const host = window.location.hostname;
    const isLocal = host === 'localhost' || host === '127.0.0.1';
    return isLocal ? '/send_mail/send_mail.php' : '/.netlify/functions/send-mail';
  }

  ngOnInit() { }

  /**
   * Do not forget to import FormsModule in app.module.ts
   */
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.sendState = 'sending';
      this.http
        .post(this.post.endPoint, this.post.body(this.contact), this.post.options)
        .subscribe({
          next: () => {
            this.sendState = 'success';
            ngForm.resetForm();
          },
          error: (error: HttpErrorResponse) => {
            console.error('Unable to send contact form:', error);
            this.sendState = 'error';
          },
        });
    }
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {SiteService} from "../../../../shared/api/site.service";
import {Contactus} from "../../../../shared/interfaces/contactus";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-contact-us',
    templateUrl: './page-contact-us.component.html',
    styleUrls: ['./page-contact-us.component.scss']
})
export class PageContactUsComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    form!: FormGroup;

    contactUs!: Contactus;

    /**
     * @return AbstractControl
     */
    public get fc() {
        return this.form.controls;
    }

    constructor(private site: SiteService, private toastr: ToastrService, private fb: FormBuilder) {
    }

    ngOnInit(): void {

        this.form = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            email: ['', [Validators.required, Validators.email]],
            subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            message: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
        });

        this.site.getContactUs().pipe(
            takeUntil(this.destroy$),
        ).subscribe(contactus => this.contactUs = contactus[0]);

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    onSubmit() {
        if (this.form.valid) {
            this.toastr.success(`Mensaje enviado correctamente `);
        } else {
            alert('invalid')
        }
    }
}

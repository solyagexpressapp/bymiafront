import {Component, OnDestroy, OnInit} from '@angular/core';
import {SiteService} from "../../../../shared/api/site.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
    selector: 'app-terms',
    templateUrl: './page-terms.component.html',
    styleUrls: ['./page-terms.component.scss']
})
export class PageTermsComponent implements OnInit, OnDestroy {

    private destroy$: Subject<void> = new Subject<void>();

    termsConditions: any = '';

    constructor(private site: SiteService) {
    }

    ngOnInit(): void {

        this.site.getTermsConditions().pipe(
            takeUntil(this.destroy$),
        ).subscribe(termsConditions => this.termsConditions = termsConditions);

    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}

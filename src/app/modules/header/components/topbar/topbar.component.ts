import { Component } from '@angular/core';
import { CurrencyService } from '../../../../shared/services/currency.service';

interface Currency {
    name: string;
    url: string;
    code: string;
    symbol: string;
}

@Component({
    selector: 'app-header-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    languages = [
        {name: 'Inglés', image: 'language-1'},
        {name: 'Español',  image: 'language-2'},
    ];

    currencies = [
        {name: '€ Euro',           url: '', code: 'EUR', symbol: '€'},
        {name: '$ US Dollar',      url: '', code: 'USD', symbol: '$'},
    ];

    constructor(
        public currencyService: CurrencyService
    ) { }

    setCurrency(currency: Currency): void {
        this.currencyService.options = {
            code: currency.code,
            display: currency.symbol,
        };
    }
}

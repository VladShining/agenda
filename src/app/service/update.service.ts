import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class UpdateService {
    constructor(private swUpdate: SwUpdate) {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe(e => {
                if (confirm(`Un nouveau mis à jour est disponible , voulez vous l'installer?`)) {
                    window.location.reload();
                }
            });
        }
    }
}

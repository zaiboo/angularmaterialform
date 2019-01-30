import { EventEmitter } from '@angular/core';

export class TestService {
    argReceived = new EventEmitter<string>();
}
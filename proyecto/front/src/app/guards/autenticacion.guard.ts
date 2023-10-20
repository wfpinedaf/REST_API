import { CanMatchFn } from '@angular/router';
import { UsersService } from '../services/usuarios.service';
import { inject } from '@angular/core';

export const autenticacionGuard: CanMatchFn = (route, segments) => {
    const _userService = inject(UsersService)
    return _userService.estaLogueado()
};

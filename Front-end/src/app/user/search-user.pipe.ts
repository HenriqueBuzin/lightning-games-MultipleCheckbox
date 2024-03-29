// Angular
import { Pipe , PipeTransform } from '@angular/core';

// Model
import { User } from './../_models/user';

@Pipe({
    name: 'searchUser',
    pure: false
})
export class SearchUserPipe implements PipeTransform{

    transform(users: User[], typed: string){

        typed = typed.toLowerCase();

        /*
            Pesquisar por data de registro
            - (user.registrationDate.toString().includes(typed))

         */

        return users.filter(user =>

            (user.name.toLowerCase().includes(typed)) ||

            (user.email.toLowerCase().includes(typed))

        );

    }

}
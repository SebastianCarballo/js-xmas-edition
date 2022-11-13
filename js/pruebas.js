function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
        'validar nombre no valido que el nombre no sea vacio',
    );

    console.assert(
        validarNombre(
            'scscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscscsc',
        ) === 'Este campo debe tener menos de 50 caracteres',
        'validar nombre no valido que el nombre sea menor a 50 caracteres',
    );
    console.assert(
        validarNombre('123123') === 'El campo nombre solo acepta letras',
        'validar nombre no valido que el nombre solo tenga letras ',
    );
    console.assert(validarNombre('sebastian') === '', 'validar nombre fallo con un nombre valido');
}

function probarvalidarCiudad() {
    console.assert(validarCiudad('Buenos Aires') === '', 'validar ciudad no funciono con un nombre de ciudad valido');
    console.assert(
        validarCiudad('') == 'El campo ciudad no puede estar vacio',
        'validar ciudad no mostro un error cuando la ciudad es vacia',
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcion no puede estar vacio',
        'La funcion validar descripcion regalo no valido que el campo no este vacio',
    );
    console.assert(
        validarDescripcionRegalo(
            'asdfdfsdfsdfdfasdfasfsadfhgfhfghjfhgjfghjfhjfghjfghjfhgjffasdfasfdasdfasdfdfadsfasdfasdfasdfasdfasdfasdfasdfsadfasfdsfasdfasd',
        ) === 'El campo de descripcion es muy largo',
        'La funcion validar descripcion regalo no valido que el campo no sea muy largo',
    );
    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'La funcion validar descripcion regalo no funciono con una descripcion correcta',
    );
    console.assert(
        validarDescripcionRegalo('*ººº') ===
            'El campo descripcion regalo solo puede tener letras,numeros,comas(,),guion(_),guion(-) y punto(.)',
        'La funcion validar descripcion regalo no valido que solo  puede tener letras y numeros,comas(,),guion(_),guion(-) y punto(.)',
    );
    return '';
}

probarValidarNombre();
probarvalidarCiudad();
probarValidarDescripcionRegalo();

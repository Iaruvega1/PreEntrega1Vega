let dineroUsuario = 4500;
let tasamensualplazofijo = 0.07;




// Inicio Sesión //
let usuario = prompt("Ingrese su usuario");
let contraseña = prompt("Ingrese su clave numérica de 4 dígitos");
while (contraseña != "0000") {
    alert("Contraseña Incorrecta, intente nuevamente");
    contraseña = prompt("Ingrese su clave numérica de 4 dígitos");
}
alert(`Bienvenid@ ${usuario} al Home Banking`);




// Funciones dentro del Home Banking //
const ingreso = x => x + dineroUsuario;
const egreso = x => dineroUsuario - x;
const gananciaplazofijo = x => x * tasamensualplazofijo;



// Dentro del Home Banking //
eleccion = prompt(`Estimado/a ${usuario}. Escriba el número de la operación que quiera realizar: 0 CONSULTAR SALDO ; 1 INGRESO DINERO ; 2 RETIRAR DINERO ; 3 PLAZO FIJO ; 4 SALIR`);

while (eleccion != "4") {

    switch (eleccion) {

        case "0":
            alert(`En tu cuenta hay $ ${dineroUsuario}`)
            break;

        case "1":
            ingresar = parseInt(prompt(`En tu cuenta hay $ ${dineroUsuario}, escriba el monto a ingresar`));
            if (ingresar <= 0) {
                alert(`Ingreso No Válido, no puedes ingresar $` + ingresar)
            } else {
                dineroUsuario = ingreso(ingresar);
                alert(`Ahora hay ` + dineroUsuario)
            }
            break;

        case "2":
            egresar = parseInt(prompt(`En tu cuenta hay $ ${dineroUsuario}, escriba el monto a retirar`));
            if (egresar <= dineroUsuario && egresar > 0) {
                dineroUsuario = egreso(egresar);
                if (egresar == dineroUsuario) {
                    alert(`Retiraste todo tu dinero, ahora no quedan fondos en la cuenta. Vuelve a ingresar dinero para poder seguir disfrutando como quieras !`)
                } else {
                    alert(`Ahora hay ` + dineroUsuario)
                }
            } else {
                alert(`No puedes retirar esa cantidad.`)
            }
            break;

        case "3":
            montoplazofijo = parseInt(prompt(`Ingrese monto para realizar plazo fijo a 30 días (Tasa Mensual del 7%) TNA 84%`));
            if (montoplazofijo <= dineroUsuario && montoplazofijo >= 100) {
                dineroUsuario = dineroUsuario + gananciaplazofijo(montoplazofijo);
                alert(`Dentro de 30 días obtendrás $` + (montoplazofijo + parseInt(gananciaplazofijo(montoplazofijo))) + ` con un rendimiento de $` + Math.trunc(gananciaplazofijo(montoplazofijo)))
                alert(`Confirmaste el plazo fijo y pasaron los 30 días, ya tienes los rendimientos ( $ ` + Math.trunc(gananciaplazofijo(montoplazofijo)) + ` ) acreditados en tu cuenta`);
            } else {
                alert(`No puedes realizar un plazo fijo con ese monto, tu dinero en cuenta es de $${dineroUsuario} y el monto mínimo para realizar un plazo fijo es de $100`)
            }
            break;


        default:
            alert("ERROR: Operacion No Válida, Intente con uno de los números.");
    };
    eleccion = prompt(`Estimado/a ${usuario}. Escriba el número de la operación que quiera realizar: 0 CONSULTAR SALDO ; 1 INGRESO DINERO ; 2 RETIRAR DINERO ; 3 PLAZO FIJO ; 4 SALIR`);
};

alert(`Chau ${usuario}, lo esperamos pronto !`);

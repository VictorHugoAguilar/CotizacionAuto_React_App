/**
 * Obtener diferencia entre año actual y el del coche
 */
export function obtenerDiffYear (year){
    return new Date().getFullYear() - year;
}
/**
 * Calcula el porcentaje segun la marca
 */
export function calculaMarca(marca){
    let incremento;
    switch(marca){
        case 'americano':
            incremento = 1.15;
            break;
            case 'europeo':
                incremento = 1.3;
                break;
                case 'asiatico':
                    incremento = 1.05;
                    break;
                    default:
                        incremento = 1;
                        break;
            
    }
    return incremento;
}
/**
 * Calcula el porcentaje segun el plan
 */
export function calculaPlan( plan ) {
    return (plan === 'basico') ? 1.2 : 1.5;
}
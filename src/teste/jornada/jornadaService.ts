export interface JornadaService<P, String> {
    run(parametros: P): String;
}
  
export function Jornada(produto: string, central: string) {
    return function (target: Function) {
        Reflect.defineMetadata("produto", produto, target);
        Reflect.defineMetadata("central", central, target);
    };
}
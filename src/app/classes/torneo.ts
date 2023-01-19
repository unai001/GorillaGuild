export class torneo {
    idTorneo: number = 0;
    nombreTorneo: String = "";
    fecha: String = "";
    ganador: String = "";
    segundo: String = "";
    tercero: String = "";
    numeroParticipantes: number = 0;
    pricepool: number = 0;
    vodFinal: String = "";
    logoTorneo: String = "";
    logoGanador: String = "";
    descripcion: String = "";
    bracketLink: String = "";

    constructor(idTorneo: number, nombreTorneo: String, fecha: String, ganador: String,segundo: String,tercero: String, numeroParticipantes: number, pricepool: number, vodFinal: String, logoTorneo: String, logoGanador: String, descripcion: String, bracketLink: String) {
        this.idTorneo = idTorneo;
        this.nombreTorneo = nombreTorneo;
        this.fecha = fecha;
        this.ganador = ganador;
        this.segundo = segundo;
        this.tercero = tercero;
        this.numeroParticipantes = numeroParticipantes;
        this.pricepool = pricepool;
        this.vodFinal = vodFinal;
        this.logoTorneo = logoTorneo;
        this.logoGanador = logoGanador;
        this.descripcion = descripcion;
        this.bracketLink = bracketLink;
    }
}

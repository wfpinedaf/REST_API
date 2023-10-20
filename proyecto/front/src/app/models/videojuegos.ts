export class ClassVideojuego {
    _id?: string
    NombreJuego: string
    Plataforma: string
    Descripcion: string
    urlImagen: string

    constructor(NombreJuego: string, Plataforma: string, Descripcion: string, urlImagen: string) {
        this.NombreJuego = NombreJuego
        this.Plataforma = Plataforma
        this.Descripcion = Descripcion
        this.urlImagen = urlImagen
    }
}

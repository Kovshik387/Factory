export interface IDatabaseRecord {
    id: number;
    category: string;
    image: string;
    expirationDate: string;
    description: string;
}
export interface Enamel extends IDatabaseRecord {
    color: string[];
    baseMaterial: string;
    skinView: string; // вид пленки
    colorName: string;
    viscosity: string; // вязкость
    adhesion: string; // адгезия
    appointment: string[]; // назначение
    properties: string[];
    volatiles: string; // летучие вещества
}
export interface Priming extends IDatabaseRecord {
    resin: string; // смола
    solvent: string; // растворитель
    fireHazard: string; // пожароопастность
    coldResist: string; // морозостойкость
    viscosity: string; // вязкост
    density: string; // плотность
}
export interface Varnish extends IDatabaseRecord {
    resin: string; // смола
    solvent: string; // растворитель
    viscosity: string; // вязкост
    density: string; // плотность
    shine: string; // блеск
    fireHazard: string; // пожароопастность
    coldResist: string; // морозостойкость
}
export const Database: IDatabaseRecord[] = [
    <Varnish>{
        
    }
]
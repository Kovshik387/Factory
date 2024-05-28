/* 
Категория

*/

export interface IDatabaseRecord {
    category: string;
    resin: string; // смола
    solvent: string; // растворитель
    viscosity: string; // вязкость
    density: string; // плотность
    color: string;
    dryResidue: string; // сухой остаток
    fireresist: string;
    coldresist: string;
    shine: string; // блеск
    description: string;
    recommendation: string;
    image: string;
}

export const Database: IDatabaseRecord[] = [
    
]